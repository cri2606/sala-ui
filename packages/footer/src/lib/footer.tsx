export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white" id="footer">
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
  );
}

export default Footer;
