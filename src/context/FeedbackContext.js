import FeedbackData from "../data/FeedbackData"
import { createContext, useState } from "react"
import { v4 as uuidv4 } from "uuid"
const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData)
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })
  // Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      setFeedback((feedback) => {
        return feedback.filter((item) => item.id !== id)
      })
    }
  }
  // set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }
  // Update feedback
  const updateFeedback = (id, updateFeedback) => {
    //console.log(id, updateFeedback)
    setFeedback((feedback) => {
      return feedback.map((item) =>
        item.id === id ? { ...item, ...updateFeedback } : item
      )
    })
  }
  // Add item to feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()

    setFeedback((feedback) => {
      return [...feedback, newFeedback]
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
