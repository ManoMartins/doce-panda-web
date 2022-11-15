import { Box, Button, Heading, Link, Text } from '@primer/react'

import { useNavigate } from 'react-router-dom'

import { useCallback } from 'react'
import Form from '../../../../components/form'
import { useCreateCustomer } from '../../../../features/customer'

interface FormData {
  email: string
  password: string
}

export function SignIn() {
  const { mutateAsync } = useCreateCustomer()

  const navigate = useNavigate()

  const onSubmit = useCallback(async (data: FormData) => {
    await mutateAsync(data)
  }, [])

  return (
    <Box width="19.25rem" mx="auto">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box
          mt="5"
          mb="4"
          width="48px"
          height="48px"
          borderRadius="50%"
          bg="canvas.subtle"
        />

        <Heading
          sx={{
            fontSize: 4,
            textAlign: 'center',
            fontWeight: 'normal',
            letterSpacing: '-0.05em',
          }}
        >
          Entrar em Doce Panda
        </Heading>
      </Box>

      <Box mt="3" bg="canvas.subtle" p="3" borderRadius="2">
        <Form onSubmit={onSubmit} sx={{ '> *': { mt: '3' } }}>
          <Form.Text name="email" label="Email" type="email" />

          <Form.Text name="password" label="Senha" type="password" />

          <Button
            type="submit"
            variant="primary"
            onClick={() => navigate('/')}
            sx={{
              width: '100%',
            }}
          >
            Entrar
          </Button>
        </Form>
      </Box>

      <Box
        mt="3"
        px="3"
        borderRadius="2"
        border="1px solid"
        borderColor="border.default"
        fontSize="1"
      >
        <Text as="p" textAlign="center" letterSpacing="-0.025em">
          Novo em doce panda ? <Link href="/sign-up">Criar uma conta</Link>.
        </Text>
      </Box>
    </Box>
  )
}
