'use client';
import React from 'react';
import Lines from './Lines';

export default function Background() {
    return (
        <>
            <Lines />
            <div className="absolute inset-0 animate-gradient "></div>
        </>
    );
}