import { useState } from "react";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from './../../hooks/useAuthContext';

export default function VehicleComments() {
    const [newNote, setNewNote] = useState('')
    const { user } = useAuthContext()

const handleSubmit = async (e) => {
    e.preventDefault()

    const noteToAdd = {
        displayName: user.displayName,
        imgAvatar: user.imgAvatar,
        content: newNote,
        createdAt: timestamp.fromDate(new Date()),
        id: Math.random()
    }
    console.log(noteToAdd)
}

    return (
        <div className="vehicle-comments" onSubmit={handleSubmit}>
            <h4>Vehicle Notes</h4>
            <form className="add-note">
                <label>
                    <span>Add a note</span>
                    <textarea
                        required
                        onChange={(e) => setNewNote(e.target.value)}
                        value={newNote}
                    ></textarea>
                </label>
                <button className="btn">Add Note</button>
            </form>
            
        </div>
    )
}
