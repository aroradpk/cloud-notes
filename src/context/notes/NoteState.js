
import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {

  const notesInitial = [
    {
      "_id": "62c4b1156b9c5d1c3e9f0ba8",
      "user": "62c2d741050c47e256d9e7e7",
      "title": "My Title2",
      "description": "Please wake up early2",
      "tag": "personal",
      "date": "2022-07-05T21:45:57.329Z",
      "__v": 0
    },
    {
      "_id": "62c4b1186b9c5d1c3e29f0baa",
      "user": "62c2d741050c47e256d9e7e7",
      "title": "My Title2",
      "description": "Please wake up early2",
      "tag": "personal",
      "date": "2022-07-05T21:46:00.359Z",
      "__v": 0
    },
    {
      "_id": "62c4b11861b9c65d1c3e9f0baa",
      "user": "62c2d741050c47e256d9e7e7",
      "title": "My Title2",
      "description": "Please wake up early2",
      "tag": "personal",
      "date": "2022-07-05T21:46:00.359Z",
      "__v": 0
    },
    {
      "_id": "62c4b1186b79c5d1c3e9f0baa",
      "user": "62c2d741050c47e256d9e7e7",
      "title": "My Title2",
      "description": "Please wake up early2",
      "tag": "personal",
      "date": "2022-07-05T21:46:00.359Z",
      "__v": 0
    },
    {
      "_id": "62c4b1186b9c5d1c3e89f0baa",
      "user": "62c2d741050c47e256d9e7e7",
      "title": "My Title2",
      "description": "Please wake up early2",
      "tag": "personal",
      "date": "2022-07-05T21:46:00.359Z",
      "__v": 0
    },
    {
      "_id": "62c4b1186b9c5d1c3e9f90baa",
      "user": "62c2d741050c47e256d9e7e7",
      "title": "My Title2",
      "description": "Please wake up early2",
      "tag": "personal",
      "date": "2022-07-05T21:46:00.359Z",
      "__v": 0
    },
    {
      "_id": "622c4b1186b9c5d1c3e9f0baa",
      "user": "62c2d741050c47e256d9e7e7",
      "title": "My Title2",
      "description": "Please wake up early2",
      "tag": "personal",
      "date": "2022-07-05T21:46:00.359Z",
      "__v": 0
    }
  ]

  const [notes, setNotes] = useState(notesInitial)

  //Add a note
  const addNote = (title, description, tag) => {
    //TODO: API call
    console.log("Adding a new note")
   const note = {
      "_id": "622c4b1186b9c5d1c3e9f0ba2a",
      "user": "62c2d741050c47e256d9e7e7",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2022-07-05T21:46:00.359Z",
      "__v": 0
    }
    setNotes(notes.concat(note))
  }

  //Delete a note
  const deleteNote = () => {

  }
  //Edit a note
  const editNote = () => {

  }
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;