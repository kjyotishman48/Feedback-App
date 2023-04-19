import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header"
import FeebackItem from "./components/FeedbackItem"
import FeedbackList from "./components/FeedbackList"
import Card from "./components/shared/Card"
import FeedbackStats from "./components/FeedbackStats"
import FeebackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {

    return (
        <FeedbackProvider>
        <Router>
            <Header/>
            <div className="container">
                <Routes>
                    <Route exact path='/' element= {
                        <>
                            <FeebackForm/>
                            <FeedbackStats/>
                            <FeedbackList/>  
                        </>
                    }>
                    </Route>
                    <Route path='/about' element={<AboutPage/>} />
                </Routes>
                <AboutIconLink/>
            </div>
        </Router>
        </FeedbackProvider>
    )
}
export default App