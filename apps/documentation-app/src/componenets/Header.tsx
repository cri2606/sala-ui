import React from 'react';

export const Header1 = () => {
    return (
      <header className="bg-gray-100 p-10 border-b border-gray-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Sezione sinistra */}
          <div className="text-center md:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-900">Sala-UI</h1>
            <p className="text-gray-700 mt-4 leading-relaxed text-left">
            A library of Tailwind CSS components designed to simplify UI development. With Sala-UI, you can create beautiful and responsive designs quickly, ensuring both efficiency and elegance in your workflow. This library provides pre-built, customizable components that save time and effort, allowing developers to focus on building unique and scalable user interfaces. Whether you're working on a small project or a large application, Sala-UI adapts seamlessly to meet your design needs.
          </p>
          </div>
  
          {/* Sezione destra */}
          <div className="text-center md:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-gray-800">Get started</h2>
            <p className="text-sm text-gray-600 mt-4 leading-relaxed text-left">
              To begin using Sala-UI, ensure you have <a href="https://tailwindcss.com/" className="text-blue-500 underline">Tailwind CSS</a> installed. You can install it using the following commands with <code>npm</code> or <code>yarn</code>.
            </p>
            <div className="mt-4 text-gray-700 space-y-2">
              <div className="bg-gray-200 p-2 rounded-lg flex justify-between items-center">
                <code className="text-gray-900">npm install -D tailwindcss</code>
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded-md text-sm hover:bg-blue-600"
                  onClick={() => navigator.clipboard.writeText('npm install -D tailwindcss')}
                >
                  Copy
                </button>
              </div>
              <div className="bg-gray-200 p-2 rounded-lg flex justify-between items-center">
                <code className="text-gray-900">yarn add -D tailwindcss</code>
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded-md text-sm hover:bg-blue-600"
                  onClick={() => navigator.clipboard.writeText('yarn add -D tailwindcss')}
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header1;
  