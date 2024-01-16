'use client'

import type { NextPage } from 'next'
import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

async function test() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(200)
    }, 1500)
  })
}

const AsyncComp: NextPage<Props> = async (props) => {
  const data = await test()
  return <>异步组件 { data } </>
}

export default AsyncComp
