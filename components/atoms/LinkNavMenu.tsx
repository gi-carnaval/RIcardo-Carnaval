import Link, { LinkProps } from 'next/link'

interface LinkNaveMenuProps extends LinkProps {
  children: String
}

export function LinkNavMenu(props: LinkNaveMenuProps) {
  return (
    <li className="my-8 border-b-[1px] border-zinc-600 py-3 font-semibold">
      <Link className="" {...props}>
        {props.children}
      </Link>
    </li>
  )
}
