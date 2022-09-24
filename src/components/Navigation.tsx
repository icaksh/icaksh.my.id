import React, { MouseEventHandler } from 'react'
import { Link } from 'gatsby'
import { mainNavItems } from '../utils/Config'

interface Props {
    theme: string,
    onUpdateTheme: MouseEventHandler<HTMLButtonElement>
}

const Navigation: React.FC<Props> = ({ theme, onUpdateTheme }) => (
    <header className="pt-5 mx-auto flex item-center justify-between relative">
        <div className="flex items-center justify-between w-full px-0 py-4 lg:py-0 font-semibold dark:text-gray-100">
            <Link to="/" >
                <div className="flex justify-between space-x-2 dark:text-gray-600"><span>Palguno Wicaksono</span></div>
            </Link>
        </div>
        <div className='lg:block px-2 a flex-row w-full dark:text-gray-600'>
            <div className='flex justify-end items-center'>
                {mainNavItems.map((item, index) => {
                    return (
                        <Link
                            to={item.url}
                            className='transition duration-200 ease-in-out hover:text-neutral-900 px-4 lg:py-2 block font-medium m-1'
                            activeClassName='text-indigo-600'
                            key={index}
                        >
                            {item.label}
                        </Link>
                    )
                })}
                <button
                    type='button'
                    className='pl-4 py-4 focus:outline-none'
                    onClick={onUpdateTheme}
                >
                    {typeof window !== 'undefined' &&
                        localStorage.getItem('theme') === 'dark'
                        ? '☀️'
                        : '🌙'}
                </button>
            </div>
        </div>
    </header>
)

export default Navigation