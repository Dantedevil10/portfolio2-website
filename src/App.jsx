import { useEffect, useState } from 'react'
import './App.css'
import Opening from './components/opening/Opening'
import Main from './components/main/Main';

import { CSSTransition } from 'react-transition-group';

function App() {
  //Abrir o Opening e Fecha-lo
  const [open,setOpen] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 9000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div id='pd'>
      {<CSSTransition
        in={open}
        timeout={10} // duração da transição em milissegundos
        classNames="opening"
        unmountOnExit>
        <Opening />
      </CSSTransition>}
      {<CSSTransition
        in={!open}
        timeout={1000}
        classNames="main"
        unmountOnExit>
        <Main />
      </CSSTransition>}
    </div>
  )
}

export default App
