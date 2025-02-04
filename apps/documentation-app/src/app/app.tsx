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
      
      {/* Show the Hero if any component is selectes */}
      {!selectedComponent && <Hero />}

      {/* Show componentContainer if a component was selected */}
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


