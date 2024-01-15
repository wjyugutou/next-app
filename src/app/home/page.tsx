'use client'

import type { NextPage } from 'next'
import { type ReactNode, useEffect } from 'react'

interface Props {
  children?: ReactNode
}

const Home: NextPage<Props> = (props, initProps) => {
  useEffect(() => {
    console.log({ props, initProps })
  }, [])

  return <h1>Home</h1>
}

export default Home
