import { useRef, useState } from "react"
import { Check } from 'lucide-react';
import { useIsPlanMonthlyStore } from "../store/isPlanMonthlyStore";
import { UseFormRegister } from "react-hook-form";
import { TSelectAddOnSchema } from "../pages/AddOnsForm";

export interface CheckboxProps {
  register: UseFormRegister<TSelectAddOnSchema>;
  className?: string;
  label: string;
  description: string;
  price: number;
}

function Checkbox({ register, className, label, description, price }: CheckboxProps) {
  const labelRef = useRef<HTMLLabelElement>(null);
  const [isChecked, setIsChecked] = useState(false);
  const { isPlanMonthly } = useIsPlanMonthlyStore();
  const borderStyles = isChecked ? 'border-blue-2-custom bg-lighter-blue-custom' : 'border-grey-custom';
  const checkbox_id = `${label.split(' ')[0]}-check`;
  const selectedAddOn = {
    name: label,
    price: isPlanMonthly ? price : price * 10
  }

  const handleClick = () => {
    if (labelRef.current) {
      labelRef.current.click();
    }
  };

  return (
    <div className={`flex items-center border-1 p-4 rounded-md ${borderStyles} hover:border-blue-2-custom hover:bg-lighter-blue-custom ${className} relative`}>

      <input {...register('addOns')} id={checkbox_id} onChange={() => setIsChecked(!isChecked)} type='checkbox' className='peer absolute -z-1 opacity-0' checked={isChecked} value={ JSON.stringify(selectedAddOn) } />
      <div onClick={handleClick} className="border-1 border-grey-custom w-5 h-5 rounded-sm cursor-pointer peer-checked:bg-blue-2-custom peer-checked:border-blue-2-custom flex items-center justify-center select-none mr-4">
        { isChecked && <Check className='text-white w-3.5' /> }
      </div>
      <label ref={labelRef} htmlFor={checkbox_id} className='text-lg text-blue-custom font-medium cursor-pointer select-none leading-6'>
        {label}
        <br />
        <span className='text-grey-custom text-base font-normal'>{description}</span>
      </label>
      <p onClick={handleClick} className='text-blue-2-custom cursor-pointer ml-auto select-none'>+${ isPlanMonthly ? price : price * 10 }/{ isPlanMonthly ? 'mo' : 'yr' }</p>
    </div>
  )
}
export default Checkbox