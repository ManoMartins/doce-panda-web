import {
  Button,
  Autocomplete,
  FormControl,
  Header as PrimerHeader,
} from '@primer/react'
import { FiShoppingCart } from 'react-icons/fi'
import { useAuth } from '@contexts/use-auth'
import { useCart } from '@contexts/use-cart'

import { Link } from 'react-router-dom'

export function Header() {
  const { user, isLogged } = useAuth()
  const { amount } = useCart()

  return (
    <PrimerHeader>
      <PrimerHeader.Item>
        <PrimerHeader.Link as={Link} to="/">
          <span>Doce panda</span>
        </PrimerHeader.Link>
      </PrimerHeader.Item>

      <PrimerHeader.Item>
        <PrimerHeader.Link as={Link} to="/">
          Cardápio
        </PrimerHeader.Link>
      </PrimerHeader.Item>

      <PrimerHeader.Item full>
        <FormControl>
          <Autocomplete>
            <Autocomplete.Input placeholder="Procure por bolos, donuts..." />
            <Autocomplete.Overlay>
              <Autocomplete.Menu
                items={[
                  { text: 'css', id: 0 },
                  { text: 'css-in-js', id: 1 },
                  { text: 'styled-system', id: 2 },
                  { text: 'javascript', id: 3 },
                  { text: 'typescript', id: 4 },
                  { text: 'react', id: 5 },
                  { text: 'design-systems', id: 6 },
                ]}
                selectedItemIds={[]}
              />
            </Autocomplete.Overlay>
          </Autocomplete>
        </FormControl>
      </PrimerHeader.Item>

      <PrimerHeader.Item>
        {isLogged && user ? (
          <PrimerHeader.Link as={Link} to="/profile">
            Olá, {user.name}
          </PrimerHeader.Link>
        ) : (
          <PrimerHeader.Link as={Link} to="/sign-in">
            Entrar
          </PrimerHeader.Link>
        )}
      </PrimerHeader.Item>

      <PrimerHeader.Item>
        <PrimerHeader.Link as={Link} to="/checkout">
          <Button
            aria-label="Carrinho de compra"
            leadingIcon={Icon}
            sx={{
              span: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              },
              ':hover': {
                filter: 'brightness(0.9)',
              },
            }}
          >
            {amount}
          </Button>
        </PrimerHeader.Link>
      </PrimerHeader.Item>
    </PrimerHeader>
  )
}

function Icon() {
  return <FiShoppingCart size={20} />
}
