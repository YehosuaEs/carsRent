import styledComponents from "styled-components";

/* background-color: #fffffc;  */
export const Container = styledComponents.div`
    background-color: #FF8269; 
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Avenir;
    font-weight: 500;
    font-size: 28px;
    height: auto;
    text-align: center;

    
    ${props => props.estilo === 'Renta' && `
    background-color: #FFC24F;
    height: auto;
    max-width: 100vw;
    text-align: center; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
   
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