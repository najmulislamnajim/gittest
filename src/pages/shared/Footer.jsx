const Footer = () => {
  return (
    <div className="relative mt-40 text-purple-950 dark:text-cyan-100 font-bold">
      <div className="  relative z-10 bottom-0">
        <footer className="footer  px-10 py-5 ">
          <aside className="">
            <div className="flex flex-col justify-center items-center h-[100px]">
              <img src={"https://i.ibb.co/T4FSNsb/Justlogo.png"} alt="" className="h-24" />
              <p className="text-2xl font-extrabold  ">Providing reliable workflow</p>
            </div>
          </aside>
          <nav>
            <h6 className="text-2xl font-extrabold">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="text-2xl font-extrabold">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="text-2xl font-extrabold">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
        <div className="px-10">
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10 py-8">
            <h3>© 2024 Project Syncify, Inc.</h3>
            <h3>English</h3>
            <h3>Terms & Privacy</h3>
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full z-0 ">
        <svg
          id="wave"
          style={{ transform: 'rotate(0deg)', transition: '0.3s' }}
          viewBox="0 0 1440 490"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(29.615, 72.394, 80.008, 1)" offset="0%" />
              <stop stopColor="rgba(115, 233, 254, 1)" offset="100%" />
            </linearGradient>
          </defs>
          <path
            style={{ transform: 'translate(0, 0px)', opacity: 1 }}
            fill="url(#sw-gradient-0)"
            d="M0,245L30,245C60,245,120,245,180,220.5C240,196,300,147,360,122.5C420,98,480,98,540,122.5C600,147,660,196,720,187.8C780,180,840,114,900,106.2C960,98,1020,147,1080,187.8C1140,229,1200,261,1260,302.2C1320,343,1380,392,1440,375.7C1500,359,1560,278,1620,277.7C1680,278,1740,359,1800,326.7C1860,294,1920,147,1980,130.7C2040,114,2100,229,2160,285.8C2220,343,2280,343,2340,310.3C2400,278,2460,212,2520,163.3C2580,114,2640,82,2700,89.8C2760,98,2820,147,2880,212.3C2940,278,3000,359,3060,367.5C3120,376,3180,310,3240,261.3C3300,212,3360,180,3420,147C3480,114,3540,82,3600,81.7C3660,82,3720,114,3780,163.3C3840,212,3900,278,3960,326.7C4020,376,4080,408,4140,367.5C4200,327,4260,212,4290,155.2L4320,98L4320,490L4290,490C4260,490,4200,490,4140,490C4080,490,4020,490,3960,490C3900,490,3840,490,3780,490C3720,490,3660,490,3600,490C3540,490,3480,490,3420,490C3360,490,3300,490,3240,490C3180,490,3120,490,3060,490C3000,490,2940,490,2880,490C2820,490,2760,490,2700,490C2640,490,2580,490,2520,490C2460,490,2400,490,2340,490C2280,490,2220,490,2160,490C2100,490,2040,490,1980,490C1920,490,1860,490,1800,490C1740,490,1680,490,1620,490C1560,490,1500,490,1440,490C1380,490,1320,490,1260,490C1200,490,1140,490,1080,490C1020,490,960,490,900,490C840,490,780,490,720,490C660,490,600,490,540,490C480,490,420,490,360,490C300,490,240,490,180,490C120,490,60,490,30,490L0,490Z"
          />
          <defs>
            <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(210.184, 98.854, 234.829, 1)" offset="0%" />
              <stop stopColor="rgba(106.349, 0, 130.097, 1)" offset="100%" />
            </linearGradient>
          </defs>
          <path
            style={{ transform: 'translate(0, 50px)', opacity: 0.9 }}
            fill="url(#sw-gradient-1)"
            d="M0,147L30,147C60,147,120,147,180,163.3C240,180,300,212,360,228.7C420,245,480,245,540,245C600,245,660,245,720,261.3C780,278,840,310,900,310.3C960,310,1020,278,1080,277.7C1140,278,1200,310,1260,302.2C1320,294,1380,245,1440,245C1500,245,1560,294,1620,294C1680,294,1740,245,1800,228.7C1860,212,1920,229,1980,253.2C2040,278,2100,310,2160,302.2C2220,294,2280,245,2340,204.2C2400,163,2460,131,2520,138.8C2580,147,2640,196,2700,220.5C2760,245,2820,245,2880,228.7C2940,212,3000,180,3060,187.8C3120,196,3180,245,3240,236.8C3300,229,3360,163,3420,114.3C3480,65,3540,33,3600,73.5C3660,114,3720,229,3780,245C3840,261,3900,180,3960,130.7C4020,82,4080,65,4140,57.2C4200,49,4260,49,4290,49L4320,49L4320,490L4290,490C4260,490,4200,490,4140,490C4080,490,4020,490,3960,490C3900,490,3840,490,3780,490C3720,490,3660,490,3600,490C3540,490,3480,490,3420,490C3360,490,3300,490,3240,490C3180,490,3120,490,3060,490C3000,490,2940,490,2880,490C2820,490,2760,490,2700,490C2640,490,2580,490,2520,490C2460,490,2400,490,2340,490C2280,490,2220,490,2160,490C2100,490,2040,490,1980,490C1920,490,1860,490,1800,490C1740,490,1680,490,1620,490C1560,490,1500,490,1440,490C1380,490,1320,490,1260,490C1200,490,1140,490,1080,490C1020,490,960,490,900,490C840,490,780,490,720,490C660,490,600,490,540,490C480,490,420,490,360,490C300,490,240,490,180,490C120,490,60,490,30,490L0,490Z"
          />
        </svg>

      </div>
    </div>
  );
};

export default Footer;