import styledComponents from "styled-components";

export const Overlay = styledComponents.div`
    background: #F7F7F7;
    opacity: 0.4;
    width: 100vw; 
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed; 
    overflow-y: scroll;         
`; 

export const ModalContent = styledComponents.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: #f1f1f1;
    padding: 14px 28px;
    border-radius: 3px;
    max-width: 400px;
    min-width: 180px; 
    max-height: calc(100vh - 2rem);
    overflow-y: auto;
    font-size: 22px;
`;

export const CloseModal = styledComponents.a`
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
`;

export const FormBody = styledComponents.form`
align-items: center;
Justify-content: center;
   
`;

export const Inputs = styledComponents.input`
    display: flex;
    flex-direction: row;
    Justify-content: center;
    width: 100%;
    margin-bottom: 15px;

    ${props => props.estilo === 'BtnSignIn' && `
        cursor: pointer;   
        color: #D93333;
        margin: 0;
    `}

`;

export const Error = styledComponents.p`
    color: red;
    margin-block:0; 
`