import { FC } from 'react'
import Link from "next/link"
import {usePathname} from "next/navigation";

interface INavLink {
  label: string,
  href: string,
}

interface IProps {
  navLinks: INavLink[],
}

const Navigation: FC<IProps> = ({ navLinks }) => {
  const pathname = usePathname()

  return (
    <nav className='flex gap-8 w-full font-light text-sm'>
      {navLinks.map(link => {
        const isActive = pathname === link.href

        return (
          <Link
            key={link.label}
            href={link.href}
            className={`hover:text-gray-400 transition ${isActive ? 'text-white font-normal pointer-events-none' : 'text-gray-300'}`}
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}

export default Navigation
