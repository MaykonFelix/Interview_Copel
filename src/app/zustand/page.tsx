'use client'
import { LinkButton } from '@/components/LinkButton'
import { useBear } from '@/hooks/useBears'

export default function ZustantPage() {
  return (
    <div className="m-10 h-screen">
      <LinkButton url={'/'}>Pagina Inicial</LinkButton>
      <BearCounter />
      <Controls />
    </div>
  )
}

const BearCounter = () => {
  const bears = useBear(state => state.bears)
  return <h1>{bears} bears around here...</h1>
}

const Controls = () => {
  const increasePopulation = useBear(state => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}
