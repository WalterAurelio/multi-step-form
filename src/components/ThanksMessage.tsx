import check_icon from '../assets/icon-thank-you.svg';

function ThanksMessage() {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-14 mb-5'>
        <img src={check_icon} alt="checkmark_icon" />
      </div>
      <h2 className='text-2xl text-blue-custom font-bold mb-2'>Thank you!</h2>
      <p className='text-grey-custom'>
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  )
}
export default ThanksMessage