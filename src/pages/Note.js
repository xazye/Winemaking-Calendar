import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useMantineTheme } from "@mantine/core";
const Note = () => {
  const urlparams = useParams();
  const navigate = useNavigate();
  const theme = useMantineTheme();

  const [note, setNote] = useState(null);
  useEffect(() => {
    getNote();
    window.scrollTo(0, 0);
  }, []);

  const getNote = async () => {
    if (urlparams.id === "new") return;
    let response = await fetch(`http://localhost:3004/notes/${urlparams.id}`);
    setNote(await response.json());
  };
  const updateNote = async () => {
    await fetch(`http://localhost:3004/notes/${urlparams.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...note, updated: new Date() }),
    });
    navigate("/kalendarz");
  };
  const deleteNote = async () => {
    await fetch(`http://localhost:3004/notes/${urlparams.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify(note),
    });
    navigate("/kalendarz");
  };
  const createNote = async () => {
    await fetch(`http://localhost:3004/notes/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...note,
        updated: new Date(),
        created: new Date(),
      }),
    });
    navigate("/kalendarz");
  };

  const handleSubmit = () => {
    if (urlparams.id !== "new" && !note.body) deleteNote();
    else if (urlparams.id !== "new") updateNote();
    else if (urlparams.id === "new" && note !== null) createNote();
    navigate("/kalendarz");
  };
  return (
    // redo this shit
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "22px 0",
        }}
      >
        <h1
          style={{
            color:
              theme.colorScheme === "dark"
                ? theme.colors.blue[0]
                : theme.colors.dark[5],
          }}
        >
          <button onClick={handleSubmit} />
        </h1>

        <h1
          style={{
            color:
              theme.colorScheme === "dark"
                ? theme.colors.blue[0]
                : theme.colors.dark[5],
          }}
        >
          <button onClick={deleteNote} />
        </h1>
      </div>

      <textarea
        value={note?.body}
        style={{
          fontSize: "1.2em",
          border: "none",
          width: "100%",
          resize: "none",
          height: "70ch",
          padding: "16px 12px",
          borderRadius: "6px",
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[0]
              : theme.colors.dark[5],
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[5]
              : theme.colors.blue[0],
        }}
        onChange={(event) =>
          setNote({ ...note, body: event.currentTarget.value })
        }
      ></textarea>
    </div>
  );
};
export default Note;
