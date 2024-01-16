import type { NextPage } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

function App(props: Props) {
  return <>
    <div className={'flex gap-110px'}>
      <Link href={'/home'} className="capitalize">home</Link>
      <Link href={'/about'} className="capitalize">about</Link>

    </div>
  </>
}

export default App
