import { PropsWithChildren } from 'react'
import Navbar from '../navbar/navbar'

const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default BaseLayout
