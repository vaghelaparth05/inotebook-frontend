import NoteContext from './noteContext';
import { useState } from 'react';

const NoteState = (props) => {
    const initialNotes = [
        {
            "_id": "63f45ca7c7bba6c89f959e8d",
            "user": "63f2025b4e92e75de9ef0f8d",
            "title": "New Note",
            "description": "This is a new note",
            "tag": "General",
            "date": "2023-02-21T05:54:47.499Z",
            "__v": 0
          },
          {
            "_id": "63f45cb4c7bba6c89f959e8f",
            "user": "63f2025b4e92e75de9ef0f8d",
            "title": "New Note 2",
            "description": "This is a new note 2",
            "tag": "General",
            "date": "2023-02-21T05:55:00.736Z",
            "__v": 0
          },
          {
            "_id": "63f45ca7c7bba6c89f959e8d",
            "user": "63f2025b4e92e75de9ef0f8d",
            "title": "New Note",
            "description": "This is a new note",
            "tag": "General",
            "date": "2023-02-21T05:54:47.499Z",
            "__v": 0
          },
          {
            "_id": "63f45cb4c7bba6c89f959e8f",
            "user": "63f2025b4e92e75de9ef0f8d",
            "title": "New Note 2",
            "description": "This is a new note 2",
            "tag": "General",
            "date": "2023-02-21T05:55:00.736Z",
            "__v": 0
          },
          {
            "_id": "63f45ca7c7bba6c89f959e8d",
            "user": "63f2025b4e92e75de9ef0f8d",
            "title": "New Note",
            "description": "This is a new note",
            "tag": "General",
            "date": "2023-02-21T05:54:47.499Z",
            "__v": 0
          },
          {
            "_id": "63f45cb4c7bba6c89f959e8f",
            "user": "63f2025b4e92e75de9ef0f8d",
            "title": "New Note 2",
            "description": "This is a new note 2",
            "tag": "General",
            "date": "2023-02-21T05:55:00.736Z",
            "__v": 0
          },
          {
            "_id": "63f45ca7c7bba6c89f959e8d",
            "user": "63f2025b4e92e75de9ef0f8d",
            "title": "New Note",
            "description": "This is a new note",
            "tag": "General",
            "date": "2023-02-21T05:54:47.499Z",
            "__v": 0
          },
          {
            "_id": "63f45cb4c7bba6c89f959e8f",
            "user": "63f2025b4e92e75de9ef0f8d",
            "title": "New Note 2",
            "description": "This is a new note 2",
            "tag": "General",
            "date": "2023-02-21T05:55:00.736Z",
            "__v": 0
          },
          {
            "_id": "63f45ca7c7bba6c89f959e8d",
            "user": "63f2025b4e92e75de9ef0f8d",
            "title": "New Note",
            "description": "This is a new note",
            "tag": "General",
            "date": "2023-02-21T05:54:47.499Z",
            "__v": 0
          },
          {
            "_id": "63f45cb4c7bba6c89f959e8f",
            "user": "63f2025b4e92e75de9ef0f8d",
            "title": "New Note 2",
            "description": "This is a new note 2",
            "tag": "General",
            "date": "2023-02-21T05:55:00.736Z",
            "__v": 0
          },
          {
            "_id": "63f45ca7c7bba6c89f959e8d",
            "user": "63f2025b4e92e75de9ef0f8d",
            "title": "New Note",
            "description": "This is a new note",
            "tag": "General",
            "date": "2023-02-21T05:54:47.499Z",
            "__v": 0
          },
          {
            "_id": "63f45cb4c7bba6c89f959e8f",
            "user": "63f2025b4e92e75de9ef0f8d",
            "title": "New Note 2",
            "description": "This is a new note 2",
            "tag": "General",
            "date": "2023-02-21T05:55:00.736Z",
            "__v": 0
          },
    ];

    const [notes,setNotes] = useState(initialNotes);

    return( <NoteContext.Provider value={{notes, setNotes}}>
        {props.children}
    </NoteContext.Provider>
    )
};

export default NoteState;