import {
  Box,
  Button,
  FormControl,
  PageLayout,
  Radio,
  RadioGroup,
  Text,
} from '@primer/react'
import Form from '../../../components/form'
import { useCallback } from 'react'
import { useNavigate } from 'react-router'

export function Process() {
  const navigate = useNavigate()

  const handleChange = useCallback((selected: string | null) => {
    console.log(selected)
  }, [])

  return (
    <PageLayout containerWidth="large">
      <PageLayout.Content>
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
          <FormControl
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
              Rua bandeirantes 1140, Jardim Revista, Suzano - SP, CEP 08694-180
            </FormControl.Label>
          </FormControl>
        </RadioGroup>

        <Box
          pb={2}
          mb={3}
          fontSize={2}
          id="paymentMethod"
          borderBottomWidth="1px"
          borderBottomStyle="solid"
          borderBottomColor="border.default"
        >
          Forma de pagamento
        </Box>

        <RadioGroup
          aria-labelledby="paymentMethod"
          name="choiceGroup"
          onChange={handleChange}
        >
          <FormControl
            sx={{
              p: 3,
              borderWidth: 1,
              borderRadius: 2,
              borderStyle: 'solid',
              borderColor: 'border.subtle',
            }}
          >
            <Radio value="one" />

            <FormControl.Label>Terminado com 1234</FormControl.Label>
          </FormControl>
        </RadioGroup>

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
      </PageLayout.Content>

      <PageLayout.Pane>
        <Box
          borderWidth={1}
          borderRadius={2}
          borderStyle="solid"
          borderColor="border.subtle"
        >
          <Box
            pt={3}
            px={3}
            display="flex"
            flexDirection="column"
            sx={{ '> *': { mb: 3 } }}
          >
            <Box display="flex" justifyContent="space-between">
              <Text as="strong">Subtotal</Text>
              <Text>R$ 17,00</Text>
            </Box>

            <Box display="flex" justifyContent="space-between">
              <Text as="strong">Frete</Text>
              <Text>R$ 5,00</Text>
            </Box>
          </Box>

          <Box
            p={3}
            display="flex"
            bg="canvas.subtle"
            justifyContent="space-between"
          >
            <Text as="strong">Total</Text>

            <Text>R$ 23,00</Text>
          </Box>
        </Box>

        <Button
          variant="primary"
          onClick={() => navigate('/thanks')}
          sx={{ mt: 2, width: '100%' }}
        >
          Finalizar pedido
        </Button>
      </PageLayout.Pane>
    </PageLayout>
  )
}
