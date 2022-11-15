import {
  Heading,
  Pagehead,
  PageLayout as PrimerPageLayout,
} from '@primer/react'
import Form from '../../../../components/form'
import { useCallback } from 'react'
import { PageLayout } from '../page-layout'

export function Profile() {
  const onSubmit = useCallback(() => {}, [])

  return (
    <PageLayout>
      <PrimerPageLayout.Content>
        <Pagehead sx={{ pt: 0, pb: 2 }}>
          <Heading sx={{ fontSize: 4, fontWeight: 400 }}>Perfil</Heading>
        </Pagehead>

        <Form onSubmit={onSubmit} sx={{ '> *': { mt: '3' } }}>
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
