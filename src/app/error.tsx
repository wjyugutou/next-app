'use client'

import type { NextPage } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const ErrorPage: NextPage<Props> = (props, initProps) => {
  return <>
    <h1>Error</h1>
    <Link href="/">返回首页</Link>
  </>
}

export default ErrorPage
