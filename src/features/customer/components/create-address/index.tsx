import { Box, Button, Dialog } from '@primer/react'
import Form from '../../../../components/form'

interface CreateAddressProps {
  isOpen: boolean
  onDismiss: () => void
}

export function CreateAddress({ isOpen, onDismiss }: CreateAddressProps) {
  return (
    <Dialog isOpen={isOpen} onDismiss={onDismiss} aria-labelledby="header-id">
      <Dialog.Header id="header-id">Adicionar cartão de credito</Dialog.Header>
      <Box p={3}>
        <Form onSubmit={() => {}} sx={{ '> *': { mt: 2 } }}>
          <Form.Text name="zipCode" label="CEP" />
          <Form.Text name="street" label="Rua" />
          <Form.Text name="number" label="Numero" />
          <Form.Text name="neighborhood" label="Bairro" />
          <Form.Text name="city" label="Cidade" />
          <Form.Text name="state" label="Estado" />

          <Button
            variant="primary"
            onClick={onDismiss}
            sx={{ width: '100%', mt: 3 }}
          >
            Adicionar endereço
          </Button>
        </Form>
      </Box>
    </Dialog>
  )
}
