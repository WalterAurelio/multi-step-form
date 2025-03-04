import { useLocation } from "react-router-dom";
import { useMainIndexStore } from "../store/mainIndexStore"

interface StepIndicatorProps {
  className?: string;
  index: number;
  description: string;
}

const paths = [
  '/',
  '/select-plan',
  '/add-ons',
  '/summary'
];

function StepIndicator({ className, index, description }: StepIndicatorProps) {
  const { mainIndex } = useMainIndexStore();
  const location = useLocation();

  return (
    <div className={`flex items-center font-ubuntu-custom w-fit ${className}`}>
      <p className={`w-8 h-8 ${ location.pathname === paths[index] ? 'bg-light-blue-custom text-blue-custom': 'border-1 text-white' } rounded-full flex items-center justify-center p-4.5 font-bold`}>{index + 1}</p>
      <div className={`uppercase hidden md:block ${ mainIndex === index ? 'md:ml-4' : 'md:ml-3.5' }`}>
        <p className="text-grey-custom text-sm -mb-0.5">Step {index + 1}</p>
        <p className="text-white font-bold tracking-wider">{description}</p>
      </div>
    </div>
  )
}
export default StepIndicator;