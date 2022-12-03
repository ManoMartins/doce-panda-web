import { Box, Button, Dialog } from '@primer/react'
import Form from '../../../../components/form'
import { useForm } from 'react-hook-form'
import { useCallback } from 'react'
import { useCreateCreditCard } from '@features/customer/mutations/use-create-credit-card'

interface CreateCardPaymentProps {
  isOpen: boolean
  onDismiss: () => void
}

interface InputFormCreditCard {
  cvv: string
  cardNumber: string
  holderName: string
  expirationDate: string
  documentNumber: string
}

export function CreateCardPayment({
  isOpen,
  onDismiss,
}: CreateCardPaymentProps) {
  const methods = useForm()

  const createCreditCard = useCreateCreditCard()

  const onSubmit = useCallback(
    async (input: InputFormCreditCard) => {
      try {
        await createCreditCard.mutateAsync({
          cardBrand: 'VISA',
          cardSecurityCode: input.cvv,
          cardHolder: input.cardNumber,
          cardLastNumber: input.holderName,
          cardExpirationDate: input.expirationDate,
          cardIdentification: input.documentNumber,
        })
      } catch (err) {
        console.log(err)
      }
    },
    [createCreditCard]
  )

  return (
    <Dialog isOpen={isOpen} onDismiss={onDismiss} aria-labelledby="header-id">
      <Dialog.Header id="header-id">Adicionar cartão de credito</Dialog.Header>

      <Box p={3}>
        <Form methods={methods} onSubmit={onSubmit} sx={{ '> *': { mt: 2 } }}>
          <Form.Text name="cardNumber" label="Numero do cartão" />

          <Form.Text name="holderName" label="Titular do cartão" />

          <Form.Text name="expirationDate" label="Data de expiração" />

          <Form.Text name="cvv" label="CVV" />

          <Form.Text name="documentNumber" label="CPF" />

          <Button
            type="submit"
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
