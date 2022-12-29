import React, { useRef, useState } from "react";
import { Button, ColorPicker, Modal } from "@mantine/core";
import dayjs from "dayjs";
interface Note {
  title: string;
  content: string;
  date: String;
  label: string;
}

// rethink the use of colorpicker
// problem with font visiblity
// maaaaaaaaaaaaaaan

function EventModal({ date }) {
  const [opened, setOpened] = useState<boolean>(false);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  //  now, why this one is using usestate?
  // when you click one of swatches
  // you need to update component
  const [label, setLabel] = useState("#750ec9");

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    // console.log(new Date (dayjs(date).format(`YYYY-MM-DD`)))
    try {
      const note: Note = {
        title: titleRef.current.value,
        content: contentRef.current.value,
        date: dayjs(date).format(`YYYY-MM-DD`),
        label,
      };
      await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note),
      });
      setOpened(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered="true"
        overlayOpacity={0.2}
        styles={{
          header: {
            height: 0,
            margin: 0,
          },
        }}
      >
        {/* Modal content */}
        <form
          onSubmit={submitData}
          style={{
            display: "grid",
            gridTemplateColumns: "40px auto",
            gridTemplateRows: "50px 50px 50px auto ",
          }}
        >
          <input
            type="text"
            name="title"
            placeholder="Add title"
            required
            ref={titleRef}
            style={{
              gridColumnStart: "2",
              paddingBottom: "0.5rem",
              paddingTop: "0.75rem",
              color: "#4B5563",
              width: "100%",
              borderWidth: "0",
              borderBottomWidth: "2px",
              borderColor: "#E5E7EB",
              outline: "none",
            }}
          />
          <span style={{ gridColumnStart: "1" }}>Clock</span>
          <span style={{ gridColumnStart: "2" }}>
            {dayjs(date).format("dddd, MMMM DD")}
          </span>
          <span> BB</span>{" "}
          <input
            type="text"
            name="content"
            placeholder="Add a content"
            ref={contentRef}
            required
            style={{
              gridColumnStart: "2",
              paddingBottom: "0.5rem",
              paddingTop: "0.75rem",
              color: "#4B5563",
              width: "100%",
              borderWidth: "0",
              borderBottomWidth: "2px",
              borderColor: "#E5E7EB",
              outline: "none",
            }}
          />
          <ColorPicker
            format="hex"
            size="xs"
            value={label}
            onChange={(e) => {
              setLabel(e);
            }}
            swatches={[
              "#25262b",
              "#868e96",
              "#fa5252",
              "#e64980",
              "#be4bdb",
              "#7950f2",
              "#4c6ef5",
              "#228be6",
              "#15aabf",
              "#12b886",
              "#40c057",
              "#82c91e",
              "#fab005",
              "#fd7e14",
            ]}
          />
          <input
            style={{
              gridRowStart: -1,
              gridColumnStart: 1,
              gridColumnEnd: -1,
            }}
            type="submit"
            value="Save"
          />
        </form>
      </Modal>

      <div>
        <Button variant="outline" onClick={() => setOpened(true)}>
          Create
        </Button>
      </div>
    </>
  );
}

export default EventModal;
