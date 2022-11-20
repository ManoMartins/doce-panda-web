import { Box } from '@primer/react'
import Form from '@components/form'

export function CheckoutCoupon() {
  return (
    <>
      <Box
        id="choiceHeading"
        borderBottomWidth="1px"
        borderBottomStyle="solid"
        borderBottomColor="border.default"
        pb={2}
        mb={3}
        fontSize={2}
        mt={3}
      >
        Cupom de desconto
      </Box>

      <Form.Text name="voucherCode" placeholder="Digite o código do cupom" />
    </>
  )
}
