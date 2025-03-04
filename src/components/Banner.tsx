import StepIndicator from "./StepIndicator";

const stepsDescription = [
  'Your info',
  'Select plan',
  'Add-ons',
  'Summary'
];

function Banner() {
  return (
    <div className="bg-[url(./assets/bg-sidebar-mobile.svg)] bg-cover bg-no-repeat pt-12 h-52 md:pl-8 md:h-full md:rounded-xl md:bg-[url(./assets/bg-sidebar-desktop.svg)]">
      <div className="flex justify-center md:flex-col h-fit">
        {
          stepsDescription.map((description, index) =>
            <StepIndicator key={index} description={description} index={index} className={`${index < 3 ? 'mr-3.5' : ''} md:mb-4`} />
          )
        }
      </div>
    </div>
  )
}
export default Banner