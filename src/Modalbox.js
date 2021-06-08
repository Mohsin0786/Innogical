// import React,{useState} from 'react';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Dialog from '@material-ui/core/Dialog';
// import Slide from '@material-ui/core/Slide';
// import Select from '@material-ui/core/Select';

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(2),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding:'60px',
//     paddingTop:0
//   },
//   form: {
//     width: '130%', // Fix IE 11 issue.
//     marginTop: theme.spacing(2),
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center'
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

//  export default function SignIn({setisloggedin}) {
//   const classes = useStyles();
//   const [openSignIn,setopenSignIn] = useState(true)
//   const [age, setAge] = React.useState('');
//   const [snippetData, setsnippetData] = useState({
//     snippet_name:"",
//     language:""  
//   })
//   const handleClose = (e) => {
//     setopenSignIn(false);
//   };

//   const handleChange = (e) => {
//     // setAge(event.target.value);
//     console.log("hii",e.target.value);
//   };

//   const submitTest = ()=>{

//   }


//   return (
//     <div>
//       <Dialog
//         open={openSignIn}
//         TransitionComponent={Transition}
//         keepMounted
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-slide-title"
//         aria-describedby="alert-dialog-slide-description"
//       >
        
//               <div className={classes.paper}>
        
//         <Typography component="h1" variant="h5">
//           Sign in
//         </Typography>
//         <form className={classes.form} >
         
//             <TextField
//         id="filled-secondary"
//         label="Filled secondary"
//         variant="filled"
//         color="secondary"
//         onChange = {handleChange}
//       />
          
//    <Select
//           labelId="demo-simple-select-filled-label"
//           id="demo-simple-select-filled"
//           value={age}
//           onChange={handleChange}
//         >
         
//           <MenuItem value={10}>C++</MenuItem>
//           <MenuItem value={20}>C</MenuItem>
//           <MenuItem value={30}>Java</MenuItem>
//         </Select>

//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//             onClick={submitTest}
//           >
//             Create new Code
//           </Button>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//            cancel
//           </Button>
//         </form>
//       </div>
//       </Dialog>
//     </div>
//   );

//   }