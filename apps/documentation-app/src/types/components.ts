import { SearchBar } from "@sala-ui/searchBar"
import { Header }  from "@sala-ui/header"
import { Button } from "@sala-ui/button"
import { Footer } from "@sala-ui/footer"
import { Form } from "@sala-ui/form"
import { Grid } from "@sala-ui/grid"

export const Components = [
    {
        name: "Button",
        children: Button,
        htmlCode: `<button class="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg text-sm font-medium transition duration-300">Button</button>`,
        jsxCode: 
`export const Button = () => {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg text-sm font-medium transition duration-300">Button</button>
  )
}

export default Button`
    },
    {
        name: "Footer",
        children: Footer,
        htmlCode: 
`<footer class="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
    <div class="container mx-auto px-6">
        <!-- Main footer content -->
        <div class="py-12 flex justify-between flex-wrap gap-12">
            <div class="min-w-[160px]">
                <h4 class="font-semibold text-sm tracking-wider uppercase mb-4 text-slate-200">
                    Home
                </h4>
                <nav class="space-y-3">
                    <a href="#" class="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-300 block">
                        About Us
                    </a>
                    <a href="#" class="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-300 block">
                        Latest News
                    </a>
                </nav>
            </div>

            <div class="min-w-[160px]">
                <h4 class="font-semibold text-sm tracking-wider uppercase mb-4 text-slate-200">
                    Services
                </h4>
                <nav class="space-y-3">
                    <a href="#" class="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-300 block">
                        Web Development
                    </a>
                    <a href="#" class="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-300 block">
                        IT Consulting
                    </a>
                </nav>
            </div>

            <div class="min-w-[160px]">
                <h4 class="font-semibold text-sm tracking-wider uppercase mb-4 text-slate-200">
                    Contact
                </h4>
                <nav class="space-y-3">
                    <a href="#" class="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-300 block">
                        Support
                    </a>
                    <a href="#" class="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-300 block">
                        Send Message
                    </a>
                </nav>
            </div>
        </div>

        <!-- Copyright section -->
        <div class="border-t border-slate-800 py-8">
            <p class="text-sm text-slate-500 text-center">
                © 2025 All rights reserved
            </p>
        </div>
    </div>
</footer>
`,
        jsxCode: 
`export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="container mx-auto px-6">
        {/* Main footer content */}
        <div className="py-12 flex justify-between flex-wrap gap-12">
          <div className="min-w-[160px]">
            <h4 className="font-semibold text-sm tracking-wider uppercase mb-4 text-slate-200">
              Home
            </h4>
            <nav className="space-y-3">
              <a 
                href="#" 
                className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-300 block"
              >
                About Us
              </a>
              <a 
                href="#" 
                className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-300 block"
              >
                Latest News
              </a>
            </nav>
          </div>

          <div className="min-w-[160px]">
            <h4 className="font-semibold text-sm tracking-wider uppercase mb-4 text-slate-200">
              Services
            </h4>
            <nav className="space-y-3">
              <a 
                href="#" 
                className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-300 block"
              >
                Web Development
              </a>
              <a 
                href="#" 
                className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-300 block"
              >
                IT Consulting
              </a>
            </nav>
          </div>

          <div className="min-w-[160px]">
            <h4 className="font-semibold text-sm tracking-wider uppercase mb-4 text-slate-200">
              Contact
            </h4>
            <nav className="space-y-3">
              <a 
                href="#" 
                className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-300 block"
              >
                Support
              </a>
              <a 
                href="#" 
                className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-300 block"
              >
                Send Message
              </a>
            </nav>
          </div>
        </div>

        {/* Copyright section */}
        <div className="border-t border-slate-800 py-8">
          <p className="text-sm text-slate-500 text-center">
            © 2025 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
`
    },
    {
        name: "Form",
        children: Form,
        htmlCode: 
`<div class="w-full max-w-md">
  <form class="bg-white shadow-lg rounded-xl px-8 pt-8 pb-10 mb-6">
    <div class="mb-6">
      <label 
        class="block text-slate-700 text-sm font-medium mb-2" 
        for="username"
      >
        Username
      </label>
      <input 
        class="appearance-none block w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-base placeholder:text-slate-400 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" 
        id="username" 
        type="text" 
        placeholder="Enter your username"
      />
    </div>
    
    <div class="mb-6">
      <label 
        class="block text-slate-700 text-sm font-medium mb-2" 
        for="password"
      >
        Password
      </label>
      <input 
        class="appearance-none block w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-base placeholder:text-slate-400 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" 
        id="password" 
        type="password" 
        placeholder="Enter your password"
      />
      <p class="mt-2 text-slate-600 text-sm">
        Password must be at least 8 characters long
      </p>
    </div>

    <div class="flex items-center justify-between mb-6">
      <label class="flex items-center gap-2 text-sm text-slate-600">
        <input 
          type="checkbox" 
          class="w-4 h-4 rounded border-slate-300 text-blue-500 focus:ring-blue-500/20 focus:ring-offset-0"
        />
        Remember me
      </label>
      <a 
        class="text-sm font-medium text-blue-500 hover:text-blue-600 transition duration-300" 
        href="#"
      >
        Forgot Password?
      </a>
    </div>

    <div class="flex flex-col gap-4">
      <button 
        class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20" 
        type="submit"
      >
        Sign In
      </button>
      
      <p class="text-center text-sm text-slate-600">
        Don't have an account? 
        <a 
          href="#" 
          class="font-medium text-blue-500 hover:text-blue-600 transition duration-300"
        >
          Sign up
        </a>
      </p>
    </div>
  </form>

  <p class="text-center text-slate-500 text-sm">
    © 2025 Your Company. All rights reserved.
  </p>
</div>`,
        jsxCode: 
`export const Form = () => {
  return (
    <div className="w-full max-w-md">
      <form className="bg-white shadow-lg rounded-xl px-8 pt-8 pb-10 mb-6">
        <div className="mb-6">
          <label 
            className="block text-slate-700 text-sm font-medium mb-2" 
            htmlFor="username"
          >
            Username
          </label>
          <input 
            className="appearance-none block w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 
            text-slate-900 text-base placeholder:text-slate-400
            transition duration-300 ease-in-out
            focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" 
            id="username" 
            type="text" 
            placeholder="Enter your username"
          />
        </div>
        
        <div className="mb-6">
          <label 
            className="block text-slate-700 text-sm font-medium mb-2" 
            htmlFor="password"
          >
            Password
          </label>
          <input 
            className="appearance-none block w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 
            text-slate-900 text-base placeholder:text-slate-400
            transition duration-300 ease-in-out
            focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" 
            id="password" 
            type="password" 
            placeholder="Enter your password"
          />
          <p className="mt-2 text-slate-600 text-sm">
            Password must be at least 8 characters long
          </p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input 
              type="checkbox" 
              className="w-4 h-4 rounded border-slate-300 text-blue-500 
              focus:ring-blue-500/20 focus:ring-offset-0"
            />
            Remember me
          </label>
          <a 
            className="text-sm font-medium text-blue-500 hover:text-blue-600 
            transition duration-300" 
            href="#"
          >
            Forgot Password?
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <button 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium 
            py-3 px-4 rounded-lg transition duration-300 
            focus:outline-none focus:ring-2 focus:ring-blue-500/20" 
            type="submit"
          >
            Sign In
          </button>
          
          <p className="text-center text-sm text-slate-600">
            Don't have an account?{' '}
            <a 
              href="#" 
              className="font-medium text-blue-500 hover:text-blue-600 
              transition duration-300"
            >
              Sign up
            </a>
          </p>
        </div>
      </form>

      <p className="text-center text-slate-500 text-sm">
        © 2025 Your Company. All rights reserved.
      </p>
    </div>
  )
}

export default Form`
    },
    {
        name: "Grid",
        children: Grid,
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
  )
}

