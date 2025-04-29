import React from 'react'
import Link from "next/link";
const HeaderComponent = () => {
    return (
        <ul>
            <header className="bg-blue-600 text-white p-2">
                <div className="container mx-auto flex justify-between items-center">
                    <h1>NEXT JS</h1>
                    <nav>
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
                            <li className='hover:underline'>
                                <Link href={'/main'}>Main</Link>
                            </li>
                            <li className='hover:underline'>
                                <Link href={'/exam'}>exam</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </ul>
    )
}

export default HeaderComponent
