'use client'
import React from 'react';
import MainMenu from './components/menu/MainMenu';
export default function Home() {
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <MainMenu/>
        
        <article className="w-full h-full card border p-5 ">
          <h2>Welcome</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A cumque maiores ab atque praesentium tempore veritatis eum asperiores deleniti soluta, obcaecati officiis saepe cum alias numquam suscipit. In, cum unde?</p>
        </article>
      </div>
   
  );
}
