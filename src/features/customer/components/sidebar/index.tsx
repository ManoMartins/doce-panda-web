import { NavList, PageLayout } from '@primer/react'
import { NavListItem } from '../nav-list-item'
import { useAuth } from '@contexts/use-auth'
import { Link } from 'react-router-dom'

export function Sidebar() {
  const { logout } = useAuth()

  return (
    <PageLayout.Pane position="start">
      <NavList>
        <NavListItem href="/profile" label="Seu perfil" />
        <NavListItem href="/address" label="Endereços" />
        <NavListItem href="/order" label="Seus pedidos" />
        <NavListItem href="/payment" label="Seus pagamentos" />
        <NavListItem href="/coupon" label="Seus cupons" />

        <NavList.Divider />

        <NavList.Item as={Link} to="/sign-in" onClick={() => logout()}>
          Sair da conta
        </NavList.Item>
      </NavList>
    </PageLayout.Pane>
  )
}
