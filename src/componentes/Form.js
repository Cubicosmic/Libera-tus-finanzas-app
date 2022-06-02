import React from 'react'

export const Form = ({
    setICinco,
    setIDiez,
    setIsGraph,
    setRangoAnual
}) => {

    const calcular = (e) => {
        e.preventDefault();
        const edadActual = e.target.edadActual.value;
        const edadRetiro = e.target.edadRetiro.value;
        const aportacionAnual = e.target.aportacionAnual.value;
        var iiCinco = aportacionAnual;
        var iiDiez = aportacionAnual;
        const nuevoICinco = [];
        const nuevoIDiez = [];
        const nuevoRangoAnual = [];
        for (let i = edadActual; i < edadRetiro; i++) {
            nuevoRangoAnual.push(i*1);
            if(iiCinco===aportacionAnual){
                iiCinco = (iiCinco/100*5) + iiCinco*1;
                iiDiez = (iiDiez/100*10) + iiDiez*1;
            } else {
                iiCinco = (iiCinco/100*5) + 100 + iiCinco*1;
                iiDiez = (iiDiez/100*10) + 100 + iiDiez*1;
            }
            nuevoICinco.push(iiCinco);
            nuevoIDiez.push(iiDiez);

        }
        setRangoAnual(nuevoRangoAnual);
        setICinco(nuevoICinco);
        setIDiez(nuevoIDiez);
        setIsGraph(true);
    }

    return (
        <form onSubmit={calcular}>
            <label htmlFor='edadActual'>Edad Actual</label>
            <input type='number' id='edadActual'></input>
            <label htmlFor='edadRetiro'>Edad de retiro</label>
            <input type='number' id='edadRetiro'></input>
            <label htmlFor='aportacionAnual'>Aportación Anual</label>
            <input type='number' id='aportacionAnual'></input>
            <button type='submit'>Calcular</button>
        </form>
    )
}
