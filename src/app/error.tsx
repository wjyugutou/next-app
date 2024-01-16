'use client'

import type { NextPage } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const ErrorPage: NextPage<Props> = (props, initProps) => {
  return <div className="relative top-50% translate-y--50% flex-col items-center justify-center flex text-15">
    <h1>Error</h1>
    <Link href="/" replace>返回首页</Link>
  </div>
}

export default ErrorPage
