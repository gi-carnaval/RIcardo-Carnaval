import Link, { LinkProps } from 'next/link'

interface LinkNaveMenuProps extends LinkProps {
  children: String
}

export function LinkNavMenu(props: LinkNaveMenuProps) {
  return (
    <li className="flex flex-col border-b-[1px] border-zinc-600 my-2 py-4 font-semibold justify-center items-center w-3/4 text-center">
      <Link className="" {...props}>
        {props.children}
      </Link>
      {/* <hr className="border-t border-zinc-600 h-2 mt-4 w-3/4" /> */}
    </li>
  )
}
