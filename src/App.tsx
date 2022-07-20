import './App.scss'
import Sidebar from './components/sidebar/Sidebar'
import Post from './components/timeline/Post'
import Timeline from './components/timeline/Timeline'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Timeline />
      <Post />
    </div>
  )
}

export default App
