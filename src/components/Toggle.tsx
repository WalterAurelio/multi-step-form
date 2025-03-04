import { useIsPlanMonthlyStore } from "../store/isPlanMonthlyStore"

function Toggle() {
  const { isPlanMonthly, setIsPlanMonthly } = useIsPlanMonthlyStore();
  const monthlyTextColor = isPlanMonthly ? 'text-blue-custom' : 'text-grey-custom';
  const yearlyTextColor = !isPlanMonthly ? 'text-blue-custom' : 'text-grey-custom';
  const togglePosition = isPlanMonthly ? 'ml-0' : 'ml-5';

  return (
    <div className="font-medium flex items-center bg-lighter-blue-custom justify-center py-2 rounded-md">
      <p className={`${monthlyTextColor} transition-all`}>Monthly</p>
      <div
        className="w-10 h-5 bg-blue-custom rounded-full flex items-center p-1 cursor-pointer mx-4"
        onClick={() => setIsPlanMonthly(!isPlanMonthly)}
      >
        <div className={`h-3 w-3 rounded-full bg-white ${togglePosition} transition-all`}></div>
      </div>
      <p className={`${yearlyTextColor} transition-all`}>Yearly</p>
    </div>
  )
}
export default Toggle