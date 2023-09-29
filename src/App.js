import React, {useState } from 'react';
import {saveAs} from 'file-saver';

function App(){
  const [text, setText] = useState('');
  const handle = (e) => {
    setText(e.target.value);
  };
  const Download = () => {
    console.log(text);
    const blob =new Blob([text], {type: 'text/plain;charset=utf-8'});

    saveAs(blob, 'data.txt');
    setText('');
    console.log(text);
  };

  return(
    <div>
    <div>
      <textarea id="text" rows="5" cols="40" onChange={handle} placeholder = "enter text" value={text}/>
    </div>
    <div>
        <button onClick={Download}>hit me</button>
    </div>
    </div>
  )
}

export default App;


