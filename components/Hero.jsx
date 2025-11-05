import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

export default function Hero() {
  return (
    <section id='hero' className='min-h-screen flex items-center justify-center px-6 relative bg-gradient-to-br from-background via-blue-50/30 to-indigo-100/20 overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl'></div>
        <div className='absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-slate-200/20 to-gray-300/20 rounded-full blur-3xl'></div>
        
        {/* Grid Pattern */}
        <div className='absolute inset-0 bg-[linear-gradient(rgba(100,116,139,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(100,116,139,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]'></div>
      </div>

      <div className='max-w-6xl mx-auto text-center relative z-10'>
        {/* AI Badge */}
        <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8'>
          <div className='w-2 h-2 bg-blue-500 rounded-full animate-pulse'></div>
          <span className='text-sm font-medium text-blue-700'>AI-Powered Mentorship Platform</span>
        </div>

        {/* Main Heading */}
        <div className='w-full mb-8'>
          <h1 className='mb-6 text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent'>
            Transform Growth with
            <span className='block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              AI Mentorship
            </span>
          </h1>
          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Corporate Boss Solutions bridges the gap between education and enterprise through intelligent AI mentorship — 
            accelerating skill development, career advancement, and organizational performance.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className='flex items-center justify-center flex-wrap gap-4 mb-16'>
          <Link href={'/services'}>
            <Button>
              Explore AI Solutions
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </Link>
          <Link href={'/contact'}>
            <Button variant={'outline'}>
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Get Consultation
            </Button>
          </Link>
        </div>
      </div>

      {/* Floating Elements */}
      <div className='absolute bottom-10 left-10 w-4 h-4 bg-blue-500 rounded-full opacity-60 animate-bounce'></div>
      <div className='absolute top-20 right-20 w-3 h-3 bg-purple-500 rounded-full opacity-40 animate-pulse'></div>
      <div className='absolute bottom-32 right-32 w-2 h-2 bg-indigo-500 rounded-full opacity-50 animate-ping'></div>
    </section>
  )
}