import React from 'react';

const Orbiter: React.FC = () => {
	return (
		<div className="relative w-full max-w-xl mx-auto">
			{/* Main circle */}
			<div className="aspect-square rounded-full border-2 border-gray-200">
				{/* Center text */}
				<div className="absolute inset-0 flex items-center justify-center">
					<span className="text-lg font-bold text-gray-800">Realm</span>
				</div>

				{/* Orbiting elements */}
				{['Redoc', 'Revel', 'Reef', 'Reunite'].map((product, index) => (
					<div
						key={product}
						className={`absolute w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center
                       text-white font-semibold text-sm transform -translate-x-1/2 -translate-y-1/2`}
						style={{
							top: `${50 - 40 * Math.cos(index * Math.PI / 2)}%`,
							left: `${50 + 40 * Math.sin(index * Math.PI / 2)}%`,
						}}
					>
						{product}
					</div>
				))}
			</div>
		</div>
	);
};

export default Orbiter;