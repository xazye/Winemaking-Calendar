const Note = () => {
  const urlparams = useParams();

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
    navigate("/");
  };
  const deleteNote = async () => {
    await fetch(`http://localhost:3004/notes/${urlparams.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify(note),
    });
    navigate("/");
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
    navigate("/");
  };

  const handleSubmit = () => {
    if (urlparams.id !== "new" && !note.body) deleteNote();
    else if (urlparams.id !== "new") updateNote();
    else if (urlparams.id === "new" && note !== null) createNote();
    navigate("/");
  };
  return <div></div>;
};
export default Note;
