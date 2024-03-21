import CoreConcept from "./components/CoreConcept";
import { CORE_CONCEPTS } from "./assets/data";
import Header from "./components/Header";
import TabButton from "./components/TabButton";

function App() {
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
          <TabButton></TabButton>
        </section>
      </main>
    </div>
  );
}

export default App;
