import styledComponents from "styled-components";


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

/* ---------------------------------- RenCar Page ---------------------------------- */
export const ContainerRent = styledComponents.div`
    background-color: #ececec; 
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Avenir;
    height: auto;
    text-align: center;
    
    ${props => props.estilo ==='Profile' &&`
    align-items: flex-end;
    margin-right:30px;
    font-size: 1rem;
    `}

    ${props =>props.estilo=== 'Head' &&`
    
    `}

    ${props => props.estilo === 'RentaCars' && `
    height: auto;
    max-width: 100vw;
    text-align: center; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    `}
`;


export const Boton = styledComponents.button`
     background-color: #dddddd;
     font-size: 24px;
     border-radius: 10px;
     cursor: pointer;
     
`;