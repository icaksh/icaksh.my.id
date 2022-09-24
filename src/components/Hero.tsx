import React from 'react'
import { Link } from 'gatsby'

interface Props {
    index: boolean,
    title?: string,
}

const Hero: React.FC<Props> = ({ 
    index,
    title,
}) => (
    <section id="home" className='pt-12'>
        <div className="flex flex-wrap">
            <div className="w-full self-center">
                {title &&
                    <h1 className='font-bold my-2'>{title}</h1>
                }
                <h2 className='my-2'>Selamat datang di kebun digitalku 🌱</h2>
                <p className='my-2 mb-10'>Situs ini berisikan tentang diriku serta apa yang aku tulis saat belajar atau memberikan informasi yang menurutku berguna.</p>
                <Link to='/blog' className='btn-link'>
                    Selengkapnya Tentangku
                </Link>
            </div>
        </div>
    </section>
)

export default Hero;