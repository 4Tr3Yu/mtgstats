'use client';

import Image from "next/image";
import React from "react";

interface IconProps {
	src: string;
	width: number;
	height: number;
	color: string;
	className: string;
}

const Icon: React.FC<IconProps> = ({src, width, height, color, className}) => {
	return (
		<div className={`icon ${className}`} style={{
			backgroundColor: color,
			WebkitMask: `url(${src}) 0 0/${width}px ${height}px`,
			mask: `url(${src})  0 0/${width}px ${height}px`,
			width: `${width}px`,
			height:	`${height}px`

		}}></div>
	);
};

export default Icon;