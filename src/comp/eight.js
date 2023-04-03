import React, { useState , useEffect} from 'react';

const App1 = () => {
    const [message, setMessage] = useState('Hello dear one ,learning React.....?');
 useEffect(() => {
      console.log('The hook effect is used here!!!');
 setTimeout(() => {
        setMessage("Great,Yooo! guys, ready to learn react!?? :)");
      }, 2000)
    })
    return <h1>{message}</h1>
  };
export default App1;