import Hero from "../components/Hero";
import LatestRepors from "../components/LatestRepors";
import Process from "../components/Process";
import Search from "../components/Search";

const HomePage = () => {
	return (
		<>
			<Hero />
			<Search />
			<LatestRepors />
			<Process />
		</>
	);
};

export default HomePage;
