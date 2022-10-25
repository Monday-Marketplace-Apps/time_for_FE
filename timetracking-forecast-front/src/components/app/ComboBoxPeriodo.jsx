import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Button } from '@mui/material';


export default function ComboBoxPeriodo(props) {
    const { listaPeriodo , periodo , setPeriodo , setNombrePeriodo ,nombrePeriodo } = props

    return (
        <>
            <Button onClick={() => { console.log('boton nombrePeriodo', nombrePeriodo) }}> nombre nombre periodo</Button>
            <Button onClick={() => { console.log('boton periodo', periodo) }}> nombre periodo</Button>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                value={nombrePeriodo}
                onChange={(event, value) => { setNombrePeriodo(value); setPeriodo(Object.values(value)) }}
                options={listaPeriodo}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="PERIODO" />}
            />
        </>
    );
}