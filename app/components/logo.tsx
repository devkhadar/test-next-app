"use client"
import Link from 'next/link'
import React from 'react'
import logo from "@/assets/logo.png";

const Logo = () => {
    return (
        <Link href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            {/*"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" */}
            <img className="w-12 h-8 mr-2" src={logo.src} alt="logo" />
            Restroomzz
        </Link>
    )
}

export default Logo