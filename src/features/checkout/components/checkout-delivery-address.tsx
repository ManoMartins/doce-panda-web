import { Box, FormControl, Radio, RadioGroup, Text } from '@primer/react'
import { useListAddresses } from '@features/customer/queries/use-list-addresses'

interface CheckoutDeliveryAddressProps {
  handleChange: (selected: string | null) => void
}

export function CheckoutDeliveryAddress({
  handleChange,
}: CheckoutDeliveryAddressProps) {
  const listAddresses = useListAddresses()

  return (
    <>
      <Box
        id="deliveryAddress"
        borderBottomWidth="1px"
        borderBottomStyle="solid"
        borderBottomColor="border.default"
        pb={2}
        mb={3}
        fontSize={2}
      >
        Endereço de entrega
      </Box>

      <RadioGroup
        aria-labelledby="deliveryAddress"
        name="choiceGroup"
        onChange={handleChange}
        sx={{ mb: 4 }}
      >
        {listAddresses.data ? (
          listAddresses.data.map((address) => (
            <FormControl
              key={address.id}
              sx={{
                p: 3,
                borderWidth: 1,
                borderColor: 'border.subtle',
                borderStyle: 'solid',
                borderRadius: 2,
              }}
            >
              <Radio value="one" />

              <FormControl.Label>
                Rua bandeirantes 1140, Jardim Revista, Suzano - SP, CEP
                08694-180
              </FormControl.Label>
            </FormControl>
          ))
        ) : (
          <Text as={'span'} fontSize={1} color={'fg.subtle'}>
            Nenhum endereço cadastrado
          </Text>
        )}
      </RadioGroup>
    </>
  )
}
