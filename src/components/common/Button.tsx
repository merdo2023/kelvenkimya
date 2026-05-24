'use client'

import { Link } from '@/i18n/navigation'
import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'outline-dark' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  to?: string
  href?: string
  type?: 'button' | 'submit' | 'reset'
  className?: string
  onClick?: () => void
  disabled?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'gradient-accent text-white shadow-lg shadow-cyan/25 hover:brightness-110 focus-visible:ring-cyan',
  secondary:
    'bg-green text-white shadow-lg shadow-green/20 hover:bg-green/90 focus-visible:ring-green',
  outline:
    'border border-white/30 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15 focus-visible:ring-white',
  'outline-dark':
    'border border-brand-blue/20 bg-white text-brand-blue shadow-sm hover:border-brand-blue/40 hover:bg-brand-blue/5 focus-visible:ring-brand-blue',
  ghost:
    'text-brand-blue hover:bg-brand-blue/5 focus-visible:ring-brand-blue',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  type = 'button',
  className = '',
  onClick,
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (to) {
    return (
      <Link href={to as '/'} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
