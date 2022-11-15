import { Box, FormControl, Radio, RadioGroup } from '@primer/react'
import { useCallback } from 'react'

export function ListAddress() {
  const handleChange = useCallback((selected: string | null) => {
    console.log(selected)
  }, [])

  return (
    <Box display="grid" sx={{ gap: 1 }}>
      <RadioGroup name="choiceGroup" onChange={handleChange}>
        <RadioGroup.Label>Choices</RadioGroup.Label>
        <FormControl
          sx={{
            width: '100%',
            borderWidth: 1,
            borderColor: 'blue',
            borderStyle: 'solid',
          }}
        >
          <Radio value="one" />

          <FormControl.Label sx={{ width: '100% !important' }}>
            Choice one
          </FormControl.Label>
        </FormControl>
      </RadioGroup>
    </Box>
  )
}
