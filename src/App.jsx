import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ContentCard from './components/ContentCard.jsx'

function App() {
  return (
    <HashRouter>
      {/* Every route reuses the same component with different data. */}
      <Routes>
        <Route
          path="/"
          element={
            <ContentCard
              title="Greetings"
              content="Hello, React!"
            />
          }
        />
        <Route
          path="/profiles"
          element={
            <ContentCard
              title="Profiles"
              content="CSX4107 Web Development Student"
            />
          }
        />
        <Route
          path="/my-hobbies"
          element={
            <ContentCard
              title="My Hobbies"
              content="Coding, watching movies, and listening to music"
            />
          }
        />
      </Routes>
    </HashRouter>
  )
}

export default App
