// src/app/demo/iOSDownload.tsx
export default function iOSDownload() {
	return (
		<div className="max-w-2xl mx-auto mt-24 text-center">
			<div className="space-y-6">
				<h2 className="text-3xl font-black text-black uppercase">
					iOS Version Coming Soon!
				</h2>
				<div className="relative text-xl p-6 border-4 border-black bg-[#A6FAFF] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
					<p className="font-bold">
						We&apos;re currently in private beta testing for iOS.
						<br />
						Join the waitlist to get early TestFlight access!
					</p>
					<p className="text-sm mt-4 italic">
						Beta users will get:
					</p>
					<ul className="text-sm mt-2 italic space-y-1">
						<li>• Early access to new features</li>
						<li>• Direct feedback channel with our team</li>
						<li>• Special mention in our app</li>
					</ul>
				</div>
			</div>
		</div>
	);
}