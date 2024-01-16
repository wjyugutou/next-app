'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'

interface Props {
  children?: ReactNode
}

function Footer(props: Props) {
  const [isDark, toggleDark] = useDark()

  return <footer className="h-24px">
    <nav className="flex items-center justify-center gap-10px">
      <Link href="/" replace className="i-material-symbols-house-outline-rounded" />
      {
        isDark
          ? <button className="i-material-symbols-clear-day-rounded" onClick={toggleDark}></button>
          : <button className="i-material-symbols-mode-night" onClick={toggleDark}></button>
      }
    </nav>
  </footer>
}

export default Footer
