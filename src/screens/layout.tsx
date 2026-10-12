import type { ReactNode } from "react";
import { Header } from "../components/elements/header/header";
import { Footer } from "../components/elements/footer/footer";

export function Layout({children}: {children: ReactNode}) {
	
	return (
		<>
			<Header/>
			{children}
			<Footer/>
		</>
	)
}