import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Button } from '@mui/material';


export default function ComboBoxColumna(props) {
    const { listaColumna, setColumna, setNombreColumna, nombreColumna, setIndicesColumnas, setPersonName } = props
    console.log('nombreColumna index', nombreColumna)

    return (
        <>
            {/* <Button onClick={() => { console.log('boton nombreColumna', nombreColumna) }}> nombre nombreColumna</Button>
            <Button onClick={() => { console.log('boton columna', columna, 'index',indicesColumnas) }}> nombre columna</Button> */}
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            value={nombreColumna}
                onChange={(event, value) => { setNombreColumna(value); setColumna([value['label']]); setIndicesColumnas([value['index']]); setPersonName(null)  }}
            options={listaColumna}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Columna" />}
        />
        </>
    );
}