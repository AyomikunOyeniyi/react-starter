import CoreConcept from "./components/CoreConcept";
import { CORE_CONCEPTS, EXAMPLES } from "./assets/data";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
	const [selectedTopic, setSelectedTopic] = useState();

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
				<TabButton isSelected= {selectedTopic === 'components'} onClick={() => handleClick('components')}>Components</TabButton>
				<TabButton isSelected= {selectedTopic === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
				<TabButton isSelected= {selectedTopic === 'props'} onClick={() => handleClick('props')}>Props</TabButton>
				<TabButton isSelected= {selectedTopic === 'state'} onClick={() => handleClick('state')}>State</TabButton>
			</menu>
			{!selectedTopic ? (
				<p>Please select a topic.</p>
			) : (
				<div id="tab-content">
				<h3>{EXAMPLES[selectedTopic].title}</h3>
				<p>{EXAMPLES[selectedTopic].description}</p>
				<pre>
					<code>{EXAMPLES[selectedTopic].code}</code>
				</pre>
				</div>
			)}
			</section>
		</main>
		</div>
  	);
}

export default App;
