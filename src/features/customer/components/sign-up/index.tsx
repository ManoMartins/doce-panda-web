import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useCallback, useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Flash, Heading } from '@primer/react'

import { schema } from './schema'
import Form from '@components/form'
import { useError } from '@hooks/use-error'
import { useCreateUser } from '@features/auth/service/use-create-user'

interface FormData {
  name: string
  email: string
  gender: string
  password: string
  phoneNumber: string
  documentNumber: string
  birthDate: string
}

export function SignUp() {
  const { handleError } = useError()
  const createUser = useCreateUser()
  const navigate = useNavigate()

  const methods = useForm({ resolver: yupResolver(schema) })

  const onSubmit = useCallback(async (data: FormData) => {
    await createUser.mutateAsync(data)
  }, [])

  useEffect(() => {
    if (createUser.isSuccess) {
      navigate('/sign-up')
    }
  }, [createUser.isSuccess])

  return (
    <Box mx="auto" maxWidth={588} mt={40}>
      {createUser.isError && (
        <Flash variant="danger">
          {handleError(createUser.error).errorMessage}
        </Flash>
      )}

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
        methods={methods}
        display="flex"
        onSubmit={onSubmit}
        flexDirection="column"
        mb={5}
        sx={{ '> *': { mt: '3' } }}
      >
        <Form.Text name="name" label="Nome" />

        <Form.Text name="email" label="Email" type="email" />

        <Form.Text name="password" label="Senha" />

        <Form.Text name="phoneNumber" label="Telefone" />

        <Form.Text name="documentNumber" label="CPF" />

        <Form.Text name="gender" label="Gênero" />

        <Form.Date name="birthDate" label="Data de nascimento" />

        <Button
          variant="primary"
          type="submit"
          size="large"
          sx={{ width: '100%' }}
        >
          Criar cadastro
        </Button>
      </Form>
    </Box>
  )
}
