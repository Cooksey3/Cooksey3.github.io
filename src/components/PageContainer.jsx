const PageContainer = ({ children }) => (
  <div className="flex flex-wrap flex-col lg:flex-row justify-center content-around w-full max-w-7xl px-16 min-h-[calc(100vh-120px)]">
    {children}
  </div>
)

export default PageContainer
