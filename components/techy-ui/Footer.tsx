import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { github, instagram, linkedin } from '../../public'

export function TechyFooter() {
    return (
        <div className='border-t-2 border-t-light-blue mb-4 flex justify-between  py-4'>
            <div className='px-4 sm:text-[18px] text-[14px] '>{new Date().getFullYear()}&nbsp; © Code <span className='text-blue-300'>By</span> Gunal</div>
            <div className='flex text-light-blue '>
                <span className='px-4 hover:cursor-pointer hover:scale-110 transition'>
                    <Link href="https://www.linkedin.com/in/gunal-gupta/" target="_blank">
                        <Image src={linkedin.src} width={24} height={24} className='w-[24px] h-[24px]' alt="Google" />
                    </Link>
                </span>
                <span className='px-4 hover:cursor-pointer hover:scale-110 transition'>
                    <Link href="https://github.com/GunalGupta" target='_blank'>
                        <Image src={github.src} width={24} height={24} className='w-[24px] h-[24px]' alt="Github" />
                    </Link>
                </span>
                <span className='px-4 hover:cursor-pointer hover:scale-110 transition'>
                    <Link href="https://www.instagram.com/gunalgupta05/" target='_blank'>
                        <Image src={instagram.src} width={24} height={24} className='w-[24px] h-[24px]' alt="Whatsapp" />
                    </Link>
                </span>
            </div>
        </div>
    )
}