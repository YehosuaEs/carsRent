import { createGlobalStyle } from "styled-components";
import Avenir from "../fonts/Avenir-Roman.otf"


const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'AvenirRoman';
  src: Local('AvenirRoman'), Local ('Avenir'),
  url(${Avenir}) format('otf'),

}
`;

export default FontStyles;


/* Go to index.js to import the FontStyles  */