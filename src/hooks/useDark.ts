'use client'

export default function useDark() {
  const isAppearanceTransition = useRef<boolean>(true)

  const [isDark, setIsDark] = useState<boolean>(true)

  function toggleDark(event: React.MouseEvent<Element, MouseEvent>) {
    if (!isAppearanceTransition || !event)
      setIsDark(!isDark)

    const x = event.clientX
    const y = event.clientY
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    )

    // @ts-expect-error transition api
    const transition = document.startViewTransition(() => {
      setIsDark(!isDark)
    })

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ]

      document.documentElement.animate({
        clipPath: isDark ? clipPath.toReversed() : clipPath,
      }, {
        duration: 400,
        easing: 'ease-in',
        pseudoElement: isDark
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)',
      })
    })
  }

  useEffect(() => {
    isAppearanceTransition.current = typeof document !== 'undefined'
    // @ts-expect-error: Transition API
    && document.startViewTransition
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('color-schema', isDark ? 'dark' : 'light')
  }, [isDark])

  return [isDark, toggleDark] as const
}
