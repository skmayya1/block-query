import Dashboard from "./Components/Dashboard"
import Input from "./Components/Input"
import Navbar from "./Components/Navbar"

const App = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-between">
      <Navbar />
      <Dashboard />
      <Input/>
    </div>
  )
}

export default App