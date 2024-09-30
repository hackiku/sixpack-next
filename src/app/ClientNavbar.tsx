'use client';

import { usePathname } from "next/navigation";
import Navbar from "~/app/_components/Navbar";

export default function ClientNavbar() {
	const pathname = usePathname();
	const isRedoclyRoute = pathname === '/redocly';

	if (isRedoclyRoute) {
		return null;
	}

	return <Navbar />;
}