import { useNavigate } from "react-router-dom";
import TitleSubtitle from "../components/TitleSubtitle";
import Button from "../components/Button";
import RadioBox from "../components/RadioBox";
import arcade_icon from '../assets/icon-arcade.svg';
import advanced_icon from '../assets/icon-advanced.svg';
import pro_icon from '../assets/icon-pro.svg';
import { RadioBoxProps } from "../components/RadioBox";
import Toggle from "../components/Toggle";

const boxOptions: Omit<RadioBoxProps, 'index' | 'className'>[] = [
  {
    icon: arcade_icon,
    label: 'Arcade',
    price: 9
  },
  {
    icon: advanced_icon,
    label: 'Advanced',
    price: 12
  },
  {
    icon: pro_icon,
    label: 'Pro',
    price: 15
  }
];

function SelectPlanForm() {
  const title = 'Select your plan';
  const subtitle = 'You have the option of monthly or yearly biling.';
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/add-ons');
  }

  return (
    <form className="flex flex-col justify-between" onSubmit={handleSubmit}>
      <div className="bg-white px-6 py-8 h-96 flex flex-col justify-between rounded-xl w-[calc(100%-32px)] mx-auto -mt-18 md:mt-0">
        <TitleSubtitle title={title} subtitle={subtitle} className="mb-8" />
        <div className="flex flex-col justify-between mb-4 md:grid md:grid-cols-3 md:gap-x-4">
          {
            boxOptions.map((option, index) =>
              <RadioBox key={index} icon={option.icon} index={index} label={option.label} price={option.price} className="mb-4" />
            )
          }
        </div>
        <Toggle />
      </div>
      <div className="p-4 flex justify-end bg-white absolute bottom-0 right-0 left-0 md:static md:px-10">
        <Button type="submit">
          Next Step
        </Button>
      </div>
    </form>
  );
}
export default SelectPlanForm