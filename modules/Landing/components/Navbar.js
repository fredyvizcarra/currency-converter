import React from "react";

function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className='relative flex flex-wrap items-center justify-between bg-terciary px-2 py-3'>
                <div className='container mx-auto flex flex-wrap items-center justify-between px-4 lg:static'>
                    <div className='relative flex w-full justify-between  lg:static  '>
                        <a className='mr-4 py-2 ' href='/'>
                            <img className='h-12 w-12' src='images/logo.png' alt='' />
                        </a>
                        <ul className='invisible flex md:visible lg:visible '>
                            <li>
                                <a
                                    className='flex items-start px-2 py-5 text-xl   text-white hover:opacity-75'
                                    href='/market'
                                >
                                    <span className='ml-2'>Market</span>
                                </a>
                            </li>


                            <li>
                                <a
                                    className='flex items-start px-2 py-5 text-xl   text-white hover:opacity-75'
                                    href='/about'
                                >
                                    <span className='ml-2'>About</span>
                                </a>
                            </li>
                        </ul>
                        <button
                            className='  flex space-x-2 items-center  cursor-pointer bg-transparent   px-3 py-1  md:invisible lg:invisible '
                            type='button'
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <div className='my-2 h-3 w-3 bg-white rounded-lg'></div>
                            <div className='my-2 h-3 w-3 bg-white rounded-lg'></div>
                            <div className='my-2 h-3 w-3 bg-white rounded-lg'></div>
                        </button>
                    </div>
                    <div
                        className={
                            ' h-screen flex-col items-start' +
                            (navbarOpen ? ' flex' : ' hidden')
                        }
                    >
                        <ul className='flex list-none  flex-col lg:ml-auto'>
                            <li>
                                <a
                                    className='flex items-center px-2 py-4 text-3xl font-bold uppercase  text-white hover:opacity-75'
                                    href='/'
                                >
                                    <span className='ml-2'>Home</span>
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a
                                    className='flex items-center px-2 py-4 text-3xl font-bold uppercase  text-white hover:opacity-75'
                                    href='/market'
                                >
                                    <span className='ml-2'>Market</span>
                                </a>
                            </li>



                        </ul>
                        <ul className='flex flex-col md:hidden lg:hidden'>
                            <li>
                                <a
                                    className='text-md flex items-start px-2 py-1  text-white hover:opacity-75'
                                    href='/about'
                                >
                                    <span className='ml-2'>About</span>
                                </a>
                            </li>

                        </ul>
                        <ul className='lg:mt-15 mt-80 ml-3   flex space-x-3'>
                            <li>
                                <a href='https://twitter.com/fredyeth'>
                                    <img
                                        src='images/twitter-footer.png'
                                        alt='twitter'
                                        className='h-8 w-8'
                                    />
                                </a>
                            </li>
                            <li>
                                <a href='https://github.com/fredyvizcarra'>
                                    <img
                                        src='images/github-footer.png'
                                        alt='github'
                                        className='h-8 w-8'
                                    />
                                </a>
                            </li>
                            <li>
                                <a href='https://discord.gg/u5naeNNd'>
                                    <img
                                        src='images/discord-footer.png'
                                        alt='github'
                                        className='h-8 w-8'
                                    />
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;