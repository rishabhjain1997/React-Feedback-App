import React from "react"
import FeedbackItem from "./FeedbackItem"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext)
  if (feedback.length === 0 || !feedback) {
    return <p>No feedback yet</p>
  }
  //console.log(feedback);
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default FeedbackList
