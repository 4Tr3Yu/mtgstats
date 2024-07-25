"use client";
import React from 'react';
import Lines from './Lines';

export default function Background() {
    return (
        <React.Fragment>
            <Lines />
             <div className="absolute inset-0 animate-gradient "></div>
        </React.Fragment>
    );
}