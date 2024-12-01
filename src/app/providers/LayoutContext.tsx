// ~/app/providers/LayoutContext.tsx

import { createContext, useContext, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

type ScrollPhase = 'hero' | 'features' | 'exit';

interface LayoutContextType {
	isMobile: boolean;
	isTablet: boolean;
	scrollPhase: ScrollPhase;
	progress: number;
}

const LayoutContext = createContext<LayoutContextType>({
	isMobile: false,
	isTablet: false,
	scrollPhase: 'hero',
	progress: 0,
});

export function LayoutProvider({ children }: { children: React.ReactNode }) {
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
	const [scrollPhase, setScrollPhase] = useState<ScrollPhase>('hero');
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const vh = window.innerHeight;

			// Calculate phases based on scroll position
			if (scrollY < vh * 0.4) { // Reduced threshold
				setScrollPhase('hero');
				setProgress(scrollY / (vh * 0.4));
			} else if (scrollY < vh * 1.5) {
				setScrollPhase('features');
				setProgress((scrollY - vh * 0.4) / (vh));
			} else {
				setScrollPhase('exit');
				setProgress(Math.min(1, (scrollY - vh * 1.5) / (vh * 0.5)));
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<LayoutContext.Provider value={{ isMobile, isTablet, scrollPhase, progress }}>
			{children}
		</LayoutContext.Provider>
	);
}

export const useLayout = () => useContext(LayoutContext);