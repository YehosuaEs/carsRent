import styledComponents, {keyframes}  from "styled-components";

export const Bloque = styledComponents.div`
background-color: #161616 ;
width: auto;
background-color: transparent;
height: 100vh;
`;
 
export const Lista = styledComponents.p`
    color: #949494;
    font-size: 20px;
    max-width: 80%;
    margin-left: 2%;
    text-transform: uppercase;
    font-size: 1.2rem;
    color: #2a2931;
    font-weight: 500;
    margin: auto;
    padding-top: 20px;
`;


const rotate360 = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

export const Loading = styledComponents.div`
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);
    border-top: 4px solid #FF8269;
    border-right: 4px solid #3574b7;
    border-bottom: 4px solid #2bb9ac;
    border-left: 5px solid #feeb49;
    background: transparent;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin: auto;
    margin-top: 300px;
`;
