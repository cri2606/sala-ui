import { Button } from '@sala-ui/button';
import { ReactNode, useState } from 'react';

export type ComponentData = {
  name: string;
  children: ReactNode;
  htmlCode: string;
  jsxCode: string;
}

export const ComponentContainer = ({ name, children, htmlCode, jsxCode }: ComponentData) => {
  const [copiedHtml, setCopiedHtml] = useState(false);
  const [copiedJsx, setCopiedJsx] = useState(false);

  const copyToClipboard = async (code: string, type: 'html' | 'jsx') => {
    try {
      await navigator.clipboard.writeText(code);
      if (type === 'html') {
        setCopiedHtml(true);
        setTimeout(() => setCopiedHtml(false), 2000);
      } else {
        setCopiedJsx(true);
        setTimeout(() => setCopiedJsx(false), 2000);
      }
    } catch (err) {
      alert('Failed to copy text: ' + err);
    }
  };

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
        <div className="bg-slate-800 p-6 rounded-xl w-full md:w-1/2 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-white">HTML Code</h2>
            <button
              className={`px-4 py-2 rounded-lg text-sm font-medium transition duration-300 ${
                copiedHtml 
                ? 'bg-green-500 text-white' 
                : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
              onClick={() => copyToClipboard(htmlCode, 'html')}
            >
              {copiedHtml ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className="bg-slate-900 rounded-lg">
            <div className="max-h-96 overflow-y-auto">
              <pre className="p-4 overflow-x-auto">
                <code className="text-sm text-slate-200 font-mono whitespace-pre">
                  {htmlCode}
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Finestra codice JSX */}
        <div className="bg-slate-800 p-6 rounded-xl w-full md:w-1/2 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-white">JSX Code</h2>
            <button
              className={`px-4 py-2 rounded-lg text-sm font-medium transition duration-300 ${
                copiedJsx 
                ? 'bg-green-500 text-white' 
                : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
              onClick={() => copyToClipboard(jsxCode, 'jsx')}
            >
              {copiedJsx ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className="bg-slate-900 rounded-lg">
            <div className="max-h-96 overflow-y-auto">
              <pre className="p-4 overflow-x-auto">
                <code className="text-sm text-slate-200 font-mono whitespace-pre">
                  {jsxCode}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentContainer;