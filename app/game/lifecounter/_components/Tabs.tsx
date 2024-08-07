import type React from "react";
import { useState } from "react";

const gameMapping = ["game 1"];

const TabButtons: React.FC = () => {
	const [game, setGame] = useState<string>(gameMapping[0]);

	const handleTabClick = (game: string) => {
		setGame(game);
	};

	return (
		<nav className="flex space-x-4">
			{gameMapping.map((gametab, index) => {
				return (
					<button
						type="button"
						key={`id${gametab.split(" ").join("")}`}
						className={`px-4 py-2 text-sm font-medium rounded-t-md focus:outline-none ${game === gametab ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
						onClick={() => handleTabClick(gametab)}
					>
						{" "}
						{gametab}{" "}
					</button>
				);
			})}
			<button
				type="button"
				className="px-4 py-2 text-sm font-medium rounded-t-md focus:outline-none bg-gray-200 text-gray-700"
			>
				+
			</button>
		</nav>
	);
};

export default TabButtons;
