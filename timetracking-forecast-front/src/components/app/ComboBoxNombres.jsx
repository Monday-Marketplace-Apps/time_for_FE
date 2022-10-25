import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function ComboBoxNombres(props) {
    const {listaNombres, setPersonName, setNombre, nombre} = props
    
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            value={nombre}
            onChange={(event, value) => {setNombre(value);setPersonName(Object.values(value))}}
            options={listaNombres}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="NOMBRE" />}
        />
    );
}