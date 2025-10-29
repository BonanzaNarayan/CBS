import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

export default function Hero() {
  return (
    <section id='hero' className='max-h-screen flex items-center justify-start flex-col py-12 px-6 relative shadow bg-background'>
        <div className='w-full md:w-3xl text-center mb-5'>
            <h1 className='mb-5 text-4xl md:text-6xl text-neutral-800 lg:text-7xl'>Empowering People and Businesses to Grow Together.</h1>
            <p className='text-sm md:text-lg'>Corporate Boss Solutions (CBS) bridges the gap between education, employability, and enterprise growth — helping students build skills, professionals advance careers, and companies strengthen performance.</p>
        </div>

        {/* CTA */}
        <div className='flex items-center gap-3'>
            <Link href={'/services'}>
                <Button>View Our Offers</Button>
            </Link>
            <Link href={'/contact'}>
                <Button variant={'outline'}>Get Consultaion</Button>
            </Link>
        </div>
    </section>
  )
}
