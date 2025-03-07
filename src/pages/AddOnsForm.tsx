import Checkbox from "../components/Checkbox";
import TitleSubtitle from "../components/TitleSubtitle";
import { CheckboxProps } from "../components/Checkbox";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { dataSchema } from "../schemas/dataSchema";
import { z } from "zod";
import { useCompletePlanStore } from "../store/completePlanStore";

const checkboxOptions: Omit<CheckboxProps, 'register'>[] = [
  {
    label: 'Online service',
    description: 'Access to multiplayer games',
    price: 1
  },
  {
    label: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    price: 2
  },
  {
    label: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: 2
  }
];

const selectAddOnSchema = dataSchema.pick({
  addOns: true
});

export type TSelectAddOnSchema = z.infer<typeof selectAddOnSchema>;

function AddOnsForm() {
  const title = 'Pick add-ons';
  const subtitle = 'Add-ons help enhance your gaming experience';
  const navigate = useNavigate();
  const setData = useCompletePlanStore(state => state.setData);
  const { register, handleSubmit } = useForm<TSelectAddOnSchema>({
    resolver: zodResolver(selectAddOnSchema)
  });

  const goBack = () => {
    navigate(-1);
  };

  const onSubmit = (data: TSelectAddOnSchema) => {
    console.log(data);
    setData(data);
    navigate('/summary');
  };

  return (
    <form className="flex flex-col justify-between" onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-white px-6 py-8 h-96 flex flex-col justify-between rounded-xl w-[calc(100%-32px)] mx-auto -mt-18 md:mt-0">
        <TitleSubtitle title={title} subtitle={subtitle} className="mb-8" />
        {
          checkboxOptions.map((option, index) =>
            <Checkbox register={register} key={index} label={option.label} description={option.description} price={option.price} className="mb-4" />
          )
        }
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
  )
}
export default AddOnsForm