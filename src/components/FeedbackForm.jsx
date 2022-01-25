import React from "react"
import { useState } from "react/cjs/react.development"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
const FeedbackForm = ({ handleAdd }) => {
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState("")
  const [text, setText] = useState("")
  const [rating, setRating] = useState(10)
  const handleTextChange = (e) => {
    setText(e.target.value)
    if (text === "") {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== "" && text.trim().length < 10) {
      setBtnDisabled(true)
      setMessage("Text must be at least 10 characters")
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    if (text.trim().length >= 10) {
      const newFeedback = {
        text: text,
        rating: rating,
      }
      handleAdd(newFeedback)
      setText("")
      setRating(10)
    }
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>

        <RatingSelect
          select={(rating) => {
            setRating(rating)
          }}
        ></RatingSelect>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
