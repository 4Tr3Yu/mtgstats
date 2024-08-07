"use client";
import type React from "react";

interface ControlsProps {
	user: string;
}

const buttonMapping = ["- 5", "- 4", "- 3", "- 2", "- 1", "+ 5", "+ 3", "+ 1"];

const Controls: React.FC<ControlsProps> = ({ user }) => {
	const bgColor = user === "player" ? "bg-orange-800" : "bg-sky-800";
	return (
		<div className="controls-container">
			{buttonMapping.map((button, index) => {
				return (
					<button
						type="button"
						key={`id${button.split(" ").join("")}`}
						className={`mb-2 py-3 w-full font-bold text-2xl leading-none bg-rounded-lg border-amber-300 ${bgColor} focus:ring-4`}
						data-dmg={button.split(" ").join("")}
					>
						{button}
					</button>
				);
			})}
			<div className="manual">
				<button
					type="button"
					className={`${bgColor} rounded-t-md w-full mb-0 text-2xl leading-none py-3 font-bold`}
				>
					+
				</button>
				<input
					type="number"
					className="px-4 py-2 border border-orange-800  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent w-full"
				/>
				<button
					type="button"
					className={`${bgColor} rounded-b-md w-full mt-0 text-2xl leading-none py-3 font-bold`}
				>
					-
				</button>
			</div>
		</div>
	);
};

export default Controls;
