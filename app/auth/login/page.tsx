"use client";
import { useState } from 'react';
import { supabase } from '@lib/supabaseClient';
import Button from '@components/Button';
import InputText from '@components/InputText';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signIn({ email, password });
    if (error) alert(error.message);
    else alert('Logged in successfully');
  };
  let input = '03:24:00PM'


  return (
    <div className='p-4 rounded-md shadow-md w-full'>
      <h2 className='text-2xl font-semibold mb-6'>Login</h2>
      <div className="space-y-4">
        <InputText
          id='email'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputText
          id='password'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Login</Button>
      </div>
    </div>
  );
}
