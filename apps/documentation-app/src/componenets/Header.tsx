import React from 'react';

export const Header1 = () => {
    return (
      <header className="bg-gradient-to-b from-slate-50 to-slate-100 py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 px-6">
          {/* Sezione sinistra */}
          <div className="text-center md:text-left md:w-1/2 flex flex-col justify-center">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Sala-UI
            </h1>
            <p className="text-slate-600 mt-6 leading-relaxed text-lg">
              A library of Tailwind CSS components designed to simplify UI development. With Sala-UI, you can create beautiful and responsive designs quickly, ensuring both efficiency and elegance in your workflow. This library provides pre-built, customizable components that save time and effort, allowing developers to focus on building unique and scalable user interfaces. Whether you're working on a small project or a large application, Sala-UI adapts seamlessly to meet your design needs.
            </p>
          </div>

          {/* Sezione destra */}
          <div className="md:w-1/2 flex flex-col justify-center bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <h2 className="text-2xl font-semibold text-slate-800">Get started</h2>
            <p className="text-slate-600 mt-4 leading-relaxed">
              To begin using Sala-UI, ensure you have{' '}
              <a 
                href="https://tailwindcss.com/" 
                className="text-blue-500 hover:text-blue-600 font-medium transition duration-300"
              >
                Tailwind CSS
              </a>{' '}
              installed. You can install it using the following commands with <code className="text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded">npm</code> or <code className="text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded">yarn</code>.
            </p>
            <div className="mt-6 space-y-4">
              <div className="bg-slate-900 p-4 rounded-xl flex justify-between items-center group transition duration-300 hover:bg-slate-800">
                <code className="text-slate-200 font-mono text-sm">npm install -D tailwindcss</code>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition duration-300 shadow-sm hover:shadow"
                  onClick={() => navigator.clipboard.writeText('npm install -D tailwindcss')}
                >
                  Copy
                </button>
              </div>
              <div className="bg-slate-900 p-4 rounded-xl flex justify-between items-center group transition duration-300 hover:bg-slate-800">
                <code className="text-slate-200 font-mono text-sm">yarn add -D tailwindcss</code>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition duration-300 shadow-sm hover:shadow"
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