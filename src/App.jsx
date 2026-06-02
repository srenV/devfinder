
import Footer from './layout/Footer'
import './App.css'
import FinderForm from './components/FinderForm'

function App() {
  return (
    
    <>
      <div className="dark:bg-gray-900 bg-gray-200 min-h-screen min-w-svw flex justify-center items-center transition-colors">
        <FinderForm />
      </div>
      <Footer />
    </>
  )
}

export default App
