"use client"
import React from 'react';
import '../styles/lines.scss';
interface LinesProps {
    className?: string;
}

const Lines: React.FC<LinesProps> = ({ className }) => {
    return (
        <div className={`lines ${className}`}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    )
}

export default Lines;