import { createNavigation } from 'next-intl/navigation'
import { createElement, forwardRef, type ComponentProps } from 'react'
import { routing } from './routing'

const navigation = createNavigation(routing)
export const { usePathname, useRouter } = navigation

// Keep fragments and queries separate so next-intl can match localized routes.
export const Link = forwardRef<HTMLAnchorElement, ComponentProps<typeof navigation.Link>>(
  function Link({ href, ...props }, ref) {
    if (typeof href === 'string' && href.startsWith('/') && /[?#]/.test(href)) {
      const url = new URL(href, 'https://internal.invalid')
      return createElement(navigation.Link, {
        ...props, ref,
        href: { pathname: url.pathname, query: url.searchParams.toString(), hash: url.hash },
      })
    }
    return createElement(navigation.Link, { ...props, ref, href })
  },
)
