import Button from "../components/Button";
import Input from "../components/Input";
import TitleSubtitle from "../components/TitleSubtitle";
import { useNavigate } from "react-router-dom";

function PersonalInfo() {
  const title = 'Personal info';
  const subtitle = 'Please provide your name, email and phone number';
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/select-plan');
  }

  return (
    <form className="flex flex-col justify-between" onSubmit={handleSubmit}>
      <div className="bg-white px-6 py-8 h-96 flex flex-col justify-between rounded-xl w-[calc(100%-32px)] mx-auto -mt-18 md:mt-0">
        <TitleSubtitle title={title} subtitle={subtitle} />
        <Input label="Name" type="text" placeholder="e.g. Stephen King" />
        <Input label="Email Address" type="email" placeholder="e.g. stephenking@lorem.com" />
        <Input label="Phone Number" type="tel" placeholder="e.g. +1 234 567 890" />
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