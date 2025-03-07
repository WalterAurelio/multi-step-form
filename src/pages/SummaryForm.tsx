import Button from "../components/Button";
import FinalCheck from "../components/FinalCheck";
import TitleSubtitle from "../components/TitleSubtitle";
import { useNavigate } from "react-router-dom";
import { useCompletePlanStore } from "../store/completePlanStore";

function SummaryForm() {
  const title = 'Finishing up';
  const subtitle = 'Double-check everything looks OK before confirming.';
  const navigate = useNavigate();
  const { name, email, phoneNumber, plan, isMonthly, addOns } = useCompletePlanStore();

  const goBack = () => {
    navigate(-1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      name,
      email,
      phoneNumber,
      plan,
      isMonthly,
      addOns
    });
    console.log('Finalizado');
  };

  return (
    <form className="flex flex-col justify-between" onSubmit={handleSubmit}>
      <div className="bg-white px-6 py-8 h-96 flex flex-col justify-between rounded-xl w-[calc(100%-32px)] mx-auto -mt-18 md:mt-0">
        <TitleSubtitle title={title} subtitle={subtitle} className="mb-8" />
        <FinalCheck />
      </div>
      <div className="p-4 flex justify-between bg-white absolute bottom-0 right-0 left-0 md:static md:px-10">
        <Button onClick={goBack} type="button" variant="back">
          Go Back
        </Button>
        <Button type="submit" variant="final">
          Confirm
        </Button>
      </div>
    </form>
  )
}
export default SummaryForm