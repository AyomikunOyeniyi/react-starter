import { CORE_CONCEPTS } from "../assets/data";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((concept) => (<CoreConcept key={concept.title}{...concept}></CoreConcept>))} 
            </ul>
        </section>
    )
}