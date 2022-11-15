import { Box, Button, Dialog } from '@primer/react'
import Form from '../../../../components/form'

interface CreateCardPaymentProps {
  isOpen: boolean
  onDismiss: () => void
}

export function CreateCardPayment({
  isOpen,
  onDismiss,
}: CreateCardPaymentProps) {
  return (
    <Dialog isOpen={isOpen} onDismiss={onDismiss} aria-labelledby="header-id">
      <Dialog.Header id="header-id">Adicionar cartão de credito</Dialog.Header>
      <Box p={3}>
        <Form onSubmit={() => {}} sx={{ '> *': { mt: 2 } }}>
          <Form.Text name="cardNumber" label="Numero do cartão" />
          <Form.Text name="holderName" label="Titular do cartão" />
          <Form.Text name="expirationDate" label="Data de expiração" />
          <Form.Text name="cvv" label="CVV" />
          <Form.Text name="documentNumber" label="CPF" />

          <Button
            variant="primary"
            onClick={onDismiss}
            sx={{ width: '100%', mt: 3 }}
          >
            Adicionar cartão
          </Button>
        </Form>
      </Box>
    </Dialog>
  )
}
