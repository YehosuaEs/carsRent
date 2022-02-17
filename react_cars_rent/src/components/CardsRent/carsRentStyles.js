import styledComponents from "styled-components";

export const Container= styledComponents.div`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    height: auto;
    margin: 8px;
    
`;
export const Card = styledComponents.div`
   
    background-color: #e8e8e8; 
    font-family: Avenir;
    font-weight: 300;
    font-size: 20px;
    box-sizing: border-box;
    margin: 10px;
    height: auto;
    min-width: calc(50% - 20px); 
    border-radius: 5px;
   /*  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px; */
   box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;

    /* resolver el tamaño cuando llegue a 629 en pantalla de ancho */
    
`;

export const ImgCar = styledComponents.img`
padding-right: 20px;
    width: 200px; 
    max-width: 100%;
    height: auto;
    
`;

export const CardSectionA =styledComponents.div`



    ${props => props.estilo === 'CardSectionA_1' && `
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        box-sizing: border-box;
        width: calc(100%-10px);
        min-height: 155px;
        margin: 0 15px 0 0;
    `}

    ${props => props.estilo === 'CardSectionA_2' && `
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        box-sizing: border-box;
        width: calc(100%-10px);
    `}

    ${props => props.estilo === 'CardSectionA_3' && `

    `}
`;


export const CardSectionB = styledComponents.div`  
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    margin: 15px 0;
`;

export const Texto = styledComponents.p`
    text-align: center;
    margin: 0;
    font-size: 20px;
    font-weight: 500;

    ${props => props.estilo === 'Modelo' && `
        margin-left: 10px;
    `}
    
   ${props => props.estilo === "Price" && `
        padding-left: 30px;
   `}

`;

export const CardDescription = styledComponents.div`
    border: 3px solid #252626;
    background-color: #f5f7fa;
    resize: initial;
    display:  ${props => props.display}
`;

export const Botones = styledComponents.button` 
    cursor: pointer; 

    ${props => props.estilo === 'BotonBook' && `
        border: none;
        color: #090909;
        padding: 0.7em 1em;
        font-size: 18px;
        font-weight: 500;
        border-radius: 0.5em;
        background: #e8e8e8;
        border: 1px solid #e8e8e8;
        transition: all .8s;
        box-shadow: 6px 6px 12px #c5c5c5,
                    -6px -6px 12px #ffffff;

        &:hover {
         
        }

        &:disabled {
            pointer-events: none;
          }

        &:active {
            color: #666;
            box-shadow: inset 4px 4px 12px #c5c5c5,
            inset -4px -4px 12px #ffffff;
          }
    `}

    ${props => props.estilo === "BotonDetails" &&`
        border: none;
        color: #090909;
        padding: 0.3em 1.7em;
        font-size: 16px;
        border-radius: 0.5em;
        background: #e8e8e8;
        border: 2px solid #e8e8e8;
        transition: all .3s;
        box-shadow: 4px 4px 10px #c5c5c5,
                    -4px -4px 10px #ffffff;

            &:disabled {
                pointer-events: none;
                }
    
            &:active {
                color: #666;
                box-shadow: inset 4px 4px 12px #c5c5c5,
                inset -4px -4px 12px #ffffff;
                }
    `}

`;
