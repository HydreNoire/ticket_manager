import { SearchBar } from "components/SearchBar/SearchBar";
import s from "./style.module.css";
import { NoteList } from "containers/NoteList/NoteList";
import { useState } from "react";

export function NoteBrowse(props) {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <SearchBar
        placeholder="Search your ticket"
        onTextChange={setSearchText}
      />
      <NoteList />
    </>
  );
}
