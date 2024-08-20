import { PropsWithChildren } from 'react'
import NotResponsiveDialog from '../dialog/not-responsive-dialog'
import Navbar from '../navbar/navbar'

const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
      <NotResponsiveDialog />
    </>
  )
}

export default BaseLayout
