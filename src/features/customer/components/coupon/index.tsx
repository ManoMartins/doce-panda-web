import { CopyIcon } from '@primer/octicons-react'
import {
  Box,
  Text,
  Heading,
  Pagehead,
  IconButton,
  PageLayout as PrimerPageLayout,
} from '@primer/react'
import { PageLayout } from '../page-layout'

export function Coupon() {
  return (
    <PageLayout>
      <PrimerPageLayout.Content sx={{ height: 'full' }}>
        <Pagehead
          sx={{
            pt: 0,
            pb: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Heading sx={{ fontSize: 4, fontWeight: 400 }}>Seus cupons</Heading>
        </Pagehead>

        <Box
          sx={{
            borderWidth: 1,
            borderRadius: 2,
            borderStyle: 'solid',
            borderColor: 'border.default',
          }}
        >
          <Box p={3}>
            <Box display="flex" alignItems="center">
              <Heading as="h4" sx={{ fontSize: 2 }}>
                R$ 15,00
              </Heading>

              <Box display="flex" alignItems="flex-end">
                <Text ml={3} fontSize={1} color="fg.subtle">
                  15CUPOM
                </Text>

                <IconButton
                  icon={Icon}
                  sx={{
                    ml: 2,
                    p: 0,
                    width: 24,
                    height: 24,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    span: { display: 'flex' },
                  }}
                />
              </Box>
            </Box>

            <Text color="fg.muted" fontSize={1}>
              Cupom gerado a partir de <strong>TROCA</strong>
            </Text>
          </Box>

          <Box
            p={3}
            borderTopWidth={1}
            borderTopStyle="solid"
            borderTopColor="border.default"
          >
            <Box display="flex" alignItems="center">
              <Heading as="h4" sx={{ fontSize: 2 }}>
                R$ 19,00
              </Heading>

              <Box display="flex" alignItems="flex-end">
                <Text ml={3} fontSize={1} color="fg.subtle">
                  19CUPOM
                </Text>

                <IconButton
                  icon={Icon}
                  sx={{
                    ml: 2,
                    p: 0,
                    width: 24,
                    height: 24,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    span: { display: 'flex' },
                  }}
                />
              </Box>
            </Box>

            <Text color="fg.muted" fontSize={1}>
              Cupom gerado a partir de <strong>TROCA</strong>
            </Text>
          </Box>
        </Box>
      </PrimerPageLayout.Content>
    </PageLayout>
  )
}

function Icon() {
  return <CopyIcon size={12} />
}
