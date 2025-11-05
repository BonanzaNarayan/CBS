'use client'
import { nav } from '@/data/nav_links'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'
import MobileNav from './MobileNav'

export default function Header() {
    const pathname = usePathname()
  return (
    <header className='sticky top-0 py-2 px-8 shadow bg-background/80 backdrop-blur-lg z-50'>
        <nav className='flex items-center justify-between'>
            {/* Logo */}
            <Link href={'/'}>
                <img src="/logo.svg" alt="logo" className='w-15 rounded-full' />
            </Link>
            {/* Nav */}
            <ul className='hidden lg:flex items-center gap-2'>
                {
                    nav.map((nav, index)=>(
                        <li key={index} className={`hover:text-primary text-foreground text-sm hover:bg-primary/5 rounded-3xl transition-all duration-300 px-2 py-1 ${ pathname == nav.url && 'bg-primary/5 text-primary' }`}>
                            <Link href={nav.url}>{nav.label}</Link>
                        </li>
                    ))
                }
            </ul>

            <div className='flex items-center gap-2'>
                {/* Action */}
                <Link href={'/contact'}>
                    <Button>Get Started</Button>
                </Link>
                <div className='lg:hidden block'>
                    <MobileNav />
                </div>
            </div>
        </nav>
    </header>
  )
}
