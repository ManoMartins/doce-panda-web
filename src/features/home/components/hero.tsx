import { Box, Button, Heading, Text } from '@primer/react'

export function Hero() {
  return (
    <Box display="flex" mt={128} justifyContent="space-between">
      <Box maxWidth={540}>
        <Heading
          as="h1"
          sx={{
            mb: '3',
            fontSize: '6',
            fontWeight: 'bold',
            color: 'fg.default',
          }}
        >
          Encontre o doce perfeito para qualquer hora do dia
        </Heading>

        <Text
          color="fg.subtle"
          sx={{
            fontSize: '3',
            lineHeight: '1.3',
            fontWeight: 'normal',
          }}
        >
          Com o Doce Panda você recebe seu doce onde estiver ou retira no ponto
          mais proxímo do você, a qualquer hora
        </Text>

        <Button variant="primary" size="large" sx={{ mt: 5 }}>
          Encomende o seu agora
        </Button>
      </Box>

      <Box maxWidth={500}>
        <img
          alt="Um conjunto de bolos de pote"
          style={{ width: 500, objectFit: 'cover', borderRadius: '0.5rem' }}
          src="https://img.itdg.com.br/tdg/images/recipes/000/177/096/355179/355179_original.jpg?w=1200"
        />
      </Box>
    </Box>
  )
}
