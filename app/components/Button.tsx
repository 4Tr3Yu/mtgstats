import React from "react";

interface ButtonProps {
	type?: "button" | "submit" | "reset";
	onClick?: () => void;
	children: React.ReactNode;
	className?: string;
}

const Button: React.FC<ButtonProps> = ({
	type = "button",
	onClick,
	children,
	className,
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`w-full py-2 px-4 bg-red-400 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
