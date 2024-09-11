// app/redocly/ctaData.ts

export interface CTAButton {
	text: string;
	isPrimary: boolean;
	color?: string;
}

export interface CTAData {
	productName: string;
	title: string;
	description: string;
	color: string;
	buttons: CTAButton[];
	gradient?: boolean;
}

export const ctaData: CTAData[] = [
	{
		productName: 'Reunite',
		title: 'the team around APIs',
		description: "Collaborative editor. Streamline the API lifecycle together over git or gui or both.",
		color: '#4CAF50',
		buttons: [
			{ text: 'Join the waitlist', isPrimary: true },
			{ text: 'Learn more', isPrimary: false },
		],
	},
	{
		productName: 'Redoc',
		title: 'for API docs you\'ll be proud of',
		description: "Automagical API spec → reference docs, straight from git. The open source favorite, but with mock servers.",
		color: '#0066FF',
		buttons: [
			{ text: 'Explore Redoc', isPrimary: true },
			{ text: 'View Demo', isPrimary: false },
		],
	},
	{
		productName: 'Revel',
		title: 'in your new developer showcase',
		description: 'Create slick, on-brand interactive developer portals that onboard more business.',
		color: '#FF6B00',
		buttons: [
			{ text: 'Ravishing!', isPrimary: true },
			{ text: 'Learn more →', isPrimary: false },
		],
	},
	{
		productName: 'Reef',
		title: 'Bring internal APIs ashore',
		description: 'The internal ecosystem platform. Find, classify and manage APIs big and small across your entire org.',
		color: '#A45CFF',
		buttons: [
			{ text: 'Learn about Reef', isPrimary: true },
			{ text: 'Request Demo', isPrimary: false },
		],
	},
	{
		productName: 'Realm',
		title: 'Redocly all the way to Sunday',
		description: 'One platform for all things API. Find, manage, design, document and distribute bits of API economy.',
		color: 'rgb(22, 119, 255)',
		buttons: [
			{ text: 'Explore Realm', isPrimary: true },
			{ text: 'Get Pricing', isPrimary: false },
		],
		gradient: true,
	},
];