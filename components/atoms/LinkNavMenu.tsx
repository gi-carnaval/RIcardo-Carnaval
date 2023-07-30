import Link, { LinkProps } from 'next/link'

interface LinkNaveMenuProps extends LinkProps {
  children: String
}

export function LinkNavMenu(props: LinkNaveMenuProps) {
  return (
    <li className="my-8">
      <Link className="" {...props}>
        {props.children}
      </Link>
    </li>
  )
}
