// src/app/_components/ui/Button.tsx
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	size?: 'sm' | 'md' | 'lg';
	withArrow?: boolean;
}

export default function Button({
	className = '',
	size = 'md',
	withArrow = false,
	children,
	...props
}: ButtonProps) {
	const sizes = {
		sm: 'px-4 py-2 text-base',
		md: 'px-6 py-2 text-xl',
		lg: 'px-8 py-4 text-xl'
	};

	return (
		<button
			className={`
        ${sizes[size]}
        font-bold border-4 border-black bg-[#AE7AFF]
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
        hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
        hover:bg-[#d71e97]
        active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
        active:translate-x-[2px] active:translate-y-[2px]
        transition-all duration-200
        ${className}
      `}
			{...props}
		>
			{children}
			{withArrow && ' →'}
		</button>
	);
}