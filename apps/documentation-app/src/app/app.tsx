// import { ComponentContainer } from '../componenets/componentContainer';
// import { Header1 } from '../componenets/Header';
// import Navbar from '../componenets/Navbar';
// import { Components } from '../types/components';
// import React, { useState } from 'react';

// export function App() {
//   const [selectedComponent, setSelectedComponent] = useState(Components[0]); // Imposta "Button" come default

//   const handleNavbarClick = (componentName: string) => {
//     const component = Components.find(comp => comp.name === componentName);
//     if (component) {
//       setSelectedComponent(component);  // Imposta il componente selezionato
//     }
//   };

//   return (
//     <div>
//       <Navbar onNavbarClick={handleNavbarClick} />
//       <Header1 />
//       {/* Passa il componente come children */}
//       <ComponentContainer
//         name={selectedComponent.name}
//         children={selectedComponent.children ? React.createElement(selectedComponent.children) : null}
//         htmlCode={selectedComponent.htmlCode}
//         jsxCode={selectedComponent.jsxCode}
//       />
//     </div>
//   );
// }

// export default App;

import { Footer } from '@sala-ui/footer';
import { ComponentContainer } from '../componenets/componentContainer';
import { Header1 } from '../componenets/Header';
import Navbar from '../componenets/Navbar';
import { Components } from '../types/components';
import React, { useState } from 'react';

export function App() {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null); // Nessun componente selezionato inizialmente

  const handleNavbarClick = (componentName: string) => {
    if (componentName === "GetStarted") {
      setSelectedComponent(null); // Mostra Header1 e nasconde gli altri componenti
    } else {
      setSelectedComponent(componentName);
    }
  };

  const component = Components.find(comp => comp.name === selectedComponent);

  return (
    <div>
      <Navbar onNavbarClick={handleNavbarClick} />
      
      {/* Mostra Header1 se nessun altro componente è selezionato */}
      {!selectedComponent && <Header1 />}

      {/* Mostra il componentContainer se è stato selezionato un componente */}
      {selectedComponent && component && (
        <ComponentContainer
          name={component.name}
          children={component.children ? React.createElement(component.children) : null}
          htmlCode={component.htmlCode}
          jsxCode={component.jsxCode}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;


