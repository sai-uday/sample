import React from 'react'

export default function Form() {
    const Add=()=>{
        document.getElementById("first").innerHTML="hi"
            }
  return (
  
    <div>
        <form>
           First name <input type="text" id="first"/>
           <br/>
           last name <input type="text" id="last"/>
           <br />
           <button onClick={Add}>Submit</button>

        </form>
    </div>
  )
}
