import { useState, useEffect } from "react";
import "./App.css";
import MainPage from './screens/MainPage';
import Redirect from "./components/Redirect";

function App(props) {
  const [hasCode, setCodeStatus] = useState(false);
  const [urlKey, setKey] = useState('');
  useEffect(() => {
    alert('To run application. simply comment this out (App.js line 10). and replace this http://localhost:61292/shorten with your local port where the back end is running. Main Page, line 14')
    if (window.location.pathname.indexOf('/redirect/') > -1 && hasCode === false) {
        let code = window.location.pathname.split('/');
        if(urlKey !== null && code.length > 0){
          let _key = code[code.length - 1];
          setKey(_key);
          setCodeStatus(true);
        }
    }
});
  return (
    <div>
        {hasCode === true  && urlKey.length > 0? <Redirect code={urlKey} /> :<MainPage/>}

    </div>


  );
}
export default App;

