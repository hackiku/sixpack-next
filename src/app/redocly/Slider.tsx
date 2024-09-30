import React, { useState, useRef, useEffect } from 'react';
import { ctaData, CTAData } from './ctaData';

const Slider: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const sliderRef = useRef<HTMLDivElement>(null);

	const handleScroll = () => {
		if (sliderRef.current) {
			const scrollPosition = sliderRef.current.scrollLeft;
			const itemWidth = sliderRef.current.clientWidth;
			const newIndex = Math.round(scrollPosition / itemWidth) % ctaData.length;
			setCurrentIndex(newIndex);
		}
	};

	useEffect(() => {
		const slider = sliderRef.current;
		if (slider) {
			slider.addEventListener('scroll', handleScroll);
			return () => slider.removeEventListener('scroll', handleScroll);
		}
	}, []);

	useEffect(() => {
		if (sliderRef.current) {
			const itemWidth = sliderRef.current.clientWidth;
			sliderRef.current.scrollTo({
				left: currentIndex * itemWidth,
				behavior: 'smooth'
			});
		}
	}, [currentIndex]);

	return (
		<div
			ref={sliderRef}
			className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
			style={{ scrollSnapType: 'x mandatory' }}
		>
			{ctaData.map((item: CTAData, index: number) => (
				<div
					key={`${item.productName}-${index}`}
					className="flex-shrink-0 w-full snap-center"
				>
					<div className="bg-white m-4 p-6 rounded-lg shadow-lg">
						<h2 className="text-2xl font-bold mb-2" style={{ color: item.color }}>{item.productName}</h2>
						<h3 className="text-xl mb-4">{item.title}</h3>
						<p className="mb-4">{item.description}</p>
						<div className="flex space-x-4">
							{item.buttons?.map((button, buttonIndex) => (
								<button
									key={buttonIndex}
									className={`px-4 py-2 rounded ${button.isPrimary
										? `bg-[${item.color}] text-white`
										: 'bg-gray-200 text-gray-800'
										}`}
								>
									{button.text}
								</button>
							))}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Slider;