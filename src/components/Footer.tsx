import type { ReactNode } from 'react'
import Link from 'next/link'

interface Props {
  children?: ReactNode
}

function Footer(props: Props) {
  return <nav>
    <Link href="/" className="material-symbols:house-outline-rounded" />
  </nav>
}

export default Footer
