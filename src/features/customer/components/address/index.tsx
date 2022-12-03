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
import { useCallback, useState } from 'react'
import { CreateAddress } from '../create-address'
import { PageLayout } from '../page-layout'
import { useListAddresses } from '@features/customer/queries/use-list-addresses'
import { useDeleteAddress } from '@features/customer/mutations/use-delete-address'

export function Address() {
  const [isOpen, setIsOpen] = useState(false)

  const deleteAddress = useDeleteAddress()
  const listAddresses = useListAddresses()

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleDelete = useCallback(
    async (addressId: string) => {
      try {
        await deleteAddress.mutateAsync({ addressId })
      } catch (err) {
        console.log(err)
      }
    },
    [deleteAddress]
  )

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
          {listAddresses.data?.map((address) => (
            <Box
              key={address.id}
              p={3}
              display="flex"
              justifyContent="space-between"
            >
              <Box>
                <Box display="flex" alignItems="center">
                  <Heading as="h4" sx={{ fontSize: 2 }}>
                    Casa
                  </Heading>
                  {address.isMain && (
                    <Label variant="success" size="small" sx={{ ml: 2 }}>
                      Principal
                    </Label>
                  )}
                </Box>
                <Text color="fg.muted" fontSize={1}>
                  {address.street} {address.number}
                </Text>
              </Box>

              <Box>
                <IconButton
                  icon={TrashIcon}
                  sx={{ color: 'danger.fg' }}
                  variant="invisible"
                  onClick={() => handleDelete(address.id)}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </PrimerPageLayout.Content>
    </PageLayout>
  )
}
