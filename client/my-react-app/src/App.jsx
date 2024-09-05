import React, {useState,useEffect} from "react";
import "./App.css";
import Axios from 'axios'
function App()
{
const[rollno,setRollno]= useState("");
const[name,setStudentName]= useState("");
const[section,setSection]= useState("");
const[pass,setPromoted]= useState("");
const[credits,setCredits]= useState("");
const submitReview=()=>
{
Axios.post('http://localhost:9000/aliens',
{rollno:rollno,
name:name,
section:section,
pass:pass,
credits:credits}).then(()=>
{
alert("success");
});
};
return (
<div className="App">
<h1>CRUD Application Demo</h1>
<div className="information">
<label><b>rollno</b></label>
<input
type="Number"
rollno="rollno"
onChange={(e)=>{
setRollno(e.target.value);
}}
required/>
<label><b>Student name</b></label>
<input
type="String"
name="name"
onChange={(e)=>{
setStudentName(e.target.value);
}}
required/>
<label><b>section</b></label>
<input
type="string"
section="section"
onChange={(e)=>{
setSection(e.target.value);
}}
required/>
<label><b>pass</b></label>
<input
type="Boolean"
pass="pass"
onChange={(e)=>{
setPromoted(e.target.value);
}}
required/>
<label><b>credits</b></label>
<input
type="Number"
credits="credits"
onChange={(e)=>{
setCredits(e.target.value);
}}
required/>
<button onClick={submitReview}><b>Submit</b></button>
</div>
</div>);
}
export default App;

