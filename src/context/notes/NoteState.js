
import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []

  const [notes, setNotes] = useState(notesInitial)

  //Get all notes
  const getNotes = async () => {
    //API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjMmQ3NDEwNTBjNDdlMjU2ZDllN2U3In0sImlhdCI6MTY1NzAzMjAzMX0.w2su6bRnY9WvKwNPSQU9NmX3ApUz1__o6dN0Gnx3M2Q'
      }
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  }

  //Add a note
  const addNote = async (title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjMmQ3NDEwNTBjNDdlMjU2ZDllN2U3In0sImlhdCI6MTY1NzAzMjAzMX0.w2su6bRnY9WvKwNPSQU9NmX3ApUz1__o6dN0Gnx3M2Q'
      },
      body: JSON.stringify({title, description, tag})
    });

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
  const deleteNote = async (id) => {
    //API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjMmQ3NDEwNTBjNDdlMjU2ZDllN2U3In0sImlhdCI6MTY1NzAzMjAzMX0.w2su6bRnY9WvKwNPSQU9NmX3ApUz1__o6dN0Gnx3M2Q'
      }
    });
     const json= await response.json();
     console.log(json);

    console.log("Deleting the note with " + id);
    const newNotes = notes.filter((note)=> { return note._id !== id});
    setNotes(newNotes);
  }
  //Edit a note
  const editNote = async (id, title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjMmQ3NDEwNTBjNDdlMjU2ZDllN2U3In0sImlhdCI6MTY1NzAzMjAzMX0.w2su6bRnY9WvKwNPSQU9NmX3ApUz1__o6dN0Gnx3M2Q'
      },
      body: JSON.stringify({id, title, description, tag})
    });
     const json= response.json();

    //Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id){
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  }
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;