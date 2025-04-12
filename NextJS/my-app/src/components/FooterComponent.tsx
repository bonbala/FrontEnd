import React from 'react'
import Link from "next/link";

const FooterComponent = () => {
    return (
        <footer className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-center items-center flex-col">


                <ul className="flex gap-5">
                    <li className='hover:underline'>
                        <Link href={'/'}>
                            Home</Link>
                    </li>
                    <li className='hover:underline'>
                        <Link href={'/about'}>About</Link>
                    </li>
                    <li className='hover:underline'>
                        <Link href={'/contact'}>Contact</Link>
                    </li>
                    <li className='hover:underline'>
                        <Link href={'/blog'}>Blog</Link>
                    </li>
                </ul>

                <h1 className='mt-4'>NEXT JS</h1>
            </div>
        </footer>
    )
}

export default FooterComponent
