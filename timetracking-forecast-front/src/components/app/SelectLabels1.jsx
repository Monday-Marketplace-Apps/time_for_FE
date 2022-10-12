import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels1() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
       
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                autoWidth={false}
                inputProps={{ 'aria-label': 'Without label' }}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Esternocleidomastoideo Supercalifragilistico Espialidoso hkgfkfhkjhjgh</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <FormHelperText>Columna 1</FormHelperText>
        </FormControl>
            
            
    
    );
}
