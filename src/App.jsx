import CoreConcept from "./components/CoreConcept";
import { CORE_CONCEPTS } from "./assets/data";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
	const [selectedTopic, setSelectedTopic] = useState('Please click a button');

	function handleClick(selectedButton) {
		setSelectedTopic(selectedButton);
	}

  	return (
		<div>
		<Header></Header>
		<main>
			<section id="core-concepts">
			<h2>Core Concepts</h2>
			<ul>
			<CoreConcept
			title = {CORE_CONCEPTS[0].title}
			description = {CORE_CONCEPTS[0].description}
			image = {CORE_CONCEPTS[0].image}
			/>
			<CoreConcept
			{...CORE_CONCEPTS[1]}
			/>
			<CoreConcept
			title = {CORE_CONCEPTS[2].title}
			description = {CORE_CONCEPTS[2].description}
			image = {CORE_CONCEPTS[2].image}
			/>
			<CoreConcept
			title = {CORE_CONCEPTS[3].title}
			description = {CORE_CONCEPTS[3].description}
			image = {CORE_CONCEPTS[3].image}
			/>
			</ul>
			</section>
			<section id="examples">
			<h2>Examples</h2>
			<menu>
				<TabButton onClick={() => handleClick('Components')}>Components</TabButton>
				<TabButton onClick={() => handleClick('JSX')}>JSX</TabButton>
				<TabButton onClick={() => handleClick('Props')}>Props</TabButton>
				<TabButton onClick={() => handleClick('State')}>State</TabButton>
			</menu>
			</section>
			
		</main>
		</div>
  	);
}

export default App;
