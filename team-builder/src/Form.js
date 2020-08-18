import React, {useState,useEffect} from 'react';

export default function Form() {

return (
    <div>
        <h1> Team Members </h1>
        <form>
            <label>
              Your Name: <input placeholder='Bob'></input>
            </label>
        <br/>
            <label>
              Your Email: <input placeholder='Bob@gmail.com'></input>
            </label>
        <br/>
            <label>
              Choose Your Role:&nbsp;
              <select>
                <option value='your-role'>Role</option>
                <option value='backend-engineer'>Backend Engineer</option>
                <option value='frontend-engineer'>Frontend Engineer</option>
                <option value='ui-designer'>User Interface</option>
                <option value='ux-designer'>User Experience</option>
              </select>
              <br/>
              <button>Submit</button>
            </label>
        </form>
    </div>
    );
}
