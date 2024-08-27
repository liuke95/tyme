import right_header from '/images/right_header.svg';

function Header() {
  return (
    <header className='bg-[#17161AB2] bg-opacity-70 py-5 text-white'>
      <div className='container mx-auto flex justify-between items-center px-4 lg:px-8'>
        <div className='flex items-center space-x-[60px] text-sm font-bold'>
          <a href='#' className='hover:gradient-text'>
            HOME
          </a>
          <nav className='hidden md:flex space-x-[60px]'>
            <a href='#' className='hover:gradient-text'>
              ABOUT US
            </a>
            <a href='#' className='hover:gradient-text'>
              OUR TEAMS
            </a>
            <a href='#' className='gradient-text'>
              MARKETPLACE
            </a>
            <a href='#' className='hover:gradient-text'>
              ROADMAP
            </a>
            <a href='#' className='hover:gradient-text'>
              WHITEPAPER
            </a>
          </nav>
        </div>
        <div className='flex items-center gap-10'>
          <button className='bg-primary-gradient shadow-primary text-white py-2 px-4 rounded'>
            Connect Wallet
          </button>
          <img src={right_header} alt='right_header' />
        </div>
      </div>
    </header>
  );
}

export default Header;
