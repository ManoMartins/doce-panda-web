import { Box, Button, Dialog } from '@primer/react'
import Form from '../../../../components/form'
import { useForm } from 'react-hook-form'
import { useCallback } from 'react'
import { useCreateAddress } from '@features/customer/mutations/use-create-address'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '@features/customer/components/create-address/schema'

interface CreateAddressProps {
  isOpen: boolean
  onDismiss: () => void
}

interface InputFormAddress {
  city: string
  state: string
  street: string
  number: string
  zipCode: string
  neighborhood: string
  isMain: boolean
}

export function CreateAddress({ isOpen, onDismiss }: CreateAddressProps) {
  const methods = useForm({
    resolver: yupResolver(schema),
  })

  const createAddress = useCreateAddress()

  const onSubmit = useCallback(
    async (input: InputFormAddress) => {
      try {
        await createAddress.mutateAsync(input)
        onDismiss()
      } catch (err) {
        console.log(err)
      }
    },
    [createAddress]
  )

  return (
    <Dialog isOpen={isOpen} onDismiss={onDismiss} aria-labelledby="header-id">
      <Dialog.Header id="header-id">Adicionar endereço</Dialog.Header>

      <Box p={3}>
        <Form methods={methods} onSubmit={onSubmit} sx={{ '> *': { mt: 2 } }}>
          <Form.Text name="zipCode" label="CEP" />
          <Form.Text name="street" label="Rua" />
          <Form.Text name="number" label="Numero" />
          <Form.Text name="neighborhood" label="Bairro" />
          <Form.Text name="city" label="Cidade" />
          <Form.Text name="state" label="Estado" />

          <Button variant="primary" tyoe="submit" sx={{ width: '100%', mt: 3 }}>
            Adicionar endereço
          </Button>
        </Form>
      </Box>
    </Dialog>
  )
}
