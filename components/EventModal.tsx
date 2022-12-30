import React, { useRef, useState } from "react";
import { Button, ColorPicker, Modal } from "@mantine/core";
import dayjs from "dayjs";
import { useStyles } from "../styles/eventmodal.style";
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
  const { classes } = useStyles();
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
        classNames={{ header: classes.header }}
        onClose={() => setOpened(false)}
        centered
        overlayOpacity={0.2}
      >
        {/* Modal content */}
        <form onSubmit={submitData} className={classes.form}>
          <input
            type="text"
            name="title"
            placeholder="Add title"
            required
            ref={titleRef}
            className={classes.input}
            style={{
              gridColumnStart: "2",
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
            className={classes.input}
            style={{
              gridColumnStart: "2",
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
