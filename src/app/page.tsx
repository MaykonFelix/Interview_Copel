import { LinkButton } from '@/components/LinkButton'

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <h1>Entrevista React</h1>
      <LinkButton url={'/useState'}>Teste useState</LinkButton>
      <LinkButton url={'/useState'}>Context API and Reducer</LinkButton>
      <LinkButton url={'/zustand'}>Zustand</LinkButton>
    </div>
  )
}
