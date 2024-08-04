// HomeClient.tsx

'use client';

import { useState } from "react";
import Link from "next/link";

export default function HomeClient() {
	const [showDialog, setShowDialog] = useState(false);
	const [email, setEmail] = useState("");

	const handleDownload = (e: React.MouseEvent) => {
		e.preventDefault();
		// Simulating download start
		console.log("Download started");
		setShowDialog(true);
	};

	const handleEmailSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle email submission logic here
		console.log("Email submitted:", email);
		setShowDialog(false);
	};

	return (
		<>
			<div className="flex gap-6">
				<button
					onClick={handleDownload}
					className="text-xl font-semibold px-6 py-2 border-2 border-black bg-[#AE7AFF] hover:bg-[#d71e97]
                    shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
                    transition-all duration-200 flex items-center justify-center"
				>
					Download App ↓
				</button>
				<Link
					href="https://github.com/yourusername/sixpack-avionics"
					className="text-xl font-semibold px-6 py-2 border-2 border-black bg-white
                    shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
                    transition-all duration-200 flex items-center justify-center"
				>
					GitHub →
				</Link>
			</div>

			{showDialog && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
					<div className="w-96 px-8 py-4 bg-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] grid place-content-center">
						<div>
							<h1 className="text-2xl mb-4 font-bold">Your download has started!</h1>
							<p className="mb-4">While you wait, why not stay in the loop or support our project?</p>
							<form onSubmit={handleEmailSubmit} className="mb-4">
								<input
									type="email"
									placeholder="Enter your email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="w-full p-2 border-2 border-black mb-2"
									required
								/>
								<button
									type="submit"
									className="w-full text-xl font-semibold px-6 py-2 border-2 border-black bg-[#A6FAFF] hover:bg-[#79F7FF]
                            shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
                            transition-all duration-200 flex items-center justify-center"
								>
									Stay Tuned
								</button>
							</form>
							<Link
								href="https://buymeacoffee.com/yourusername"
								className="w-full text-xl font-semibold px-6 py-2 border-2 border-black bg-[#FFDD00] hover:bg-[#FFE534]
                          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
                          transition-all duration-200 flex items-center justify-center"
							>
								Buy us a coffee ☕
							</Link>
						</div>
					</div>
				</div>
			)}
		</>
	);
}