import Modal from "./components/modal/Modal";
import "./App.css"
import { useState } from "react"


function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button className="btn" type="button" onClick={() => setOpen(true)}>
        Open window
      </button>
      <Modal open={open} setOpen={setOpen}>
        <span>--------------------------------------------</span>
      </Modal>
    </>
  )
}

export default App
