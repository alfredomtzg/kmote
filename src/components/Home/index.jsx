import React, { useContext, useEffect } from "react";
// Style
import "./index.css";
//Image
import logo from "../../assets/kmote_small.png";
// Material
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
// Context
import { Context } from "../../utils/Context";
import Card from "../Card";
// import {useStyles} from '../../material'

export const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "65ch",
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  const { search, setSearch, candidates, setCandidates } = useContext(Context);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const filterCandidates = candidates.filter((candidate) => {
    return candidate.nombre.includes(search.toLowerCase().toUpperCase());
  });

  const bringData = () => {
    var API = "https://kmote.mx/devtest/";
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setCandidates(data?.data);
        console.log(data?.data);
      });
  };
  useEffect(() => {
    bringData();
  }, []);
  return (
    <>
      <header>
        <img src={logo} alt="Logo Kmote" />
        <form className={classes.root}>
          <TextField
            autoFocus
            value={search}
            onChange={handleChange}
            label="Buscar"
            variant="outlined"
          />
        </form>
      </header>
      <main>
        {filterCandidates.map((candidate) => {
          return <Card key={candidate?.nombre} {...candidate} />;
        })}
        <button> ver mas</button>
      </main>
    </>
  );
}
