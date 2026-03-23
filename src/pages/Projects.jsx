import Layout from '../components/Layout'
import PageContainer from '../components/PageContainer'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    name: 'Garden App',
    image: '/resources/garden.png',
    description:
      'Full-stack garden-planning app for beginners. Created using Spring, Java, CSS, Flexbox/Grid, Pair Programming, Scrum, agile, and JavaScript',
    link: 'https://github.com/Cooksey3/watch-your-garden-grow',
  },
  {
    name: 'Book Reviews',
    image: '/resources/books.jpg',
    description:
      'Full stack, book review site. Search books based on genre. Created using Spring MVC, Java, CSS, Flex',
    link: 'https://github.com/Cooksey3/full-stack-reviews',
  },
  {
    name: 'Virtual Pets',
    image: '/resources/virtualpets.jpg',
    description:
      'Simulated virtual pet shelter, allowing the user to care for pets through console interaction. Created using Java, TDD, pair programming',
    link: 'https://github.com/Cooksey3/virtual-pets-amok',
  },
  {
    name: 'Course Catalogue',
    image: '/resources/catalogue.jpg',
    description: 'Sample course catalogue. Created using Spring MVC, Java, TDD',
    link: 'https://github.com/Cooksey3/courses',
  },
]

const Projects = () => (
  <Layout title="Projects" navLinks={[{ to: '/', label: 'Home' }]}>
    <PageContainer>
      <section className="flex flex-wrap w-full items-center gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.link} {...project} />
        ))}
      </section>
    </PageContainer>
  </Layout>
)

export default Projects
