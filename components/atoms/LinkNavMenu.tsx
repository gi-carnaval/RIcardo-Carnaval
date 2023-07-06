import Link, { LinkProps } from 'next/link'

interface LinkNaveMenuProps extends LinkProps {
  children: String
}

export function LinkNavMenu(props: LinkNaveMenuProps) {
  return (
    <Link className="font-semibold text-sm" {...props}>
      {props.children}
    </Link>
  )
}
