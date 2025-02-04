import { ComponentContainer } from '../componenets/ComponentContainer';
import { Hero } from '../componenets/Hero';
import { Navbar } from '../componenets/Navbar';
import { Components } from '../types/components';
import React, { useState } from 'react';
import MainFooter from '../componenets/MainFooter';

export function App() {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const handleNavbarClick = (componentName: string) => {
    if (componentName === "GetStarted") {
      setSelectedComponent(null);
    } else {
      setSelectedComponent(componentName);
    }
  };

  const component = Components.find(comp => comp.name === selectedComponent);

  return (
    <div>
      <Navbar onNavbarClick={handleNavbarClick} />
      
      {/* Mostra Hero se nessun altro componente è selezionato */}
      {!selectedComponent && <Hero />}

      {/* Mostra il componentContainer se è stato selezionato un componente */}
      {selectedComponent && component && (
        <ComponentContainer
          name={component.name}
          children={component.children ? React.createElement(component.children) : null}
          htmlCode={component.htmlCode}
          jsxCode={component.jsxCode}
        />
      )}
      <MainFooter />
    </div>
  );
}

export default App;


