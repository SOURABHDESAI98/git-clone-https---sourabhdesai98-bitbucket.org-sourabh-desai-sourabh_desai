import CoreConcepts from "./components/CoreComponent/CoreConcepts";
import Header from "./components/Header/Header";
import components from './assets/components.png'
import UseRefHook from "./typescriptCodes/useRefHook";
function App() {
  return (
    <>
      <div style={{ backgroundColor: 'black' }}>
        <Header />
        <CoreConcepts title="core component" desc="this is a core components description" img={components} />
        <UseRefHook />
      </div>
      
    </>
  );
}

export default App;
