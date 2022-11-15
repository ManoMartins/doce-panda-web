import { Avatar, PageLayout, Text } from '@primer/react'

export function Header() {
  return (
    <PageLayout.Header>
      <Avatar
        size={48}
        sx={{ mr: 3 }}
        src="https://avatars.githubusercontent.com/u/62728230?s=400&u=d2a1db3ec462bdeb108297602e274c9049003089&v=4"
      />

      <Text>Manoel Martins</Text>
    </PageLayout.Header>
  )
}
