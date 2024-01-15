import type { NextPage } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const App: NextPage<Props> = (props) => {
  return <>
  <div className={'flex gap-110px'}>
    <Link href={'/home'}>Home</Link>

  </div>
</>
}

export default App
