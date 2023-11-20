import s from "./style.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NoteForm } from "components/NoteForm/NoteForm";
import { useState } from "react";
import { NoteAPI } from "api/note-api";
import { deleteNote, updateNote } from "store/note/note-slice";

export function Note(props) {
  const [isEditable, setIsEditable] = useState(false);
  const { noteId } = useParams();
  const dispatch = useDispatch();
  const note = useSelector((store) =>
    store.NOTE.noteList.find((note) => note.id === Number(noteId))
  );
  const navigate = useNavigate();

  async function submit(formValues) {
    const updatedNote = await NoteAPI.update({
      ...formValues,
      id: Number(noteId),
    });
    dispatch(updateNote(updatedNote));
    setIsEditable(false);
  }

  function deleteNote_(note) {
    if (window.confirm("Supprimer la note ?")) {
      NoteAPI.deleteById(note.id);
      dispatch(deleteNote(note));
      navigate("/");
    }
  }

  return (
    <>
      {note && (
        <NoteForm
          isEditable={isEditable}
          title={isEditable ? "Edit ticket" : note.title}
          note={note}
          onClickEdit={() => setIsEditable(!isEditable)}
          onClickTrash={() => deleteNote_(note)}
          onSubmit={isEditable && submit}
        />
      )}
    </>
  );
}
