export const MainFooter = () => {
    return (
      <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white" id="footer">
        <div className="container mx-auto px-6">
          {/* Main footer content */}
          <div className="py-8 flex justify-between">
            <div className="ml-[8%] min-w-[180px]">
              <h4 className="font-semibold text-lg tracking-wider uppercase mb-3 text-slate-200">
                About Me
              </h4>
              <nav className="space-y-2">
                <a
                  href="../public/docs/TTF_CV_Sala_Cristian.pdf"
                  className="text-base text-slate-400 hover:text-blue-400 transition-colors duration-300 block"
                >
                  Curriculm Vitae
                </a>
                <a
                  href="https://www.linkedin.com/in/cristian-sala-8228a814a/"
                  className="text-base text-slate-400 hover:text-blue-400 transition-colors duration-300 block"
                >
                  LinkedIn
                </a>
              </nav>
            </div>
  
            <div className="mr-[8%] min-w-[180px]">
              <h4 className="font-semibold text-lg tracking-wider uppercase mb-3 text-slate-200">
                Contact
              </h4>
              <nav className="space-y-2">
                <a
                  href="https://www.instagram.com/cri_2606/"
                  className="text-base text-slate-400 hover:text-blue-400 transition-colors duration-300 block"
                >
                  Instagram
                </a>
                <a
                  href="mailto:cristiansala894@gmail.com"
                  className="text-base text-slate-400 hover:text-blue-400 transition-colors duration-300 block"
                >
                  E-mail
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
  };
  
  export default MainFooter;
  