'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"

export default function Home() {
  const [number, setNumber] = useState<number>(0)

  function FiltrarOnClick() {
    setNumber(number + 1)
  }

  return (
    <>
      <h1>Teste</h1>
      {number}
      <Button variant="outline"  onClick={FiltrarOnClick}>+1</Button>
    </>
  )
}
