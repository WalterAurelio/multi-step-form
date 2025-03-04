type ButtonVariant = 'back' | 'final';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button';
  variant?: ButtonVariant;
}

function Button({ type, variant, children, ...props }: ButtonProps) {
  const isBackVariant = variant === 'back';
  const isFinalVariant = variant === 'final';
  const buttonStyles = isBackVariant
    ? 'bg-white text-grey-custom hover:text-blue-custom'
    : isFinalVariant
    ? 'bg-blue-2-custom text-white hover:bg-blue-2-hover-custom'
    : 'bg-blue-custom text-white hover:bg-blue-hover-custom';

  return (
    <button type={type} className={`font-bold py-3 px-6 rounded-md cursor-pointer ${buttonStyles}`} {...props}>
      {children}
    </button>
  )
}

export default Button;