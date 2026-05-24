'use client'

import { useState, type FormEvent } from 'react'
import { useLocale } from 'next-intl'
import { useTranslation } from '@/hooks/useTranslation'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { cardAccentColors } from '@/data/accentColors'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const ease = [0.22, 1, 0.36, 1] as const
const accent = cardAccentColors[0]

const inputBase =
  'w-full rounded-xl border px-4 py-3.5 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan/20'
const inputNormal = `${inputBase} border-border/60 bg-light-bg/80 focus:border-cyan focus:bg-white`
const inputError = `${inputBase} border-red-400 bg-red-50/80 focus:border-red-400`

export function ContactForm() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const locale = useLocale()

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = t('contact.form.validation.nameRequired')
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.form.validation.emailRequired')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.form.validation.emailInvalid')
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.form.validation.messageRequired')
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, locale }),
      })

      if (!response.ok) {
        throw new Error('submit_failed')
      }

      setIsSubmitted(true)
    } catch {
      setSubmitError(t('contact.form.error'))
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease }}
        className="group relative h-full"
      >
        <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-green/20 via-white/10 to-cyan/20 opacity-80" aria-hidden="true" />
        <div className="relative flex h-full min-h-[420px] flex-col items-center justify-center rounded-3xl bg-white p-10 text-center shadow-[0_4px_40px_-10px_rgba(11,31,51,0.12)] sm:p-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, type: 'spring', stiffness: 200 }}
            className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan/15 to-green/15"
          >
            <span className="h-3 w-3 rounded-full bg-green shadow-[0_0_16px_rgba(56,161,105,0.6)]" aria-hidden="true" />
          </motion.div>
          <h3 className="text-2xl font-bold text-navy">{t('contact.form.success.title')}</h3>
          <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
            {t('contact.form.success.description')}
          </p>
        </div>
      </motion.div>
    )
  }

  const fields = ['name', 'email', 'phone', 'company'] as const

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease }}
      className="group relative h-full"
    >
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-white via-border/20 to-white opacity-90" aria-hidden="true" />
      <div
        className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${accent.wash} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-[0_4px_40px_-10px_rgba(11,31,51,0.1)] sm:p-10">
        <motion.div
          className={`absolute left-0 top-8 h-[calc(100%-4rem)] w-[3px] rounded-r-full bg-gradient-to-b ${accent.gradient}`}
          initial={{ scaleY: 0.2, opacity: 0.3 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          style={{ originY: 0 }}
        />

        <div className="relative pl-6">
          <div className="flex items-center gap-3">
            <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} aria-hidden="true" />
            <motion.div
              className={`h-px bg-gradient-to-r ${accent.gradient}`}
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
            />
          </div>

          <h2 className="mt-5 text-2xl font-bold text-navy sm:text-3xl">{t('contact.form.title')}</h2>
          <p className="mt-2 text-base text-muted">{t('contact.form.subtitle')}</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              {fields.map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="mb-2 block text-sm font-semibold text-navy">
                    {t(`contact.form.fields.${field}.label`)}
                  </label>
                  <input
                    id={field}
                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                    value={formData[field]}
                    onChange={(e) => handleChange(field, e.target.value)}
                    placeholder={t(`contact.form.fields.${field}.placeholder`)}
                    className={errors[field as keyof FormErrors] ? inputError : inputNormal}
                  />
                  {errors[field as keyof FormErrors] && (
                    <p className="mt-1.5 text-xs font-medium text-red-500">
                      {errors[field as keyof FormErrors]}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-semibold text-navy">
                {t('contact.form.fields.message.label')}
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                placeholder={t('contact.form.fields.message.placeholder')}
                className={errors.message ? inputError : inputNormal}
              />
              {errors.message && (
                <p className="mt-1.5 text-xs font-medium text-red-500">{errors.message}</p>
              )}
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="pt-2">
              {submitError && (
                <p className="mb-3 text-sm font-medium text-red-500">{submitError}</p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group/btn inline-flex w-full items-center justify-center gap-3 rounded-xl gradient-accent px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-cyan/25 transition-all duration-300 hover:shadow-xl hover:shadow-cyan/35 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-all duration-300 group-hover/btn:bg-white/30">
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </span>
              </button>
            </motion.div>
          </form>
        </div>
      </div>
    </motion.div>
  )
}
