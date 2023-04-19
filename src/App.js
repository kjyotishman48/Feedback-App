import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useState } from "react"
import Header from "./components/Header"
import FeebackItem from "./components/FeedbackItem"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import Card from "./components/shared/Card"
import FeedbackStats from "./components/FeedbackStats"
import FeebackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    } 

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter( (item) => item.id !== id))
        }
    }

    return (
        <FeedbackProvider>
        <Router>
            <Header/>
            <div className="container">
                <Routes>
                    <Route exact path='/' element= {
                        <>
                            <FeebackForm handleAdd={addFeedback}/>
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList 
                            feedback={feedback}
                            handleDelete={deleteFeedback}
                            />  
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