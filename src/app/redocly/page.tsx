'use client';

import React from 'react';
import { redHatDisplay } from './RedHatDisplay';
import dynamic from 'next/dynamic';
import Slider from './Slider';
import Orbiter from './Orbiter';

const DynamicThemeProvider = dynamic(() => import('./ThemeProvider'), { ssr: false });

const RedoclyPage: React.FC = () => {
	return (
		<div className="min-h-screen bg-[#EDEDF2]" style={{ fontFamily: redHatDisplay.style.fontFamily }}>
			
			<Orbiter />

			<section className="relative overflow-hidden -mt-40 -mb-16">
				<div className="container mx-auto px-5 relative" style={{ zIndex: 1 }}>
					<Slider />
				</div>
			</section>

			<DynamicThemeProvider />

			<section className="mt-16">
				<img src="redocly/footer.png" alt="" className="w-full" />
			</section>
		</div>
	);
};

export default RedoclyPage;