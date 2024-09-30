import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TRPCReactProvider } from "~/trpc/react";
import ClientNavbar from "./ClientNavbar";

export const metadata: Metadata = {
	title: "6Pack | Avionics for pilots and cats",
	description: "Open-source portable flight instrument suite powered by Arduino, React-Native and love for flying. Currently in feline beta testing.",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${GeistSans.variable}`}>
			<body>
				<ClientNavbar />
				<TRPCReactProvider>{children}</TRPCReactProvider>
			</body>
		</html>
	);
}