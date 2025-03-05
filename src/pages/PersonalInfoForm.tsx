import Button from "../components/Button";
import Input from "../components/Input";
import TitleSubtitle from "../components/TitleSubtitle";
import { useNavigate } from "react-router-dom";
import { dataSchema } from "../schemas/dataSchema";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const personalInfoSchema = dataSchema.pick({
  name: true,
  email: true,
  phoneNumber: true
});

type TPersonalInfoSchema = z.infer<typeof personalInfoSchema>;

function PersonalInfo() {
  const title = 'Personal info';
  const subtitle = 'Please provide your name, email and phone number';
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, setError } = useForm<TPersonalInfoSchema>({
    resolver: zodResolver(personalInfoSchema)
  });

  const onSubmit = async (data: TPersonalInfoSchema) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      console.log(data);
      navigate('/select-plan');
    } catch (error) {
      if (error instanceof Error) {
        setError('name', {
          message: error.message
        });
      }
    }
  }

  return (
    <form className="flex flex-col justify-between" onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-white px-6 py-8 h-96 flex flex-col justify-between rounded-xl w-[calc(100%-32px)] mx-auto -mt-18 md:mt-0">
        <TitleSubtitle title={title} subtitle={subtitle} />
        <Input {...register('name')} label="Name" type="text" placeholder="e.g. Stephen King" />
        { errors.name && <p className="text-red-custom font-bold">{errors.name.message}</p> }
        <Input {...register('email')} label="Email Address" type="email" placeholder="e.g. stephenking@lorem.com" />
        { errors.email && <p className="text-red-custom font-bold">{errors.email.message}</p> }
        <Input {...register('phoneNumber')} label="Phone Number" type="tel" placeholder="e.g. +1 234 567 890" />
      </div>
      <div className="p-4 flex justify-end bg-white absolute bottom-0 right-0 left-0 md:static md:px-10">
        <Button type="submit">
          Next Step
        </Button>
      </div>
    </form>
  );
}
export default PersonalInfo