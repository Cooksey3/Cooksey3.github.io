import { useState } from 'react'

const yearsMarried = () => {
  const anniversary = new Date('2016-06-04')
  const today = new Date()
  let years = today.getFullYear() - anniversary.getFullYear()
  const hasHadAnniversary =
    today.getMonth() > anniversary.getMonth() ||
    (today.getMonth() === anniversary.getMonth() && today.getDate() >= anniversary.getDate())
  if (!hasHadAnniversary) years--
  return years
}

const YEARS_MARRIED = yearsMarried()

const Footer = () => {
  const [aboutOpen, setAboutOpen] = useState(false)

  return (
    <footer className='flex justify-center w-full bg-black h-[50px]'>
      <div className="flex justify-between items-center w-full max-w-7xl px-16 h-[50px] px-16">
        <button
          className="bg-black text-gray-300 border-none cursor-pointer rounded hover:text-[#F0F8FF] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setAboutOpen(true)}
        >
          About me
        </button>

        {aboutOpen && (
          <div
            className="fixed inset-0 bg-black/60 z-20 flex items-center justify-center cursor-pointer"
            onClick={() => setAboutOpen(false)}
          >
            <div
              className="bg-gray-900 rounded-lg p-6 max-w-lg w-full mx-4 shadow-2xl cursor-default border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-poppins font-semibold text-lg text-gray-200">About Me</h2>
                <button
                  autoFocus
                  className="w-7 h-7 flex items-center justify-center cursor-pointer rounded text-gray-400 bg-gray-700 hover:bg-gray-500 hover:text-white transition-colors duration-200 border-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onClick={() => setAboutOpen(false)}
                >
                  &times;
                </button>
              </div>
              <p className="italic text-gray-300 leading-relaxed">
                Chris is an aspiring developer who enjoys programming things that matter.
                He has been married to his wife, Amy, for {YEARS_MARRIED} years. He has a BA in psychology
                from The Ohio State University, and has been a software engineer for 8 years.
                His interests outside of work include playing soccer and basketball, cooking
                and grilling, reading, and playing board games.
              </p>
            </div>
          </div>
        )}

        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/chris-cooksey"
            className="hover:opacity-75 transition-opacity duration-200"
          >
            <i className="fab fa-linkedin text-2xl text-[#0073b1]"></i>
          </a>
          <a
            href="https://github.com/Cooksey3"
            className="hover:opacity-75 transition-opacity duration-200"
          >
            <i className="fab fa-github text-2xl text-white"></i>
          </a>
          <a
            href="mailto:chris@cookseys.org"
            className="hover:opacity-75 transition-opacity duration-200"
          >
            <i className="far fa-envelope text-2xl text-red-500"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
