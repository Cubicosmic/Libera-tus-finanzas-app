import React, { useState } from 'react'
import { Graph } from './Graph'
//estilos
import '../styles/counting.scss'
import { Form } from './Form';

export const Counting = () => {

  const [isGraph, setIsGraph] = useState(false);
  const [iCinco, setICinco] = useState([]);
  const [iDiez, setIDiez] = useState([]);
  const [rangoAnual, setRangoAnual] = useState([]);

  return (
    <React.Fragment>
      {isGraph ?
        <Graph
          iCinco={iCinco}
          iDiez={iDiez}
          rangoAnual={rangoAnual}
        />:
        <Form
          setICinco={setICinco}
          setIDiez={setIDiez}
          setRangoAnual={setRangoAnual}
          setIsGraph={setIsGraph}
        />
      }
    </React.Fragment>
  )
}
