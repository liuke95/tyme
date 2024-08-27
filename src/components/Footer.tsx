import phone from '/images/phone.svg';
import comment from '/images/comment.svg';
import { Input } from './ui/input';

function Footer() {
  return (
    <footer className='bg-[#17161A] text-white pt-14 pb-12'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between space-y-10 md:space-y-0'>
        {/* Navigation Section */}
        <div className='flex flex-col space-y-8'>
          <h2 className='font-bold text-xl'>NAVIGATION</h2>
          <div className='grid grid-cols-3 gap-y-3 gap-x-8'>
            <a href='#'>Home</a>
            <a href='#'>Whitepaper</a>
            <a href='#'>FAQs</a>
            <a href='#'>About us</a>
            <a href='#'>Marketplace</a>
            <a href='#'>News</a>
            <a href='#'>Our teams</a>
            <a href='#'>Roadmap</a>
            <a href='#'>Community</a>
          </div>
        </div>

        {/* Contact Section */}
        <div className='space-y-8'>
          <h2 className='font-bold text-xl'>CONTACT US</h2>
          <div className='flex items-center space-x-2'>
            <img src={phone} alt='phone' className='w-6 h-6' />
            <span>01234568910</span>
          </div>
          <div className='flex items-center space-x-2'>
            <img src={comment} alt='comment' className='w-6 h-6' />
            <span>tymex-talent@tyme.com</span>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className='space-y-8'>
          <h2 className='font-bold text-xl'>
            SUBSCRIBE TO RECEIVE OUR LATEST UPDATE
          </h2>
          <form className='flex space-x-2'>
            <Input
              type='email'
              placeholder='Your email address'
              className='p-2 rounded-md flex-grow text-white bg-transparent'
            />
            <button
              type='button'
              className='bg-primary-gradient text-white px-12 py-2 rounded-md shadow-primary'
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className='border-t border-gray-700 mt-10 pt-10 container'>
        <div className='mx-auto flex flex-col md:flex-row justify-between text-sm'>
          <div>
            <p>&copy;2023 Tyme - Edit. All Rights reserved.</p>
          </div>
          <div className='flex space-x-10 mt-4 md:mt-0'>
            <a href='#'>Security</a>
            <a href='#'>Legal</a>
            <a href='#'>Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
