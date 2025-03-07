import { useNavigate } from "react-router-dom";
import TitleSubtitle from "../components/TitleSubtitle";
import Button from "../components/Button";
import RadioBox from "../components/RadioBox";
import arcade_icon from '../assets/icon-arcade.svg';
import advanced_icon from '../assets/icon-advanced.svg';
import pro_icon from '../assets/icon-pro.svg';
import { RadioBoxProps } from "../components/RadioBox";
import Toggle from "../components/Toggle";
import { dataSchema } from "../schemas/dataSchema";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCompletePlanStore } from "../store/completePlanStore";
import { useEffect } from "react";

const boxOptions: Omit<RadioBoxProps, 'register' | 'index' | 'className'>[] = [
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

const selectPlanSchema = dataSchema.pick({
  plan: true
});

export type TSelectPlanSchema = z.infer<typeof selectPlanSchema>;

function SelectPlanForm() {
  const title = 'Select your plan';
  const subtitle = 'You have the option of monthly or yearly biling.';
  const navigate = useNavigate();
  const setData = useCompletePlanStore(state => state.setData);
  const { name, email, phoneNumber } = useCompletePlanStore();
  const { register, handleSubmit, formState: { errors } } = useForm<TSelectPlanSchema>({
    resolver: zodResolver(selectPlanSchema)
  });

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (useCompletePlanStore.persist.hasHydrated()) {
      if (!name || !email || !phoneNumber) {
        navigate('/');
      }
    }

  }, [name, email, phoneNumber, navigate]);

  const onSubmit = (data: TSelectPlanSchema) => {
    console.log(data);
    setData(data);
    navigate('/add-ons');
  }

  return (
    <form className="flex flex-col justify-between" onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-white px-6 py-8 h-96 flex flex-col justify-between rounded-xl w-[calc(100%-32px)] mx-auto -mt-18 md:mt-0">
        <TitleSubtitle title={title} subtitle={subtitle} className="mb-8" />
        <div className="flex flex-col justify-between mb-4 md:grid md:grid-cols-3 md:gap-x-4">
          {
            boxOptions.map((option, index) =>
              <RadioBox register={register} key={index} icon={option.icon} index={index} label={option.label} price={option.price} />
            )
          }
        </div>
        { errors.plan && <p>{errors.plan.message}</p> }
        <Toggle />
      </div>

      <div className="p-4 flex justify-between bg-white absolute bottom-0 right-0 left-0 md:static md:px-10">
        <Button onClick={goBack} type="button" variant="back">
          Go Back
        </Button>
        <Button type="submit">
          Next Step
        </Button>
      </div>
    </form>
  );
}
export default SelectPlanForm