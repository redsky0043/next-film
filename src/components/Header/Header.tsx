'use client'
import Link from 'next/link'
import Image from 'next/image'
import netflix from 'public/netflix.svg'
import { FC, useState, useEffect } from 'react'
import Search from "@/components/Search/Search"
import Navigation from "@/components/Navigation/Navigation"
import Notifications from "@/components/Notifications/Notifications"

const navItems = [
  { label: 'Main', href: '/' },
  { label: 'Series', href: '/series' },
]
const Header: FC = () => {
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header className={`flex px-8 h-16 items-center bg-gradient-to-t from-transparent to-black/70 transition duration-500 z-10 gap-8 fixed top-0 left-0 right-0 ${scrollTop > 0 ? 'bg-black' : ''}`}>
      <Link href='/'>
        <Image
          src={netflix}
          alt="netflix"
          className='w-24'
        />
      </Link>
      <Navigation navLinks={navItems}/>
      <Search/>
      <Notifications/>
    </header>
  );
};

export default Header;
