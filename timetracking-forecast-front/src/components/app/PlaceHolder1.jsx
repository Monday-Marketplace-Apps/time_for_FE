// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//     PaperProps: {
//         style: {
//             maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//             width: 250,
//         },
//     },
// };

// const names = [
//     'Oliver Hansen',
//     'Van Henry',
//     'April Tucker',
//     'Ralph Hubbard',
//     'Omar Alexander',
//     'Carlos Abbott',
//     'Miriam Wagner',
//     'Bradley Wilkerson',
//     'Virginia Andrews',
//     'Kelly Snyder',
// ];

// function getStyles(name, personName, theme) {
//     return {
//         fontWeight:
//             personName.indexOf(name) === -1
//                 ? theme.typography.fontWeightRegular
//                 : theme.typography.fontWeightMedium,
//     };
// }

// export default function MultipleSelectPlaceholder1(props) {
//     const { datos, personName, setPersonName, cambiarGrafica, datosGrafico } = props
//     console.log('data en placehlder', datos)
//     const theme = useTheme();
    

//     const handleChange = (event) => {
//         const {
            
//             target: { value },
            
//         } = event;
        
//         console.log('value',value)
//         setPersonName(
//             // On autofill we get a stringified value.
//             typeof value === 'string' ? value.split(',') : value,
        
//         );
//         console.log('graf',value)
//         cambiarGrafica(value)
//     };
//     console.log('prueba acceso datos',datos[0]['columna1'])
//     const datosprueba = datos[0]['columna1']
//     return (
//         <div>
//             <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
//                 <Select
//                     multiple
//                     displayEmpty
//                     value={personName}
//                     onChange={handleChange}
//                     input={<OutlinedInput />}
//                     renderValue={(selected) => {
//                         if (selected.length === 0) {
//                             return <em>Placeholder</em>;
//                         }

//                         return selected.join(', ');
//                     }}
//                     MenuProps={MenuProps}
//                     inputProps={{ 'aria-label': 'Without label' }}
//                 >
//                     <MenuItem disabled value="">
//                         <em>Placeholder</em>
//                     </MenuItem>
//                     {datosprueba.map((dato) => (
                        
//                         <MenuItem
//                             key={Object.keys(dato)}
//                             value={Object.keys(dato)}
//                             graf={dato['horas']}
//                             style={getStyles(dato.name, personName, theme)}
                           
//                             //onClick={()=>cambiarGrafica(dato['horas'])}
//                         >{/*{console.log(dato['horas'], 'dato[horas] en menuitem placeholder1')}*/}
//                             {Object.keys(dato)}
//                             {console.log('dato en map placeholder', Object.keys(dato))}
//                         </MenuItem>
//                     ))}
                    
//                 </Select>
//             </FormControl>
//         </div>
//     );
// }