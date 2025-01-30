// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from '@sala-ui/button';
import { Header } from '@sala-ui/header';
import { ComponentContainer } from '../componenets/componentContainer';
import { Header1 } from '../componenets/Header';
import Navbar from '../componenets/Navbar';
import styles from './app.module.css';
import { Grid } from '@sala-ui/grid';
import { Components } from '../types/components';
import { Footer } from '@sala-ui/footer';
import { Form } from '@sala-ui/form';
import { SearchBar } from '@sala-ui/searchBar';

export function App() {
  return (
    <div>
      <Navbar />
      <Header1 />
      <ComponentContainer name={Components[0].name} children={<Button />} htmlCode={Components[0].htmlCode} jsxCode={Components[0].jsxCode}/>
      <ComponentContainer name={Components[1].name} children={<Footer />} htmlCode={Components[1].htmlCode} jsxCode={Components[1].jsxCode}/>
      <ComponentContainer name={Components[2].name} children={<Form />} htmlCode={Components[2].htmlCode} jsxCode={Components[2].jsxCode}/>
      <ComponentContainer name={Components[3].name} children={<Grid />} htmlCode={Components[3].htmlCode} jsxCode={Components[3].jsxCode}/>
      <ComponentContainer name={Components[4].name} children={<Header />} htmlCode={Components[4].htmlCode} jsxCode={Components[4].jsxCode}/>
      <ComponentContainer name={Components[5].name} children={<SearchBar />} htmlCode={Components[5].htmlCode} jsxCode={Components[5].jsxCode}/>
    </div>
  );
}

export default App;
