import Image from 'next/image';

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
};

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flex justify-center items-center gap-3 rounded-full border ${variant} ${
        full && 'w-full'
      }`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <p className='whitespace-nowrap cursor-pointer'>{title}</p>
    </button>
  );
};

export default Button;
