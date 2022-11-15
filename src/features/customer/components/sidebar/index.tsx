import { NavList, PageLayout } from '@primer/react'
import { NavListItem } from '../nav-list-item'

export function Sidebar() {
  return (
    <PageLayout.Pane position="start">
      <NavList>
        <NavListItem href="/profile" label="Seu perfil" />
        <NavListItem href="/address" label="Endereços" />
        <NavListItem href="/order" label="Seus pedidos" />
        <NavListItem href="/payment" label="Seus pagamentos" />
        <NavListItem href="/coupon" label="Seus cupons" />

        <NavList.Divider />

        <NavList.Item onClick={() => alert('Deslogar o usuário')}>
          Sair da conta
        </NavList.Item>
      </NavList>
    </PageLayout.Pane>
  )
}
