'use client'
import React from "react"

interface ControlsProps { 
	user: string
}

const buttonMapping = ['- 5', '- 4', '- 3', '- 2', '- 1', '+ 5', '+ 3', '+ 1'] 

const Controls: React.FC<ControlsProps> = ({user}) => {
	return (
		<div className="controls-container">
			{buttonMapping.map((button, index) => {
				return (
					<button key={index} className={`mb-2 py-3 w-full font-bold text-2xl leading-none bg-rounded-lg border-amber-300 bg-${user === 'player' ? 'orange' : 'sky'}-800 focus:ring-4`} data-dmg={button.split(' ').join('')}>{button}</button>
				)
			})}


		</div>
	)
}

export default Controls;