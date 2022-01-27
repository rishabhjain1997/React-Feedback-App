import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom"
import Card from "./components/shared/Card"
import React from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage"
import AboutIconLink from "./components/AboutIconLink"
import Post from "./components/Post"

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      setFeedback((feedback) => {
        return feedback.filter((item) => item.id !== id)
      })
    }
  }
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()

    setFeedback((feedback) => {
      return [...feedback, newFeedback]
    })
  }
  //console.log(feedback);
  return (
    <Router>
      <Header text="Feedback UI" />
      <Card>
        <NavLink to="/" activeclassname="active">
          Home
        </NavLink>
        <NavLink to="/about" activeclassname="active">
          About
        </NavLink>
      </Card>

      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/post/:id/*" element={<Post />} />
        </Routes>

        <AboutIconLink />
      </div>
    </Router>
  )
}

export default App
