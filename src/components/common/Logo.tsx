'use client'

import Image from 'next/image'
import { useTranslation } from '@/hooks/useTranslation'

const LOGO_PATH = '/kelvenkimya.png'

interface LogoProps {
  className?: string
  variant?: 'default' | 'navbar' | 'footer'
  tone?: 'light' | 'dark'
}

const variantSizes: Record<Exclude<LogoProps['variant'], undefined>, string> = {
  navbar: 'h-11 w-auto max-w-[9.5rem] sm:h-[4.25rem] sm:max-w-none md:h-[4.75rem]',
  footer: 'h-12 w-auto sm:h-14',
  default: 'h-12 w-auto sm:h-14 md:h-16',
}

export function Logo({ className, variant = 'default', tone = 'dark' }: LogoProps) {
  const { t } = useTranslation()
  const toneClass = tone === 'light' ? 'brightness-0 invert' : ''

  return (
    <Image
      src={LOGO_PATH}
      alt={t('common.companyName')}
      className={`${className ?? variantSizes[variant]} transition-[filter,opacity] duration-300 ease-out motion-reduce:transition-none ${toneClass}`}
      width={320}
      height={80}
      priority={variant === 'navbar'}
    />
  )
}
