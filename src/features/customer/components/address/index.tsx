import { TrashIcon } from '@primer/octicons-react'
import {
  Box,
  Text,
  Label,
  Button,
  Heading,
  Pagehead,
  IconButton,
  PageLayout as PrimerPageLayout,
} from '@primer/react'
import { useState } from 'react'
import { CreateAddress } from '../create-address'
import { PageLayout } from '../page-layout'

export function Address() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <PageLayout>
      <CreateAddress isOpen={isOpen} onDismiss={handleClose} />

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
          <Heading sx={{ fontSize: 4, fontWeight: 400 }}>
            Seus endereços
          </Heading>

          <Box>
            <Button size="small" variant="primary" onClick={handleOpen}>
              Adicionar endereço
            </Button>
          </Box>
        </Pagehead>

        <Box
          sx={{
            borderWidth: 1,
            borderRadius: 2,
            borderStyle: 'solid',
            borderColor: 'border.default',
          }}
        >
          <Box p={3} display="flex" justifyContent="space-between">
            <Box>
              <Box display="flex" alignItems="center">
                <Heading as="h4" sx={{ fontSize: 2 }}>
                  Casa
                </Heading>
                <Label variant="success" size="small" sx={{ ml: 2 }}>
                  Principal
                </Label>
              </Box>
              <Text color="fg.muted" fontSize={1}>
                Rua bandeirantes 1140
              </Text>
            </Box>

            <Box>
              <IconButton
                icon={TrashIcon}
                sx={{ color: 'danger.fg' }}
                variant="invisible"
                onClick={() =>
                  alert('Adicionar dialog para confirmar o delete')
                }
              />
            </Box>
          </Box>

          <Box
            p={3}
            display="flex"
            justifyContent="space-between"
            borderTopWidth={1}
            borderTopStyle="solid"
            borderTopColor="border.default"
          >
            <Box>
              <Box display="flex" alignItems="center">
                <Heading as="h4" sx={{ fontSize: 2 }}>
                  Casa
                </Heading>
              </Box>
              <Text color="fg.muted" fontSize={1}>
                Rua bandeirantes 1140
              </Text>
            </Box>

            <Box>
              <IconButton
                icon={TrashIcon}
                sx={{ color: 'danger.fg' }}
                variant="invisible"
                onClick={() =>
                  alert('Adicionar dialog para confirmar o delete')
                }
              />
            </Box>
          </Box>
        </Box>
      </PrimerPageLayout.Content>
    </PageLayout>
  )
}
