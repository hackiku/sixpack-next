// ~/app/layout.tsx
import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TRPCReactProvider } from "~/trpc/react";
import Navbar from "./_components/layout/Navbar";
import Footer from "./_components/layout/Footer";
import { LayoutProvider } from "~/app/providers/LayoutContext";

export const metadata: Metadata = {
	title: "6Pack | Avionics for pilots and cats",
	description: "Open-source portable flight instrument suite powered by Arduino, React-Native and love for flying.",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${GeistSans.variable} overflow-x-clip`}>
			<body>
				<Navbar />
				<TRPCReactProvider>
					<LayoutProvider>{children}</LayoutProvider>
				</TRPCReactProvider>
				<Footer />
			</body>
		</html>
	);
}