import styledComponents from "styled-components";

export const Container= styledComponents.div`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    height: auto;
    margin: 8px;
    
`;

export const Card = styledComponents.div`
   
    background-color: #ffffffe0; 
    font-family: Avenir;
    font-weight: 300;
    font-size: 20px;
    box-sizing: border-box;
    margin: 10px;
    height: auto;
    min-width: calc(50% - 20px);  
    border-radius: 5px;

    /* resolver el tamaño cuando llegue a "x" en pantalla de ancho */
    @media (max-width: 960px) {
     width:100%;    
    }

`;

export const ImgCar = styledComponents.img`
    padding-right: 20px;
    width: 200px; 
    max-width: 100%;
    height: auto;
        
        &:hover{
            transform: translateX(1px);  
        }
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
    background-color: transparent;
    resize: initial;
    width: 95%;
    display:  ${props => props.display}

`;


export const Botones = styledComponents.button` 
    cursor: pointer; 

    ${props => props.estilo === 'BotonBook' && `
        border: none;
        color: #2A2931;
        padding: 0.7em 1em;
        font-size: 14px;
        font-weight: 500;
        width: 10em;
        border-radius: 3em;
        background: #ffffffe0;
        border: 1px solid #2A2931;
        transition: all .8s;
        box-shadow: 1px 1px 2px #cecece,
                    -4px -4px 10px #ffffff;

        &:hover {
            color: #2A2931;
            background-color: #ffffffe0;
            transition: 0.2s;
            transform: translateY(-3px);
        }

        &:disabled {
            pointer-events: none;
          }

        &:active {
            color: #666;
            box-shadow: inset 4px 4px 12px #ffffff,
            inset -4px -4px 12px #ffffff;
            transform: translateY(0px);
          }
    `}

    ${props => props.estilo === "BotonDetails" &&`
        border: none;
        color: #2A2931;
        width: auto;
        font-size: 16px;
        background: #ffffff;
       
        transition: all .3s;
      
                
            &:hover {
                transition: 0.5s;
                transition: translateY(-10px) ;
                border-bottom: 1px solid #2A2931;
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

`;
