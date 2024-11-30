// ~/app/_components/cta/EmailForm.tsx
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import OSToggle, { Platform } from './OSToggle';

interface EmailFormProps {
	variant?: 'inline' | 'stacked';
	title?: string;
	className?: string;
}

const PILOT_EMAILS = [
	'talktome@goose.mil',
	'sully@hudson.river',
	'chuck@yeager.test',
	'amelia@lockheed.electra',
	'pylote@cezzna.me'
];

export default function EmailForm({
	variant = 'inline',
	title,
	className = ''
}: EmailFormProps) {
	const [email, setEmail] = useState('');
	const [platform, setPlatform] = useState<Platform>('android');
	const [showMessage, setShowMessage] = useState(false);
	const [placeholder, setPlaceholder] = useState(PILOT_EMAILS[0]);
	const router = useRouter();

	// Rotate through fun email placeholders
	useEffect(() => {
		const interval = setInterval(() => {
			setPlaceholder(prev => {
				const currentIndex = PILOT_EMAILS.indexOf(prev);
				return PILOT_EMAILS[(currentIndex + 1) % PILOT_EMAILS.length];
			});
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const response = await fetch('/api/subscribe', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, platform }),
			});

			if (!response.ok) throw new Error('Subscription failed');

			// For Android or both, redirect to demo
			if (platform !== 'ios') {
				router.push('/demo');
			} else {
				setShowMessage(true);
			}
		} catch (err) {
			console.error('Subscription error:', err);
			setShowMessage(true);
		}
	};

	const containerClasses = `
    w-full max-w-lg mx-auto 
    ${className}
  `;

	const formClasses = `
    flex ${variant === 'inline' ? 'flex-row sm:flex-row' : 'flex-col'} 
    gap-4 w-full
  `;

	const inputClasses = `
    flex-1 px-4 py-2 border-4 border-black bg-white text-xl
    shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
    focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
    focus:outline-none focus:bg-[#A6FAFF]
    transition-all duration-200
    placeholder:text-gray-400 placeholder:italic
  `;

	const buttonClasses = `
    px-6 py-2 text-xl border-4 border-black bg-[#AE7AFF]
    shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
    hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
    hover:bg-[#d71e97]
    active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
    active:translate-x-[2px] active:translate-y-[2px]
    transition-all duration-200 font-bold whitespace-nowrap
    ${variant === 'stacked' ? 'w-full' : ''}
  `;

	if (showMessage && platform === 'ios') {
		return (
			<div className={containerClasses}>
				<div className="relative text-xl font-bold p-6 border-4 border-black bg-[#A6FAFF] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
					You're on the iOS waitlist! We'll notify you when it's ready for takeoff.
					<button
						onClick={() => setShowMessage(false)}
						className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-[#AE7AFF] text-black rounded-full border-2 border-black"
						aria-label="Dismiss message"
					>
						<span className="text-xl font-bold">×</span>
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className={containerClasses}>
			{title && (
				<h4 className="text-2xl font-black text-black uppercase mb-4">{title}</h4>
			)}

			<OSToggle value={platform} onChange={setPlatform} />

			<form onSubmit={handleSubmit} className={formClasses}>
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder={placeholder}
					className={inputClasses}
					required
				/>
				<button type="submit" className={buttonClasses}>
					Get App →
				</button>
			</form>
		</div>
	);
}