import type React from "react";
import "../styles/lines.scss";
interface LinesProps {
	className?: string;
}

const Lines: React.FC<LinesProps> = ({ className }) => {
	return (
		<div className={`lines ${className}`}>
			<div className="line" />
			<div className="line" />
			<div className="line" />
		</div>
	);
};

export default Lines;
