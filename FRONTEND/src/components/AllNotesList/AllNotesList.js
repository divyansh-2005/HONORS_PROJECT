import React, { useState, useEffect } from 'react';
import './AllNotesList.css'; 

const AllNotesList = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchAllNotes = async () => {
            try {
                const response = await fetch('http://localhost:5000/note/all');
                if (!response.ok) {
                    throw new Error('Failed to fetch notes');
                }
                const data = await response.json();
                setNotes(data);
            } catch (error) {
                console.error('Error fetching all notes:', error);
            }
        };

        fetchAllNotes();
    }, []);

    return (
        <div>
            <h2>All Notes</h2>
            <div>
                {notes.slice().reverse().map(note => (
                    <div key={note._id} className="note-container">
                        <h3>{note.title}</h3>
                        <p>{note.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllNotesList;
