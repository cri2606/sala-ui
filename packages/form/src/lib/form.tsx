export const Form = () => {
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

export default Form