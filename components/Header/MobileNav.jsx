'use client'
import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import { nav } from '@/data/nav_links'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function MobileNav() {
    const pathname = usePathname()
  return (
    <Sheet>
        <SheetTrigger asChild>
            <Button variant="outline" size={'icon'}><Menu /></Button>
        </SheetTrigger>
        <SheetContent>
            <SheetHeader>
                <SheetTitle>
                    <h1>Menu</h1>
                </SheetTitle>
                <SheetDescription></SheetDescription>
            </SheetHeader>
            <ul className='grid gap-4'>
                {
                    nav.map((nav, index)=>(
                        <li key={index} className={`hover:text-primary text-sm text-foreground rounded hover:bg-primary/5 transition-all duration-300 px-2 py-1 ${ pathname == nav.url && 'bg-primary/5 text-primary' }`}>
                            <Link href={nav.url}>{nav.label}</Link>
                        </li>
                    ))
                }
            </ul>
            <SheetFooter>
                <SheetClose>
                    <Button variant={'outline'}>Close Menu</Button>
                </SheetClose>
            </SheetFooter>
        </SheetContent>
    </Sheet>
  )
}
