import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { Combobox } from './ui/combobox';
import {
  priceOptions,
  themeOptions,
  tierOptions,
  timeOptions,
} from '@/constants/options';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import reset from '/images/reset.svg';
import GradientSlider from './ui/slider';

interface FilterProps {
  onFilter: (param: z.infer<typeof formSchema>) => void;
}
export const formSchema = z.object({
  tier: z.string(),
  theme: z.string(),
  createDate: z.string(),
  price: z.string(),
  q: z.string(),
  priceRange: z.array(z.number()),
});

function Filters({ onFilter }: FilterProps) {
  const defaultValues = {
    q: '',
    tier: '',
    theme: '',
    createDate: '',
    price: '',
    priceRange: [0, 150],
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    onFilter(values);
  }

  const onHandleReset = () => {
    form.reset();
    onFilter(form.getValues());
  };

  const formValues = form.watch();
  const isFormChanged =
    JSON.stringify(formValues) !== JSON.stringify(defaultValues);

  return (
    <aside className='w-full md:w-1/4 rounded-lg space-y-4'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <FormField
            control={form.control}
            name='q'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className='relative w-full'>
                    <Input
                      className='pl-9 bg-transparent text-white'
                      placeholder='Quick search'
                      {...field}
                    />
                    <Search className='absolute left-0 top-0 m-2.5 h-4 w-4 text-muted-foreground' />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <div className='!mb-16 !mt-8'>
            <GradientSlider
              label='PRICE'
              min={0}
              max={200}
              step={0.01}
              form={form}
              name='priceRange'
            />
          </div>

          <Combobox
            options={tierOptions}
            placeholder='Please select tier'
            notFoundMsg='No tier found.'
            defaultMsg='Select tier...'
            form={form}
            name='tier'
            label='TIER'
          />
          <Combobox
            options={themeOptions}
            placeholder='Please select theme'
            notFoundMsg='No theme found.'
            defaultMsg='Select theme...'
            form={form}
            name='theme'
            label='THEME'
          />
          <Combobox
            options={timeOptions}
            placeholder='Please select time'
            notFoundMsg='No time found.'
            defaultMsg='Select time...'
            form={form}
            name='createDate'
            label='TIME'
          />
          <Combobox
            options={priceOptions}
            placeholder='Please select price'
            notFoundMsg='No price found.'
            defaultMsg='Select price...'
            form={form}
            name='price'
            label='PRICE'
          />
          <div className='flex justify-center mt-4'>
            {isFormChanged && (
              <Button
                onClick={onHandleReset}
                type='button'
                className='bg-transparent hover:bg-transparent text-white py-2 px-4 text-base rounded  mr-2'
              >
                <img src={reset} alt='reset' className='mr-1' />
                Reset filter
              </Button>
            )}
            <Button
              type='submit'
              className='bg-primary-gradient text-white py-2 px-14 text-base rounded shadow-primary'
            >
              Search
            </Button>
          </div>
        </form>
      </Form>
    </aside>
  );
}

export default Filters;
