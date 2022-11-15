import { PageLayout as PrimerPageLayout } from '@primer/react'
import { ReactNode } from 'react'
import { Header } from '../header'
import { Sidebar } from '../sidebar'

interface PageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <PrimerPageLayout containerWidth="large">
      <Header />

      <Sidebar />

      {children}
    </PrimerPageLayout>
  )
}
