function FinalCheck() {
  return (
    <div className="text-grey-custom">
      <div className="bg-lighter-blue-custom p-4 rounded-md">
        <div className="flex items-center justify-between border-b-1 pb-4">
          <div>
            <h4 className="text-blue-custom font-bold">Arcade {'(Monthly)'}</h4>
            <p className="underline hover:text-blue-2-custom cursor-pointer">Change</p>
          </div>
          <p className="font-bold text-blue-custom">$9/mo</p>
        </div>

        <div className="flex justify-between mt-4">
          <p>Online service</p>
          <p className="text-blue-custom">+$1/mo</p>
        </div>
        <div className="flex justify-between mt-4">
          <p>Larger storage</p>
          <p className="text-blue-custom">+$2/mo</p>
        </div>
      </div>

      <div className="flex justify-between px-4 mt-4">
        <p>Total {'(per month)'}</p>
        <p className="text-blue-2-custom font-bold text-lg">+$12/mo</p>
      </div>
    </div>
  )
}
export default FinalCheck