import { CopyButton } from './CopyButton'

export const Hero = () => {
  return (
    <header className="bg-gradient-to-b from-slate-50 to-slate-100 py-16 border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 px-6">
        {/* Left Section */}
        <div className="text-center md:text-left md:w-1/2 flex flex-col justify-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Sala-UI
          </h1>
          <p className="text-slate-600 mt-6 leading-relaxed text-lg">
            Sala-UI is a library of Tailwind CSS components designed to simplify UI development. With a wide range of predefined and customizable components, Sala-UI enables you to create beautiful and responsive designs quickly and efficiently. Each component is meticulously crafted to ensure not only an elegant appearance but also optimal functionality, allowing you to focus on your application's logic rather than the stylistic details.
          </p>
        </div>

        {/* Right Section */}
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
            installed. You can easily add Tailwind CSS to your project using either <b>npm</b> or <b>yarn</b>. Use the following commands:
          </p>
          <div className="mt-6 space-y-4">
            <div className="bg-slate-900 p-4 rounded-xl flex justify-between items-center group transition duration-300 hover:bg-slate-800">
              <code className="text-slate-200 font-mono text-sm">npm install -D tailwindcss</code>
              <CopyButton text="npm install -D tailwindcss" />
            </div>
            <div className="bg-slate-900 p-4 rounded-xl flex justify-between items-center group transition duration-300 hover:bg-slate-800">
              <code className="text-slate-200 font-mono text-sm">yarn add -D tailwindcss</code>
              <CopyButton text="yarn add -D tailwindcss" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
