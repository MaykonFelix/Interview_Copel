'use client'
import { useState } from 'react'

export default function Home() {
  const [number, setNumber] = useState<number>(0)

  function FiltrarOnClick() {
    setNumber(number + 1)
  }

  return (
    <>
      <h1>Teste</h1>
      {number}
      <button className='border' type="button" onClick={FiltrarOnClick}>
        +1
      </button>
    </>
  )
}
