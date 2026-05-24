'use client'

import { useTranslation } from '@/hooks/useTranslation'

export const LOGO_PATH = '/kelvenkimya.png'

interface LogoProps {
  className?: string
  variant?: 'default' | 'navbar' | 'footer'
}

const variantSizes: Record<Exclude<LogoProps['variant'], undefined>, string> = {
  navbar: 'h-14 w-auto sm:h-[4.25rem] md:h-[4.75rem]',
  footer: 'h-12 w-auto sm:h-14',
  default: 'h-12 w-auto sm:h-14 md:h-16',
}

export function Logo({ className, variant = 'default' }: LogoProps) {
  const { t } = useTranslation()

  return (
    <img
      src={LOGO_PATH}
      alt={t('common.companyName')}
      className={className ?? variantSizes[variant]}
      width={320}
      height={80}
      decoding="async"
    />
  )
}
