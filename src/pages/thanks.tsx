import { Box, Button, Heading, Text } from '@primer/react'
import { useNavigate } from 'react-router'
import { Header } from '../components/header'

export default function ThanksPage() {
  const navigate = useNavigate()

  return (
    <Box>
      <Header />

      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        mx="auto"
        width="100%"
      >
        <Box mt={8}>
          <Heading
            as="h1"
            sx={{
              mt: '10',
              mb: '20',
              fontSize: '56px',
              letterSpacing: 'widest',
              textTransform: 'uppercase',
              textAlign: 'center',
            }}
          >
            Obrigado
          </Heading>

          <Text as="p" textAlign="center" fontSize="24px">
            Sua compra foi realizada com sucesso.
          </Text>
        </Box>

        <Button
          onClick={() => navigate('/')}
          sx={{ mt: 120, borderRadius: '2', width: 240 }}
        >
          Continuar comprando
        </Button>
      </Box>
    </Box>
  )
}
