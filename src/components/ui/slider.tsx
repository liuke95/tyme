import { Slider } from 'antd';
import { FormControl, FormField, FormItem, FormLabel } from './form';

const gradientColor = 'linear-gradient(91.47deg, #DA458F -6%, #DA34DD 113.05%)';

interface SliderProps {
  label: string;
  min: number;
  max: number;
  step: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any;
  name: string;
}

function GradientSlider({ label, min, max, step, form, name }: SliderProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='text-[#89888B]'>{label}</FormLabel>
          <FormControl>
            <Slider
              min={min}
              step={step}
              max={max}
              marks={{
                0: {
                  style: {
                    color: '#D6D6D6',
                    marginTop: '20px',
                  },
                  label: '0.01 ETH',
                },
                200: {
                  style: {
                    color: '#D6D6D6',
                    marginTop: '20px',
                    width: '60px',
                  },
                  label: '200 ETH',
                },
              }}
              styles={{
                track: {
                  background: 'transparent',
                },
                tracks: {
                  background:
                    'linear-gradient(91.27deg, rgba(218, 69, 143, 0) 0.55%, #DA41A2 24.03%, #DA37CE 83.19%, rgba(218, 52, 221, 0) 102.8%)',
                },
                rail: {
                  background: '#3A3841',
                },
                handle: {
                  color: 'red',
                },
              }}
              defaultValue={[50, 120]}
              tooltip={{
                formatter: (value) => `${value} ETH`,
                placement: 'top',
                color: gradientColor,
              }}
              range={{}}
              {...field}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}

export default GradientSlider;
