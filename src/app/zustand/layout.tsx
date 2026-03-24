import { LinkButton } from '@/components/LinkButton'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="absolute top-2 left-2 opacity-20 hover:opacity-100 transition duration-300 ease-in-out">
        <LinkButton url={'/'}>Pagina Inicial</LinkButton>
      </div>
      {children}
    </>
  )
}
