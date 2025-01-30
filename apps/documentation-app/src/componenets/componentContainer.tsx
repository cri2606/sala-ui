import { Button } from '@sala-ui/button';
import React from 'react';

export type ComponentData = {
  name: string;
  children: React.ReactNode;
  htmlCode: string;
  jsxCode: string;
}

export const ComponentContainer = ({ name, children, htmlCode, jsxCode }: ComponentData) => {
  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
      .then(() => alert('Code copied to clipboard!'))
      .catch((err) => alert('Failed to copy text: ' + err));
  };

  return (
    <div className="bg-gray-50 p-8">
      {/* Nome del componente */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{name}</h1>

      {/* Contenitore per il componente */}
      <div className="bg-white rounded-lg p-6 mb-4">
        {children}
      </div>

      {/* Sezione per il codice */}
      <div className="flex flex-col md:flex-row justify-between gap-6 mb-4">
        {/* Finestra codice HTML */}
        <div className="bg-gray-200 p-4 rounded-lg w-full md:w-1/2">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">HTML Code</h2>
          <div className="bg-gray-100 p-2 rounded-lg flex flex-col">
            <div className="max-h-96 overflow-y-auto">
              <pre className="overflow-x-auto">
                <code className="text-sm text-gray-900 whitespace-pre">{htmlCode}</code>
              </pre>
            </div>
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded-md text-sm hover:bg-blue-600 mt-2 self-end"
              onClick={() => copyToClipboard(htmlCode)}
            >
              Copy
            </button>
          </div>
        </div>

        {/* Finestra codice JSX */}
        <div className="bg-gray-200 p-4 rounded-lg w-full md:w-1/2">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">JSX Code</h2>
          <div className="bg-gray-100 p-2 rounded-lg flex flex-col">
            <div className="max-h-96 overflow-y-auto">
              <pre className="overflow-x-auto">
                <code className="text-sm text-gray-900 whitespace-pre">{jsxCode}</code>
              </pre>
            </div>
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded-md text-sm hover:bg-blue-600 mt-2 self-end"
              onClick={() => copyToClipboard(jsxCode)}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentContainer;