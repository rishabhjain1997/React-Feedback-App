import React from "react"
import { useParams } from "react-router-dom"
import {
  Navigate,
  useNavigate,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
const Post = () => {
  const params = useParams()
  const navigate = useNavigate()
  const status = 200
  if (status === 404) {
    return <Navigate to="/notfound" />
  }

  const onClick = () => {
    console.log("Button Clicked")
    navigate("/about")
  }
  return (
    <div>
      POST {params.id}
      <button onClick={onClick}>Button</button>
      <Routes>
        <Route path="/show" element={<h1>Hi</h1>} />
      </Routes>
    </div>
  )
}

export default Post
