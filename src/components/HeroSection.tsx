import NewArrival from '/images/new_arrival.svg';
import NewItems from '/images/new_items.svg';
import DJHeader from '/images/dj_header.svg';
import frame from '/images/frame.svg';

function HeroSection() {
  return (
    <section className='relative'>
      <div className='mt-8 overflow-hidden'>
        <div className='container relative z-10'>
          <div className='w-full h-full'>
            <img src={NewArrival} alt='new_arrival' className='w-3/5' />
            <img
              src={DJHeader}
              alt='DJHeader'
              className='w-[28%] md:w-1/4 xl:w-[28%] absolute top-0 right-0'
            />
          </div>

          <img />
        </div>

        <img src={NewItems} alt='new_items' className='mt-8 mx-auto' />

        <div className='container relative z-10'>
          <div className='w-full h-full'>
            <img
              src={frame}
              alt='frame'
              className='w-[28%] md:w-[23%] absolute bottom-0 right-0 z-20'
            />
            <span className='xl:text-6xl lg:text-4xl md:text-2xl sm:text-xl text-white font-bold absolute xl:bottom-8 sm:bottom-5 bottom-2 right-10 sm:right-20 z-20'>
              The DJ
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
