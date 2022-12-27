import React, { useEffect, useRef, useState } from "react";
import { Button, ColorPicker, Modal } from "@mantine/core";
import dayjs from "dayjs";
interface Note {
  title: string;
  description: string;
  label: Number;
}

function EventModal({ date }) {
  const [opened, setOpened] = useState<boolean>(false);
  const titleRef=useRef()
  const descriptionRef=useRef()
//  now, why this one is using usestate?
// when you click one of swatches
// you need to update component
   const [label,setLabel]= useState("#750ec9")

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered="true"
        overlayOpacity={0.2}
        styles={{
            header:{
                height:0,
                margin:0,
                
            }
        }}
      >
        {/* Modal content */}
        <form
        onSubmit={(e)=>{
            e.preventDefault()

            console.log(labelRef.current);
            
        }}
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
            value={titleRef.current}
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
          <span style={{ gridColumnStart: "1" }}>Clock</span>
          <span style={{ gridColumnStart: "2" }}>
            {dayjs(date).format("dddd, MMMM DD")}
          </span>
          <span> BB</span>{" "}
          <input
            type="text"
            name="description"
            placeholder="Add a description"
            value={descriptionRef.current}
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
              setLabel(e)
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
          <button
            style={{
              gridRowStart: -1,
              gridColumnStart: 1,
              gridColumnEnd: -1,
            }}
            type="submit"
          
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
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
