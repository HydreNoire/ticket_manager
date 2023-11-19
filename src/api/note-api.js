const BASE_URL = "http://localhost:3000/notes";

export class NoteAPI {

    static async create(note) {
        const response = await fetch(`${BASE_URL}`, {
            method: "POST", body: JSON.stringify({
                title: note.title,
                content: note.content,
                created_at: note.created_at
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const notes = await response.json();
        return notes;
    }

    static async fetchAll() {
        const response = await fetch(`${BASE_URL}`);
        const notes = await response.json();
        return notes;
    }

    static async fetchById(noteId) {
        const response = await fetch(`${BASE_URL}/${noteId}`);
        const notes = await response.json();
        return notes;
    }

    static async deleteById(noteId) {
        return await fetch(`${BASE_URL}/${noteId}`, { method: 'DELETE' }).data;
    }

    static async update(note) {
        const response = await fetch(`${BASE_URL}/${note.id}`, {
            method: "PATCH", body: JSON.stringify({
                title: note.title,
                content: note.content,
                created_at: note.created_at
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const updateNote = await response.json();
        return updateNote;
    }
}