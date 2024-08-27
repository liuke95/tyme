import { Button } from './ui/button';
import basketball_girl_item from '/images/basketball_girl_item.svg';
import DJ_item from '/images/DJ_item.svg';
import assassin_item from '/images/assassin_item.svg';
import neon_guy_item from '/images/neon_guy_item.svg';
import mafia_england_item from '/images/mafia_england_item.svg';
import ethereum from '/images/logos_ethereum.svg';
import redAuthor from '/images/red_author.svg';
import greenAuthor from '/images/green_author.svg';
import heart from '/images/heart.svg';
import { buttons, ITEM_PER_PAGE } from '@/constants/constant';
import { Item } from '@/types/types';
import { useState } from 'react';

const imageMap = new Map<string, string>([
  ['Epic', DJ_item],
  ['Common', assassin_item],
  ['Rare', neon_guy_item],
  ['Legendary', mafia_england_item],
  ['Mythic', basketball_girl_item],
]);

const bgMap = new Map<string, string>([
  ['Epic', 'bg-epic-gradient'],
  ['Common', 'bg-common-gradient'],
  ['Rare', 'bg-rare-gradient'],
  ['Legendary', 'bg-legendary-gradient'],
  ['Mythic', 'bg-mythic-gradient'],
]);

interface ItemsProp {
  data: Item[];
  loading: boolean;
  error: string;
  onViewMore: () => void;
}

function Items({ data, loading, error, onViewMore }: ItemsProp) {
  const [selectedButton, setSelectedButton] = useState(0);

  const handleViewMore = () => {
    onViewMore();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='flex flex-col w-full md:w-3/4'>
      <div className='flex overflow-x-auto whitespace-nowrap no-scrollbar'>
        {buttons.map((item, index) => {
          return (
            <Button
              type='button'
              key={index}
              onClick={() => setSelectedButton(index)}
              className={`${
                selectedButton === index
                  ? 'bg-primary-gradient'
                  : 'bg-secondary-gradient'
              }  text-white rounded mr-6 hover:bg-primary-gradient active:bg-primary-gradient`}
            >
              {item}
            </Button>
          );
        })}
      </div>

      <section className='gap-10 mt-10 flex items-center justify-start flex-wrap overflow-y-auto max-h-[2000px]'>
        {data.map((item) => {
          return (
            <div
              className='bg-[#3A384199] p-4 rounded-lg min-w-64'
              key={item.id}
            >
              {/* Image */}
              <div className={bgMap.get(item.tier)}>
                <div className='flex items-center justify-between p-2'>
                  <div className='bg-[#313B4580] rounded-sm px-3 py-1'>
                    <span className='text-xs  text-white'>{item.tier}</span>
                  </div>
                  <img src={heart} alt='heart' />
                </div>
                <img
                  src={imageMap.get(item.tier)}
                  alt={item.name}
                  className='w-full h-48 object-cover rounded-lg'
                />
              </div>

              <div className='mt-6 text-center text-white'>
                {/* Information */}
                <div className='flex items-center justify-between'>
                  <h2 className='text-base font-semibold'>{item.name}</h2>
                  <div className='flex items-center'>
                    <img src={ethereum} alt='ethereum' className='mr-2' />
                    <p className='text-sm'>{item.price} ETH</p>
                  </div>
                </div>
                {/* Author */}
                <div className='flex items-center mt-4'>
                  <img
                    src={item.author === 'red' ? redAuthor : greenAuthor}
                    alt='author'
                    className='mr-3'
                  />
                  <span className='text-xs'>Ghozali_Ghozalu</span>
                </div>
              </div>
            </div>
          );
        })}
        {/* View More */}
        {data.length > 0 && data.length % ITEM_PER_PAGE === 0 && (
          <div className='mt-4 flex justify-center w-full'>
            <Button
              type='button'
              className='bg-primary-gradient text-white py-5 px-28 h-16 text-base rounded shadow-primary'
              onClick={handleViewMore}
            >
              View more
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}

export default Items;
