import { Header as PrimerHeader, IconButton } from '@primer/react'
import { FiShoppingBag } from 'react-icons/fi'

export function Header() {
  return (
    <PrimerHeader>
      <PrimerHeader.Item>
        <PrimerHeader.Link href="#">
          <span>GitHub</span>
        </PrimerHeader.Link>
      </PrimerHeader.Item>

      <PrimerHeader.Item full>Menu</PrimerHeader.Item>

      <PrimerHeader.Item>
        <IconButton
          aria-label="Carrinho de compra"
          icon={Icon}
          sx={{
            width: 38,
            height: 38,
            span: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
          }}
        />
      </PrimerHeader.Item>
    </PrimerHeader>
  )
}

function Icon() {
  return <FiShoppingBag size={20} />
}
