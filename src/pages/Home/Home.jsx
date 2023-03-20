import { Navbar } from "../sharedLayout/";
import { MainLayout } from "./layout/";
import { Footer } from "../sharedLayout/";

export const Home = () => {
	return (
		<>
			<Navbar />
			<MainLayout />
			<Footer />
		</>
	)
}
