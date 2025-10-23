'use client'
import { useEffect, useState, ReactNode } from 'react'

export default function ClientOnly({
  children,
  fallback = null,
}: { children: ReactNode; fallback?: ReactNode }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted ? <>{children}</> : <>{fallback}</>
}
