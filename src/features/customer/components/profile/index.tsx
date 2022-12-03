import {
  Heading,
  Pagehead,
  PageLayout as PrimerPageLayout,
} from '@primer/react'
import Form from '../../../../components/form'
import { useCallback, useEffect } from 'react'
import { PageLayout } from '../page-layout'
import { useForm } from 'react-hook-form'
import {
  GetUserByIdResponse,
  useGetUserById,
} from '@features/customer/queries/use-get-user-by-id'

function sanitizeUser(rawUser: GetUserByIdResponse) {
  return rawUser
}

export function Profile() {
  const user = useGetUserById({
    userId: '4b8d4717-9e17-43fc-9356-c296f646f2f2',
  })

  const methods = useForm()

  const onSubmit = useCallback(() => {}, [])

  useEffect(() => {
    if (!user.data) return
    methods.reset(sanitizeUser(user.data))
  }, [methods, user.data])

  return (
    <PageLayout>
      <PrimerPageLayout.Content>
        <Pagehead sx={{ pt: 0, pb: 2 }}>
          <Heading sx={{ fontSize: 4, fontWeight: 400 }}>Perfil</Heading>
        </Pagehead>

        <Form methods={methods} onSubmit={onSubmit} sx={{ '> *': { mt: '3' } }}>
          <Form.Text name="name" label="Nome" />

          <Form.Text name="email" label="Email" />

          <Form.Text name="phoneNumber" label="Telefone" />

          <Form.Text name="documentNumber" label="CPF" />

          <Form.Text name="birthDate" label="Data de nascimento" />
        </Form>
      </PrimerPageLayout.Content>
    </PageLayout>
  )
}
