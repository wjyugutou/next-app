import type { ReactNode } from 'react'
import LoadingComp from '@/components/LoadingComp'

interface Props {
  children?: ReactNode
  className?: string
}

function Loading(props: Props) {
  const { className } = props

  return <div className={` w-full h-full relative top-50% translate-y--50% ${className}`}>
    <LoadingComp showText />
  </div>
}

export default Loading
