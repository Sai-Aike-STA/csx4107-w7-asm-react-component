import {HashRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Greetings from './components/Greetings.jsx'
import MyHobbies from './components/MyHobbies.jsx'
import Profile from './components/Profile.jsx'
import About from "./components/About.jsx";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Greetings/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/my-hobbies" element={<MyHobbies/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </HashRouter>
    )
}

export default App
