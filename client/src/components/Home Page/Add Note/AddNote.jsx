import React from 'react'
import Navbar from '../Navbar/Navbar'
import './AddNote.css'
const AddNote = () => {
  return (
    <>
        <Navbar/>
        <div className='add-note-container'>
            <form>
                <label htmlFor="title">
                    <h4>Title</h4>
                    <input type="text" id='title'/>
                </label>
                <label htmlFor="desc">
                    <h4>Description</h4>
                    <textarea id="desc" cols="30" rows="10"></textarea>
                </label>
                <button className='add-note-btn'>Submit</button>
            </form>

        </div>
    </>
  )
}

export default AddNote