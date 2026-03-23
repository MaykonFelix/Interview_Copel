import { LinkButton } from '@/components/LinkButton'

export default function Home() {
  return (
    <>
      Entrevista Copel
      <LinkButton url={'/useState'}>Pagina Teste</LinkButton>
      <LinkButton url={'/zustand'}>Zustand</LinkButton>
    </>
  )
}
