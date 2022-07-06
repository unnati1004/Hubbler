import React, { useState } from "react";
import "../styles/Form.css";
import InputLabel from "@mui/material/InputLabel";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export const Form = ({but}) => {
  const [newdata, setNewdata] = useState([{ row: "" }]);
  const [newaction, setNewaction] = useState([{ action: "" }]);
  
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
      border: "1px solid #ced4da",
      fontSize: 16,
      width: "auto",
      padding: "10px 12px",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));

  const handlerow = () => {
    setNewdata([...newdata, { row: "" }]);
  };

  const handleremove = (i) => {
    let list = [...newdata];
    list.splice(i, 1);
    setNewdata(list);
  };

  const handleaction = () => {
    setNewaction([...newaction, { action: "" }]);
  };
  const removeaction = (i) => {
    let list = [...newaction];
    list.splice(i, 1);
    setNewaction(list);
  };

  const handlechange=(e)=>{
    const {value} = e.target;
    console.log(value);
    
  }
  return (
    <div className="form">
      <h2>Default Rule</h2>
      <InputLabel shrink htmlFor="bootstrap-input">
       Button-Name
      </InputLabel>
      <BootstrapInput defaultValue="Button-Name" id="bootstrap-input" onChange={handlechange} />
      <div className="all">
        <select name="" id="">
          <option value="">All</option>
        </select>
        <span>
          <p>of the following conditions are met:</p>
        </span>
      </div>
      <label htmlFor="type"></label>
      {newdata.map((e, i) => {
        return (
          <div id="row" key={i}>
            <select name="type" id="">
              <option value="">Text</option>
            </select>
            <select name="contain" id="">
              <option value="">Contains</option>
            </select>
            <span
              onClick={() => {
                handleremove(i);
              }}
            >
              <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </span>
          </div>
        );
      })}

      <div>
        {but?<button disabled={newdata.length === 8} onClick={handlerow}>
          Add New Condition
        </button>:""}
      </div>
      <br />
      <p>Perform the following action:</p>
      {newaction.map((e, i) => {
        return (
          <div key={i}>
            <input type="text" placeholder="Start New App" />{" "}
            <span
              onClick={() => {
                removeaction(i);
              }}
            >
              <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </span>
          </div>
        );
      })}
      <br />
      <div>
        {but?
        <button onClick={handleaction}>Add another action</button>:""
        }
      </div>
    </div>
  );
};
