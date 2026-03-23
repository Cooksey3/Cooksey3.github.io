import Layout from "../components/Layout"
import PageContainer from "../components/PageContainer"

const SkillGroup = ({ label, skills }) => (
  <div className="flex flex-col gap-2">
    <span className="font-poppins font-semibold text-gray-700 text-sm uppercase tracking-wider">
      {label}
    </span>
    <div className="flex flex-wrap flex-col gap-2">
      {skills.map(({ name, href }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 bg-gray-900 text-gray-300 text-sm rounded-full border border-gray-700 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-colors duration-200 no-underline text-center"
        >
          {name}
        </a>
      ))}
    </div>
  </div>
)

const Home = () => (
  <Layout
    title="Chris Cooksey"
    navLinks={[{ to: "/projects", label: "Projects" }]}
  >
    <PageContainer>
      <div className="flex flex-wrap justify-center w-full gap-24">
        <section className="flex justify-center items-center">
          <img
            src="/resources/adirondacks.jpg"
            alt="Chris Cooksey in the Adirondacks"
            className="max-w-[27rem] max-h-72 shadow-xl rounded-lg"
          />
        </section>

        <section className="flex justify-center gap-4">
          <SkillGroup
            label="Frontend"
            skills={[
              { name: 'React', href: 'https://react.dev' },
              { name: 'Typescript', href: 'https://www.typescriptlang.org' },
              { name: 'Tailwind', href: 'https://tailwindcss.com' },
              { name: 'SWR', href: 'https://swr.vercel.app' },
              { name: 'Formik', href: 'https://formik.org' },
              { name: 'CSS5', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
            ]}
          />
          <SkillGroup
            label="Back end"
            skills={[
              { name: 'Ruby/Rails', href: 'https://rubyonrails.org' },
              { name: 'Java', href: 'https://www.java.com' },
              { name: 'Spring', href: 'https://spring.io' },
              { name: 'SQL', href: 'https://www.postgresql.org' },
            ]}
          />
          <SkillGroup
            label="Other"
            skills={[
              { name: 'Prompt Engineering', href: 'https://www.promptingguide.ai' },
              { name: 'Communication', href: 'https://hbr.org/topic/subject/communication' },
              { name: 'Leadership', href: 'https://hbr.org/topic/subject/leadership' },
              { name: 'Presentation', href: 'https://www.ted.com/talks' },
              { name: 'Management', href: 'https://hbr.org/topic/subject/managing-people' },
            ]}
          />
          <SkillGroup
            label="Concepts & Methods"
            skills={[
              { name: 'TDD', href: 'https://martinfowler.com/bliki/TestDrivenDevelopment.html' },
              { name: 'OOP', href: 'https://en.wikipedia.org/wiki/Object-oriented_programming' },
            ]}
          />
        </section>
      </div>
    </PageContainer>
  </Layout>
)

export default Home
