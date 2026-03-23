import { useState } from 'react'

const ProjectCard = ({ name, image, description, link }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col text-center rounded-lg w-full md:w-60 bg-gray-900 text-gray-300 border border-gray-700 hover:shadow-lg hover:shadow-gray-800/50 transition-all duration-300">
      <img className="h-40 w-full object-cover rounded-t-lg" src={image} alt={name} />
      <div className="relative">
        <button
          className="w-full p-4 text-base cursor-pointer bg-gray-900 text-gray-300 border-none font-semibold hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-inset rounded-b-lg"
          onClick={() => setOpen(!open)}
        >
          Description
        </button>
        {open && (
          <p className="absolute z-10 bg-gray-900 border border-gray-700 text-gray-300 p-3 shadow-lg w-full text-sm rounded-b-lg">
            {description}{' '}
            <a
              className="text-blue-400 underline hover:text-blue-300 transition-colors duration-200"
              href={link}
            >
              More info
            </a>
          </p>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
