import Form from '../../../../components/form'
import { useCallback } from 'react'
import { Box, Button, Heading } from '@primer/react'

interface FormData {
  name: string
  password: string
  phoneNumber: string
  documentNumber: string
  gender: string
  birthDate: string
}

export function SignUp() {
  const onSubmit = useCallback((data: FormData) => {
    console.log(data)
  }, [])

  return (
    <Box mx="auto" maxWidth={588} mt={40}>
      <Heading
        sx={{
          fontSize: 4,
          fontWeight: 'normal',
          letterSpacing: '-0.05em',
        }}
      >
        Cadastro
      </Heading>

      <Form
        display="flex"
        onSubmit={onSubmit}
        flexDirection="column"
        mb={5}
        sx={{ '> *': { mt: '3' } }}
      >
        <Form.Text name="name" label="Nome" />

        <Form.Text name="password" label="Senha" />

        <Form.Text name="confirmPassword" label="Repita a senha" />

        <Form.Text name="email" label="Email" />

        <Form.Text name="phoneNumber" label="Telefone" />

        <Form.Text name="documentNumber" label="CPF" />

        <Form.Text name="gender" label="Gênero" />

        <Form.Date name="birthDate" label="Data de nascimento" />

        <Button
          variant="primary"
          type="submit"
          size="large"
          sx={{ width: '100%' }}
          onClick={() => alert('Conta cadastrada')}
        >
          Criar cadastro
        </Button>
      </Form>
    </Box>
  )
}
