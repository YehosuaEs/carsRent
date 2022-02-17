import styledComponents from "styled-components";

/* background-color: #fffffc;  */
export const Container = styledComponents.div`
    background-color: #9fcff6; 
    font-family: Avenir;
    font-weight: 500;
    font-size: 28px;
    height: 500px;
    

    
    ${props => props.estilo === 'Renta' && `
    background-color: #ffff;
    height: auto;
    max-width: 100vw;;
    border: solid 1px black;    

    `}

    ${props => props.estilo === 'Boton' && `
    background-color: #3542d5;
    height: auto;
    display: flex;
    flex-direction: row;
    Justify-content: center;
    padding: 50px;
    `}
`;

export const Boton = styledComponents.button`
     background-color: #dddddd;
     font-size: 24px;
     border-radius: 10px;
     cursor: pointer;
     
`;