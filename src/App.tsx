import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Filters, { formSchema } from './components/Filters';
import Items from './components/Items';
import Footer from './components/Footer';
import footer from '/images/footer.svg';
import { useState } from 'react';
import { z } from 'zod';
import useFetchWithInterval from './hooks/useFetchWithInterval';
import { TIME_INTERVAL } from './constants/constant';

function App() {
  const [currPage, setCurrPage] = useState(1);
  const [filter, setFilter] = useState<z.infer<typeof formSchema>>({
    q: '',
    tier: '',
    theme: '',
    createDate: '',
    price: '',
    priceRange: [],
  });

  const { data, loading, error } = useFetchWithInterval(
    currPage,
    filter,
    TIME_INTERVAL
  );

  const onViewMore = () => {
    setCurrPage((prevPage) => prevPage + 1);
  };

  const onFilter = (filter: z.infer<typeof formSchema>) => {
    setFilter(filter);
    setCurrPage(1);
  };

  return (
    <div>
      <div className='bg-header-background bg-cover'>
        <div className='bg-[#000000] bg-opacity-70'>
          <Header />
          <HeroSection />
        </div>
      </div>

      <main className='bg-content-background bg-cover'>
        <div className='container mx-auto px-4 lg:px-8 py-8 md:flex-row flex-col flex gap-10'>
          <Filters onFilter={onFilter} />
          <Items
            data={data}
            loading={loading}
            error={error}
            onViewMore={onViewMore}
          />
        </div>
        <img src={footer} alt='footer' className='mt-12' />
      </main>
      <Footer />
    </div>
  );
}

export default App;
