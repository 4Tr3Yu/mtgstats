"use client";
import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function SignUp() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignUp = async () => {
		const { error } = await supabase.auth.signUp({ email, password });
		if (error) alert(error.message);
		else alert("Check your email for confirmation link");
	};

	return (
		<div>
			<input
				type="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type="password"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button type="button" onClick={handleSignUp}>
				Sign Up
			</button>
		</div>
	);
}
