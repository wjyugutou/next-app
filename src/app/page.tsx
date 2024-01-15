import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className={'w-100vw h-100vh overflow-auto flex gap-10px'}>
        <Link href={'/home'}>Home</Link>
        <Link href={'/app/home'}>app/home</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/abouat'}>Abouat</Link>

      </main>
    </>
  )
}
