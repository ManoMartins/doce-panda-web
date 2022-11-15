import { NavList } from '@primer/react'
import { useLocation } from 'react-router'

interface NavListItemProps {
  href: string
  label: string
}

export function NavListItem({ href, label }: NavListItemProps) {
  const location = useLocation()

  const current = location.pathname === href && 'page'

  return (
    <NavList.Item href={href} aria-current={current}>
      {label}
    </NavList.Item>
  )
}
