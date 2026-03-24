'use client'
import { useTeste } from '@/hooks/useTeste'
import { Title } from '@/components/Title'
import { Button } from '@/components/ui/button'

export default function ZustantPage() {
  return (
    <div className="flex gap-4 flex-col">
      <Title>Zustand Simple</Title>

      <BearCounter />
      <Controls />
    </div>
  )
}

const BearCounter = () => {
  const teste = useTeste(state => state.teste)
  return <h1>{teste} teste around here...</h1>
}

const Controls = () => {
  const increasePopulation = useTeste(state => state.increasePopulation)
  return (
    <>
      <Button onClick={increasePopulation}>Mais Um</Button>
      <Button onClick={increasePopulation}>Mais Um</Button>
      <Button onClick={increasePopulation}>Mais Um</Button>
    </>
  )
}
