import styledComponents from "styled-components";

export const Overlay = styledComponents.div`
    background: #242931;
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
    padding: 2rem 2rem;
    border-radius: 1rem;
    /* max-height: calc(100vh - 2rem);
    overflow-y: auto;
    font-size: 22px; */
    background: #ffffff;
    
`;

export const CloseModal = styledComponents.a`
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: .8rem;
    padding: 5px 7px;
    font-size: 1.5rem;


`;

export const FormBody = styledComponents.form`
    align-items: center;
    Justify-content: center;
    width: 100%;
    font-size: 1.1rem;
    font-weight: 500;
    text-align: left;
    color: #242931;
    margin-top: 1.5rem;
    
   
`;

export const Inputs = styledComponents.input`
    display: flex;
    flex-direction: row;
    Justify-content: center;
    width: 100%;
    margin:0px 0 30px 0;


    ${props => props.estilo === 'Booking' && `
        cursor: pointer;   
        color: #242931;
        margin: 3rem 0 2rem 0;
        padding: 0.5rem 0;
        border: 3px solid #242931;
        font-size: 1rem;
        font-weight: 600;
       
        border-radius: 2rem;
        &:hover{
            color:#ffffff;
            background-color: #242931;
            border: 3px solid #242931;
            transition: 0.2s;
            transform: translateY(-2px);
        }
        &:active{
            backgrpund-color:#ffffff;
            transform: translateY(0.5px);
        }
    `}

`;

export const ErrorModal = styledComponents.p`
    color: red;
    font-size: .8rem;
    text-align: left;


`