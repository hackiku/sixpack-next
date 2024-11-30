// src/app/api/subscribe/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import type { Platform } from '~/app/_components/cta/OSToggle';

interface SubscribeRequest {
	email: string;
	platform: Platform;
}

export async function POST(request: NextRequest) {
	try {
		// Type assertion for the raw JSON data
		const rawData = (await request.json()) as unknown;

		// Type guard function
		function isSubscribeRequest(data: unknown): data is SubscribeRequest {
			if (!data || typeof data !== 'object') return false;

			const { email, platform } = data as Record<string, unknown>;

			return (
				typeof email === 'string' &&
				typeof platform === 'string' &&
				['android', 'ios', 'both'].includes(platform)
			);
		}

		// Validate the data shape
		if (!isSubscribeRequest(rawData)) {
			return NextResponse.json(
				{ success: false, message: 'Invalid request data' },
				{ status: 400 }
			);
		}

		const { email, platform } = rawData;

		// TODO: Add Resend integration here
		console.log('Subscription request:', { email, platform });

		return NextResponse.json({
			success: true,
			message: platform === 'ios'
				? 'Added to iOS waitlist'
				: 'Thanks for subscribing!'
		});
	} catch (error) {
		console.error('Subscription error:', error);
		return NextResponse.json(
			{ success: false, message: 'Subscription failed' },
			{ status: 500 }
		);
	}
}