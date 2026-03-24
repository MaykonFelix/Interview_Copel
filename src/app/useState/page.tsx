'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Title } from '@/components/Title'

export default function Home() {
  const [number, setNumber] = useState<number>(0)

  function FiltrarOnClick() {
    setNumber(number + 1)
  }

  return (
    <div className="flex flex-col gap-4">
      <Title>useState Simple</Title>
      <div>
        Contado: <span className="text-blue-500">{number}</span>
      </div>
      <div className="flex gap-4">
        <Button variant="outline" onClick={FiltrarOnClick}>
          Mais 1
        </Button>
        <Button variant="outline" onClick={() => setNumber(prev => prev - 1)}>
          Menos 1
        </Button>
      </div>
    </div>
  )
}
