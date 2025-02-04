import { ReactNode } from 'react';
import CodeWindow from './CodeWindow';

export type ComponentData = {
  name: string;
  children: ReactNode;
  htmlCode: string;
  jsxCode: string;
};

export const ComponentContainer = ({ name, children, htmlCode, jsxCode }: ComponentData) => {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-100 p-8 rounded-2xl shadow-sm">
      {/* Nome del componente */}
      <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6">
        {name}
      </h1>

      {/* Contenitore per il componente */}
      <div className="bg-white rounded-xl p-8 mb-8 shadow-sm border border-slate-200">
        {children}
      </div>

      {/* Sezione per il codice */}
      <div className="flex flex-col md:flex-row justify-between gap-8 mb-4">
        {/* Finestra codice HTML */}
        <CodeWindow title="HTML Code" code={htmlCode} />
        
        {/* Finestra codice JSX */}
        <CodeWindow title="JSX Code" code={jsxCode} />
      </div>
    </div>
  );
};

export default ComponentContainer;