export default Grid`
    },
    {
        name: "Header",
        children: Header,
        htmlCode: 
`<nav class="bg-gradient-to-r from-slate-900 to-slate-800 text-gray-100 shadow-lg">
  <div class="container mx-auto px-4 flex justify-between items-center py-5">
    <!-- Logo -->
    <div class="text-xl font-bold tracking-tight">
      <a href="#" class="text-white hover:text-blue-400 transition duration-300">Logo</a>
    </div>

    <!-- Hamburger Menu -->
    <div class="md:hidden">
      <button class="focus:outline-none text-gray-200 hover:text-white transition duration-300">
        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Links Desktop -->
    <div class="hidden md:flex md:items-center md:space-x-8">
      <a href="#" class="font-medium px-4 py-2 rounded-lg hover:bg-slate-700 transition duration-300">Home</a>
      <a href="#" class="font-medium px-4 py-2 rounded-lg hover:bg-slate-700 transition duration-300">About</a>
      <a href="#" class="font-medium px-4 py-2 rounded-lg hover:bg-slate-700 transition duration-300">Services</a>
      <a href="#" class="font-medium px-4 py-2 rounded-lg hover:bg-slate-700 transition duration-300">Contact</a>
    </div>
  </div>

  <!-- Mobile Menu (Initially Hidden) -->
  <div class="md:hidden">
    <div class="flex flex-col items-center px-4 space-y-6 pt-4 pb-6">
      <a href="#" class="font-medium text-lg w-full text-center py-3 rounded-lg hover:bg-slate-700 transition duration-300">Home</a>
      <a href="#" class="font-medium text-lg w-full text-center py-3 rounded-lg hover:bg-slate-700 transition duration-300">About</a>
      <a href="#" class="font-medium text-lg w-full text-center py-3 rounded-lg hover:bg-slate-700 transition duration-300">Services</a>
      <a href="#" class="font-medium text-lg w-full text-center py-3 rounded-lg hover:bg-slate-700 transition duration-300">Contact</a>
    </div>
  </div>
</nav>`,
        jsxCode: 
`import { useState } from "react"

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: "Home", label: "Home", href: "#" },
    { name: "About", label: "About", href: "#" },
    { name: "Services", label: "Services", href: "#" },
    { name: "Contact", label: "Contact", href: "#" }
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-800 text-gray-100 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center py-5">
        {/* Logo */}
        <div className="text-xl font-bold tracking-tight">
          <a
            href="#"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            Logo
          </a>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-gray-200 hover:text-white transition duration-300"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Links Desktop */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {links.map(({ name, label, href }) => (
            <a
              key={name}
              href={href}
              className="font-medium px-4 py-2 rounded-lg hover:bg-slate-700 transition duration-300"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center px-4 space-y-6 pt-4 pb-6">
            {links.map(({ name, label }) => (
              <a
                key={name}
                href="#"
                className="font-medium text-lg w-full text-center py-3 rounded-lg hover:bg-slate-700 transition duration-300"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Header`
    },
    {
        name: "SearchBar",
        children: SearchBar,
        htmlCode: 
`<div class="flex rounded-md border-2 border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
  <input type="text" placeholder="Search Something..." class="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3" />
  <button type="button" class="flex items-center justify-center bg-[#007bff] px-5">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" class="fill-white">
      <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
    </svg>
  </button>
</div>`,
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
  )
}`
    },
]