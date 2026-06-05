import { Resend } from 'resend'

export interface ContactEmailPayload {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  locale?: 'tr' | 'en'
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

const emailCopy = {
  tr: {
    subjectPrefix: 'İletişim formu',
    heading: 'Yeni iletişim formu mesajı',
    footer: 'Bu e-posta kelvenkimya.com iletişim formundan gönderilmiştir. Yanıtlamak için doğrudan cevaplayabilirsiniz.',
    labels: {
      name: 'Ad Soyad',
      email: 'E-posta',
      phone: 'Telefon',
      company: 'Firma',
      language: 'Dil',
      message: 'Mesaj',
    },
  },
  en: {
    subjectPrefix: 'Contact form',
    heading: 'New contact form message',
    footer: 'This email was sent from the kelvenkimya.com contact form. You can reply directly to respond.',
    labels: {
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      company: 'Company',
      language: 'Language',
      message: 'Message',
    },
  },
} as const

function buildEmailHtml(data: ContactEmailPayload): string {
  const locale = data.locale === 'en' ? 'en' : 'tr'
  const copy = emailCopy[locale]
  const rows = [
    [copy.labels.name, data.name],
    [copy.labels.email, data.email],
    [copy.labels.phone, data.phone || '—'],
    [copy.labels.company, data.company || '—'],
    [copy.labels.language, data.locale === 'en' ? 'EN' : 'TR'],
    [copy.labels.message, data.message],
  ]

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;color:#0b1f33;vertical-align:top;width:120px;">${escapeHtml(label)}</td>
          <td style="padding:8px 12px;border:1px solid #e5e7eb;color:#374151;white-space:pre-wrap;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join('')

  return `
    <div style="font-family:system-ui,-apple-system,sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#0b1f33;margin:0 0 16px;">${escapeHtml(copy.heading)}</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">${tableRows}</table>
      <p style="margin-top:24px;font-size:12px;color:#6b7280;">${escapeHtml(copy.footer)}</p>
    </div>
  `.trim()
}

export async function sendContactEmail(data: ContactEmailPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev'

  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured')
  }
  if (!to) {
    throw new Error('CONTACT_EMAIL is not configured')
  }

  const locale = data.locale === 'en' ? 'en' : 'tr'
  const resend = new Resend(apiKey)

  const { error } = await resend.emails.send({
    from: `Kelven Kimya <${from}>`,
    to: [to],
    replyTo: data.email,
    subject: `[Kelven Kimya] ${emailCopy[locale].subjectPrefix} — ${data.name}`,
    html: buildEmailHtml(data),
  })

  if (error) {
    throw new Error(error.message)
  }
}
