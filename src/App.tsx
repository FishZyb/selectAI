import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SceneDetail from './pages/SceneDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/scene/:sceneId" element={<SceneDetail />} />
    </Routes>
  )
}

export default App
