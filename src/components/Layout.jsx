import Header from './Header'
import Footer from './Footer'

const Layout = ({ title, navLinks, children }) => (
  <div className="flex justify-center flex-wrap w-full h-[100vh] bg-[#F0F8FF] font-['Open_Sans']">
    <Header title={title} navLinks={navLinks} />
    {children}
    <Footer />
  </div>
)

export default Layout
