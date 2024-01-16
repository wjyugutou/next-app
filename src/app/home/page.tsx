'use client'

import type { Metadata, NextPage } from 'next'
import dynamic from 'next/dynamic'
import { type ReactNode, Suspense } from 'react'

const AsyncDynamicComp = dynamic(() => import('@/components/AsyncComponent'), { ssr: false, loading: () => <LoadingComp/> })

interface Props {
  children?: ReactNode
}

const Home: NextPage<Props> = (props) => {
  console.log('Home page', props)

  async function init() {
    const data = await fetch('http://localhost:3000/home/api', {
      method: 'post',
    })
  }
  useEffect(() => {
    init()

    return () => {

    }
  }, [])

  return <>
    <h1 className="text-red" >Home</h1>

    <div className="relative w-100px h-100px">
      <AsyncDynamicComp />
      <Suspense fallback={<LoadingComp />}>
        <AsyncComponent/>
      </Suspense>
    </div>
  </>
}

export default Home
