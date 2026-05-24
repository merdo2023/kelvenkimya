import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(200),
  phone: z.string().max(40).optional(),
  company: z.string().max(120).optional(),
  message: z.string().min(1).max(5000),
  locale: z.enum(['tr', 'en']).optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = contactSchema.parse(body)

    // TODO: E-posta servisi entegrasyonu (Resend, Nodemailer vb.)
    // Örnek: await sendContactEmail(data)
    console.info('[contact]', {
      name: data.name,
      email: data.email,
      company: data.company,
      locale: data.locale,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'validation_failed', issues: error.issues },
        { status: 400 },
      )
    }

    return NextResponse.json(
      { success: false, error: 'internal_error' },
      { status: 500 },
    )
  }
}
