'use client'

import type { NextPage } from 'next'
import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Home: NextPage<Props> = (props) => {
  useEffect(() => {
    console.log({ props })
  }, [])

  return <h1 className="text-red" >Home</h1>
}

export default Home
