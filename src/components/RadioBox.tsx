import { useRef } from "react";
import { useIsPlanMonthlyStore } from "../store/isPlanMonthlyStore";
import { useSelectedPlanIndex } from "../store/selectedPlanIndexStore";

export interface RadioBoxProps {
  className: string;
  index: number;
  icon: string;
  label: 'Arcade' | 'Advanced' | 'Pro';
  price: number;
}

function RadioBox({ className, index, icon, label, price }: RadioBoxProps) {
  const labelRef = useRef<HTMLLabelElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { isPlanMonthly } = useIsPlanMonthlyStore();
  const { selectedIndex, setSelectedIndex } = useSelectedPlanIndex();
  const borderStyles = selectedIndex === index ? 'border-blue-2-custom bg-lighter-blue-custom' : 'border-grey-custom';

  const handleClick = () => {
    if (labelRef.current) {
      labelRef.current.click();
    }
  };

  return (
    <div className={`flex border-1 p-4 rounded-md ${borderStyles} hover:border-blue-2-custom hover:bg-lighter-blue-custom md:flex-col ${className}`}>

      <input ref={inputRef} type='radio' name="plan_selection" id={label} defaultChecked={index === 0} className="hidden" />
      <div>
        <img onClick={handleClick} src={icon} alt={`${label}-icon`} className="cursor-pointer mr-4 md:mb-8" />
      </div>
      <label onClick={() => setSelectedIndex(index)} ref={labelRef} htmlFor={label} className='text-lg text-blue-custom font-medium cursor-pointer select-none leading-6'>
        {label}
        <br />
        <span className='text-grey-custom text-base font-normal'>${ isPlanMonthly ? price : price * 10 }/{ isPlanMonthly ? 'mo' : 'yr' }</span>
        <br />
        { !isPlanMonthly && <span className="text-blue-custom text-base font-normal">2 months free</span> }
      </label>
    </div>
  )
}
export default RadioBox