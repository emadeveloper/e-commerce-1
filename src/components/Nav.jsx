import React from 'react'

const Nav = () => {
  return (
    <nav>
        <div className='bg-gray-300 flex flex-col gap-4 text-xl w-[350px] h-full py-6 px-8 text-gray-500 font-thin md:hidden'>
            <div>
                <a className='flex justify-end mr-2' href="">X</a>
            </div>
            <div className='flex justify-between'>
                <a href="/">Celulares</a>
                <p className='cursor-pointer'>&gt;</p>
            </div>
            <div className='flex justify-between'>
                <a href="/tv">TV & Video</a>
                <p className='cursor-pointer'>&gt;</p>
            </div>
            <div className='flex justify-between'>
                <a href="/climatización">Climatización</a>
                <p className='cursor-pointer'>&gt;</p>
            </div>
            <div className='flex justify-between'>
                <a href="/electrodomésticos">Electrodomésticos</a>
                <p className='cursor-pointer'>&gt;</p>
            </div>
            <div className='flex justify-between'>
                <a href="/tecnología">Tecnología</a>
                <p className='cursor-pointer'>&gt;</p>
            </div>
            <div className='flex justify-between'>
                <a href="/health">Salud, Belleza & Fitness</a>
                <p className='cursor-pointer'>&gt;</p>
            </div>
            <div className='flex justify-between'>
                <a href="/house">Casa & Jardín</a>
                <p className='cursor-pointer'>&gt;</p>
            </div>
            <div className='flex justify-between'>
                <a href="/tires">Rodados</a>
                <p className='cursor-pointer'>&gt;</p>
            </div>
            <div className='flex justify-between'>
                <a href="/offers">Ofertas</a>
                <p className='cursor-pointer'>&gt;</p>
            </div>
        </div>

    </nav>
  )
}

export default Nav





