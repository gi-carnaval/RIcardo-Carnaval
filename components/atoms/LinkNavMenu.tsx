import Link, { LinkProps } from 'next/link'

interface LinkNaveMenuProps extends LinkProps {
  children: String
}

export function LinkNavMenu(props: LinkNaveMenuProps) {
  return (
    <li className="my-8">
      <Link className="text-4xl md:font-semibold md:text-sm" {...props}>
        {props.children}
      </Link>
    </li>
  )
}
