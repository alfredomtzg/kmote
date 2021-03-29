import React, { useContext } from 'react'
// Style
import "./index.css";
//Image
import logo from '../../assets/kmote_small.png'
// Material
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
// Context
import { Context } from "../../utils/Context";
// import {useStyles} from '../../material'


export const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '65ch',
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  const {search, setSearch, candidates, 
    setCandidates} = useContext(Context);

  const handleChange = (event) => {
    setValueSearch(event.target.value)
  };

  const filterCandidates = candidates.filter((candidate) => {
    return candidate.name.toLowerCase().includes(search.toLowerCase());
  });
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('submit');
  // };
  useEffect(() => {
    effect
    return () => {
      cleanup
    }
  }, [input])
  return (
    <>
    <header >
      <img src={logo} alt="Logo Kmote"/>
      <form className={classes.root} >
      <TextField 
      autoFocus
      value={search}
      onChange={handleChange}
      label="Buscar" 
      variant="outlined" />
      </form>
    </header>
      
    </>
  )
}
