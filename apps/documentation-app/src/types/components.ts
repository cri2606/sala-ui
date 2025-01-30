import React from "react";

export const Components = [
    {
        name: "Button",
        htmlCode: `<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
        `,
        jsxCode: 
`export const Button = () => { 
    return ( 
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button> 
    ); 
} 
export default Button;`
    },
    {
        name: "Footer",
        htmlCode: 
`<footer class="bg-gray-900 text-white py-4">
  <div class="container mx-auto px-4 flex justify-between">
    <div>
      <h4 class="font-bold text-sm mb-2">Home</h4>
      <nav class="space-y-1">
        <a href="#" class="text-xs text-gray-400 hover:text-white block">Chi Siamo</a>
        <a href="#" class="text-xs text-gray-400 hover:text-white block">Ultime Novità</a>
      </nav>
    </div>
    <div>
      <h4 class="font-bold text-sm mb-2">Servizi</h4>
      <nav class="space-y-1">
        <a href="#" class="text-xs text-gray-400 hover:text-white block">Sviluppo Web</a>
        <a href="#" class="text-xs text-gray-400 hover:text-white block">Consulenza IT</a>
      </nav>
    </div>
    <div>
      <h4 class="font-bold text-sm mb-2">Contatti</h4>
      <nav class="space-y-1">
        <a href="#" class="text-xs text-gray-400 hover:text-white block">Supporto</a>
        <a href="#" class="text-xs text-gray-400 hover:text-white block">Invia Messaggio</a>
      </nav>
    </div>
  </div>
  <div class="text-center mt-4">
    <p class="text-xs text-gray-400">© 2025 Tutti i diritti riservati</p>
  </div>
</footer>`,
        jsxCode: 
`export const Footer = () => {
  return (
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between">
          <div>
            <h4 className="font-bold text-sm mb-2">Home</h4>
            <nav className="space-y-1">
              <a href="#" className="text-xs text-gray-400 hover:text-white block">Chi Siamo</a>
              <a href="#" className="text-xs text-gray-400 hover:text-white block">Ultime Novità</a>
            </nav>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-2">Servizi</h4>
            <nav className="space-y-1">
              <a href="#" className="text-xs text-gray-400 hover:text-white block">Sviluppo Web</a>
              <a href="#" className="text-xs text-gray-400 hover:text-white block">Consulenza IT</a>
            </nav>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-2">Contatti</h4>
            <nav className="space-y-1">
              <a href="#" className="text-xs text-gray-400 hover:text-white block">Supporto</a>
              <a href="#" className="text-xs text-gray-400 hover:text-white block">Invia Messaggio</a>
            </nav>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-xs text-gray-400">© 2025 Tutti i diritti riservati</p>
        </div>
      </footer>
  );
}

export default Footer;`
    },
    {
        name: "Form",
        htmlCode: 
`<div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>`,
        jsxCode: 
`export const Form = () => {
  return (
<div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>
  );
}

export default Form;`
    },
    {
        name: "Grid",
        htmlCode: 
`<!-- one column -->
<div class="flex mb-4">
  <div class="w-full bg-gray-500 h-12"></div>
</div>

<!-- two columns -->
<div class="flex mb-4">
  <div class="w-1/2 bg-gray-400 h-12"></div>
  <div class="w-1/2 bg-gray-500 h-12"></div>
</div>

<!-- three columns -->
<div class="flex mb-4">
  <div class="w-1/3 bg-gray-400 h-12"></div>
  <div class="w-1/3 bg-gray-500 h-12"></div>
  <div class="w-1/3 bg-gray-400 h-12"></div>
</div>

<!-- four columns -->
<div class="flex mb-4">
  <div class="w-1/4 bg-gray-500 h-12"></div>
  <div class="w-1/4 bg-gray-400 h-12"></div>
  <div class="w-1/4 bg-gray-500 h-12"></div>
  <div class="w-1/4 bg-gray-400 h-12"></div>
</div>

<!-- five columns -->
<div class="flex mb-4">
  <div class="w-1/5 bg-gray-500 h-12"></div>
  <div class="w-1/5 bg-gray-400 h-12"></div>
  <div class="w-1/5 bg-gray-500 h-12"></div>
  <div class="w-1/5 bg-gray-400 h-12"></div>
  <div class="w-1/5 bg-gray-500 h-12"></div>
</div>

<!-- six columns -->
<div class="flex">
  <div class="w-1/6 bg-gray-400 h-12"></div>
  <div class="w-1/6 bg-gray-500 h-12"></div>
  <div class="w-1/6 bg-gray-400 h-12"></div>
  <div class="w-1/6 bg-gray-500 h-12"></div>
  <div class="w-1/6 bg-gray-400 h-12"></div>
  <div class="w-1/6 bg-gray-500 h-12"></div>
</div>`,
        jsxCode: 
`export const Grid = () => {
  return (
    <>
    {/* one column */}
    <div className="flex mb-4">
      <div className="w-full bg-gray-500 h-12"></div>
    </div>
    
    {/* two columns */}
    <div className="flex mb-4">
      <div className="w-1/2 bg-gray-400 h-12"></div>
      <div className="w-1/2 bg-gray-500 h-12"></div>
    </div>
    
    {/* three columns */}
    <div className="flex mb-4">
      <div className="w-1/3 bg-gray-400 h-12"></div>
      <div className="w-1/3 bg-gray-500 h-12"></div>
      <div className="w-1/3 bg-gray-400 h-12"></div>
    </div>
    
    {/* four columns */}
    <div className="flex mb-4">
      <div className="w-1/4 bg-gray-500 h-12"></div>
      <div className="w-1/4 bg-gray-400 h-12"></div>
      <div className="w-1/4 bg-gray-500 h-12"></div>
      <div className="w-1/4 bg-gray-400 h-12"></div>
    </div>
    
    {/* five columns */}
    <div className="flex mb-4">
      <div className="w-1/5 bg-gray-500 h-12"></div>
      <div className="w-1/5 bg-gray-400 h-12"></div>
      <div className="w-1/5 bg-gray-500 h-12"></div>
      <div className="w-1/5 bg-gray-400 h-12"></div>
      <div className="w-1/5 bg-gray-500 h-12"></div>
    </div>
    
    {/* six columns */}
    <div className="flex">
      <div className="w-1/6 bg-gray-400 h-12"></div>
      <div className="w-1/6 bg-gray-500 h-12"></div>
      <div className="w-1/6 bg-gray-400 h-12"></div>
      <div className="w-1/6 bg-gray-500 h-12"></div>
      <div className="w-1/6 bg-gray-400 h-12"></div>
      <div className="w-1/6 bg-gray-500 h-12"></div>
    </div>
    </>
  );
}

export default Grid;`
    },
    {
        name: "Header",
        htmlCode: ``,
        jsxCode: ``
    },
    {
        name: "Search Bar",
        htmlCode: 
`<div class="flex rounded-md border-2 border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
  <input type="email" placeholder="Search Something..."
    class="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3" />
  <button type="button" class="flex items-center justify-center bg-[#007bff] px-5">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" class="fill-white">
      <path
        d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
      </path>
    </svg>
  </button>
</div>
`,
        jsxCode: 
`export const SearchBar = () => {
  return (
      <div className="flex rounded-md border-2 border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
      <input type="email" placeholder="Search Something..."
        className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3" />
      <button type='button' className="flex items-center justify-center bg-[#007bff] px-5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-white">
          <path
            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
          </path>
        </svg>
      </button>
    </div>
  );
}`
    },
];