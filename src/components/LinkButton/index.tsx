import Link from 'next/link'

interface LinkButtonPops {
  children: React.ReactNode
  url: string
}

export const LinkButton = ({ children, url }: LinkButtonPops) => {
  return (
    <Link href={url}>
      <div className="border rounded-md p-4 hover:bg-slate-700">{children}</div>
    </Link>
  )
}
