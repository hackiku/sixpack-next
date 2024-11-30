// ~/app/_components/cta/OSToggle.tsx
'use client';

import { useState } from 'react';

export type Platform = 'android' | 'ios' | 'both';

interface OSToggleProps {
	value: Platform;
	onChange: (platform: Platform) => void;
}

export default function OSToggle({ value, onChange }: OSToggleProps) {
	return (
		<div className="flex flex-wrap gap-3 mb-6">
			<button
				type="button"
				onClick={() => onChange('android')}
				className={`
          px-6 py-2 text-xl font-bold
          border-4 border-black
          ${value === 'android'
						? 'bg-[#A6FAFF] -rotate-2 scale-105'
						: 'bg-white hover:bg-gray-100'
					}
          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
          hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
          hover:translate-x-[2px] hover:translate-y-[2px]
          transition-all duration-200
        `}
			>
				Android
			</button>

			<button
				type="button"
				onClick={() => onChange('ios')}
				className={`
          px-6 py-2 text-xl font-bold
          border-4 border-black
          ${value === 'ios'
						? 'bg-[#A6FAFF] rotate-2 scale-105'
						: 'bg-white hover:bg-gray-100'
					}
          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
          hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
          hover:translate-x-[2px] hover:translate-y-[2px]
          transition-all duration-200
        `}
			>
				iOS
			</button>

			<button
				type="button"
				onClick={() => onChange('both')}
				className={`
          px-6 py-2 text-xl font-bold relative
          border-4 border-black
          ${value === 'both'
						? 'bg-[#AE7AFF] scale-105'
						: 'bg-white hover:bg-gray-100'
					}
          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
          hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
          hover:translate-x-[2px] hover:translate-y-[2px]
          transition-all duration-200
          overflow-hidden
        `}
			>
				{/* Diagonal stripes background when selected */}
				{value === 'both' && (
					<div
						className="absolute inset-0 -z-10 opacity-20"
						style={{
							backgroundImage: `repeating-linear-gradient(
                45deg,
                #000,
                #000 10px,
                transparent 10px,
                transparent 20px
              )`
						}}
					/>
				)}
				Both
			</button>
		</div>
	);
}