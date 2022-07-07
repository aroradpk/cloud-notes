
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
          "_id": "62c4b1186b9c5d1c3e9f0baa",
          "user": "62c2d741050c47e256d9e7e7",
          "title": "My Title2",
          "description": "Please wake up early2",
          "tag": "personal",
          "date": "2022-07-05T21:46:00.359Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial)

return(
    <NoteContext.Provider value = {{notes, setNotes}}>
        {props.children}
    </NoteContext.Provider>
)
}

export default NoteState;