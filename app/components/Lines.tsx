"use client"
import React from 'react';

interface LinesProps {
    className?: string;
}
const Lines: React.FC<LinesProps> = ({ className }) => {
    return (
        <div className={`falling-lines ${className}`}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    )
}

export default Lines;