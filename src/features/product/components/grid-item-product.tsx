import { Avatar, Box, Button, Text } from '@primer/react'

interface GridItemProductProps {
  title: string
  price: string
  category: string
  image: {
    src: string
    alt?: string
  }
}

export function GridItemProduct({
  title,
  image,
  price,
  category,
}: GridItemProductProps) {
  return (
    <Box
      px={4}
      pt={3}
      pb={4}
      display="flex"
      alignItems="center"
      flexDirection="column"
      borderRadius="0.75rem"
      boxShadow="shadow.large"
    >
      <Avatar
        square
        size={148}
        src={image.src}
        alt={image.alt}
        sx={{ objectFit: 'cover', mb: 2 }}
      />

      <Box textAlign="center">
        <Text
          as="p"
          my={0}
          fontSize="2"
          lineHeight="1.3"
          fontWeight="600"
          color="fg.default"
          className="line-clamp"
          sx={{
            height: 42,
            overflow: 'hidden',
            WebkitLineClamp: 2,
            alignItems: 'center',
            display: '-webkit-box',
            textOverflow: 'ellipsis',
            justifyContent: 'center',
          }}
        >
          {title}
        </Text>

        <Text as="p" mt={1} mb="3" fontSize="1" color="fg.subtle">
          {category}
        </Text>
      </Box>

      <Text fontWeight="600" color="fg.default" fontSize="3" mb="2">
        {price}
      </Text>

      <Button variant="primary" sx={{ width: '100%' }}>
        Comprar
      </Button>
    </Box>
  )
}
