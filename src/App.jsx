import CoreConcepts from "./components/CoreConcepts";
import Header from "./components/Header";
import Examples from "./components/Examples";

function App() {

  	return (
		<div>
		<Header></Header>
		<main>
			<CoreConcepts></CoreConcepts>
			<Examples></Examples>
		</main>
		</div>
  	);
}

export default App;
