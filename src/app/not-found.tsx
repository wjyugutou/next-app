import type { NextPage } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const NotFind: NextPage<Props> = (props) => {
  return <>
    <h1>NotFind</h1>
    <Link href="/">返回首页</Link>
  </>
}

export default NotFind
