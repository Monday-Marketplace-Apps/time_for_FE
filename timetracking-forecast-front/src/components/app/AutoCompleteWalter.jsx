import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox(props) {

    const { elements, onChange, selectedElement, label, width } = props;

    // Aunque el siguiente codigo parece ambiguo, no se resetea al componente
    // sin el, pues no parece tomar el valor "null" desde la pagina que invoque el valor
    let validatorNull = null


    if (selectedElement != null) {
        validatorNull = selectedElement
    }

    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            disableClearable
            options={elements}
            getOptionLabel={(option) => option.name}
            autoSelect={true}
            value={validatorNull ? validatorNull : { id: -1, name: '' }}
            onChange={onChange}
            sx={{ width: width }}
            renderInput={(params) => <TextField {...params} label={label} />}
        />
    );
}