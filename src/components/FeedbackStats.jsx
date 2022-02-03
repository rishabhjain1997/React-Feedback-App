import React from "react"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"
const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext)
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / feedback.length

  average = average.toFixed(1).replace(/[.,]0$/, "")
  //console.log(feedback)
  return (
    <div className="feedback-stats">
      <h4>
        {feedback.length} Review{feedback.length > 1 && `s`}
      </h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats
