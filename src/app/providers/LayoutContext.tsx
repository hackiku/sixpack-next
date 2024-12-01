// ~/app/providers/LayoutContext.tsx
"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

type ScrollPhase = 'hero' | 'features' | 'exit' | 'hidden';

interface LayoutContextType {
	isMobile: boolean;
	isTablet: boolean;
	scrollPhase: ScrollPhase;
	progress: number;
	shouldShowApp: boolean;
}

const LayoutContext = createContext<LayoutContextType>({
	isMobile: false,
	isTablet: false,
	scrollPhase: 'hero',
	progress: 0,
	shouldShowApp: true,
});

export function LayoutProvider({ children }: { children: React.ReactNode }) {
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
	const [scrollPhase, setScrollPhase] = useState<ScrollPhase>('hero');
	const [progress, setProgress] = useState(0);
	const [shouldShowApp, setShouldShowApp] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const vh = window.innerHeight;

			// Calculate whether we should show the app
			const shouldShow = scrollY < vh * 2; // Hide after features section
			setShouldShowApp(shouldShow);

			// Calculate phases based on scroll position
			if (scrollY < vh * 0.4) {
				setScrollPhase('hero');
				setProgress(scrollY / (vh * 0.4));
			} else if (scrollY < vh * 1.5) {
				setScrollPhase('features');
				setProgress((scrollY - vh * 0.4) / vh);
			} else if (scrollY < vh * 2) {
				setScrollPhase('exit');
				setProgress(Math.min(1, (scrollY - vh * 1.5) / (vh * 0.5)));
			} else {
				setScrollPhase('hidden');
				setProgress(1);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<LayoutContext.Provider value={{
			isMobile,
			isTablet,
			scrollPhase,
			progress,
			shouldShowApp
		}}>
			{children}
		</LayoutContext.Provider>
	);
}

export const useLayout = () => useContext(LayoutContext);