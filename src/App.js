import React, { useState } from "react";
import { Counting } from "./componentes/Counting";
import { Play } from "./componentes/Play";
import './styles/mixin.scss'

function App() {

  const [init, setInit] = useState(false);

  return (
    <main className={init ? 'counting':'play'}>
      {init ?
        <Counting/>:
        <Play setInit={setInit}/>
      }
    </main>
  );
}

export default App;
