import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { Button } from '@mui/material';

export default function SelectLabels2(props) {
    const { datos, personName, setPersonName, cambiarGrafica, datosGrafico, nombre } = props

    const [nombreselect, setNombreSelect] = useState('')
    console.log('boton', nombreselect)

    
    const handleChange = (event) => {
        
        setNombreSelect(event.target.value[0])
        setPersonName(event.target.value)
        cambiarGrafica(event.target.value)
        console.log('event.target.value', event.target.value)
        console.log('personName', personName)
    };
    
    const datosprueba = datos[0]['columna1']
    return (
        <>
        {datosprueba.map((dato)=>(
            console.log('COnsole dato solo',dato)
        ))}
            <Button onClick={() => { console.log('boton nombreselect', nombreselect) }}>A ver q sale en nombreselect</Button>
            
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
                    value={nombreselect[0]}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
            >
                <MenuItem value={''}>
                    <em>None</em>
                </MenuItem>
                
                {/* <MenuItem value={30}>Thirty</MenuItem> */}

                {datosprueba.map((dato) => (
                //     <>
                //     <MenuItem value="">
                //     <em>None</em>
                // </MenuItem>
                
                    <MenuItem  value={Object.keys(dato)}>
                            {Object.keys(dato)}
                        </MenuItem>
                    // </>


                    // <MenuItem
                    //     key={Object.keys(dato)}
                    //     value={Object.keys(dato)}
                    //     graf={dato['horas']}
                    //     style={getStyles(dato.name, personName, theme)}

                    // //onClick={()=>cambiarGrafica(dato['horas'])}
                    // >{/*{console.log(dato['horas'], 'dato[horas] en menuitem placeholder1')}*/}
                    //     {Object.keys(dato)}
                    //     {console.log('dato en map placeholder', Object.keys(dato))}
                    // </MenuItem>
                ))}



            </Select>
            <FormHelperText>Columna 2</FormHelperText>
        </FormControl>
        </>




    );
}
