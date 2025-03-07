import { useEffect, useRef } from "react";
import { useIsPlanMonthlyStore } from "../store/isPlanMonthlyStore";
import { useSelectedPlanIndex } from "../store/selectedPlanIndexStore";
import { UseFormRegister } from "react-hook-form";
import { TSelectPlanSchema } from "../pages/SelectPlanForm";

export interface RadioBoxProps {
  register: UseFormRegister<TSelectPlanSchema>;
  index: number;
  icon: string;
  label: 'Arcade' | 'Advanced' | 'Pro';
  price: number;
}

export interface ISelectedPlan {
  name: string;
  price: number;
  isMonthly: boolean;
}

function RadioBox({ register, index, icon, label, price }: RadioBoxProps) {
  const labelRef = useRef<HTMLLabelElement>(null);
  const { isPlanMonthly } = useIsPlanMonthlyStore();
  const { selectedPlanIndex, setSelectedPlanIndex } = useSelectedPlanIndex();
  const selectedPlan: ISelectedPlan = {
    name: label,
    price: isPlanMonthly ? price : price * 10,
    isMonthly: isPlanMonthly
  };

  const handleClick = () => {
    if (labelRef.current) {
      labelRef.current.click();
    }
  };

  useEffect(() => {
    const currentIndex = selectedPlanIndex;
    setSelectedPlanIndex(-1);
    if (currentIndex === index) {
      setTimeout(handleClick);
    }
  }, [isPlanMonthly]);

  return (
    <div className="flex border-1 p-4 rounded-md border-grey-custom hover:border-blue-2-custom hover:bg-lighter-blue-custom has-checked:border-blue-2-custom has-checked:bg-lighter-blue-custom md:flex-col mb-4">
      <input type="radio" id={label} {...register('plan')} className="hidden" checked={selectedPlanIndex === index} value={
        JSON.stringify(selectedPlan)
      }
      />
      <div>
        <img onClick={handleClick} src={icon} alt={`${label}-icon`} className="cursor-pointer mr-4 md:mb-8" />
      </div>
      <label onClick={() => setSelectedPlanIndex(index)} ref={labelRef} htmlFor={label} className='text-lg text-blue-custom font-medium cursor-pointer select-none leading-6'>
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