import styledComponents from "styled-components";

export const CuerpoSignup = styledComponents.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    height: 100vh;
    padding-bottom: 3rem;
    background:#2BB9AC;
    color:#ffffff
    
`
export const BackSignup = styledComponents.div`
    margin: 1.6rem 0 1rem 0;  
`;

export const BodyFormSignup = styledComponents.form`
    align-items: center;
    Justify-content: center;
    width: 30%;
    background: #3574B7;
    margin-left: 6px;
    padding: 1.5rem 2.5rem 1.5rem 2.5rem;
    border-radius: 1rem;
    font-weight: 500;
   

    @media (max-width: 980px) and (min-width: 821px) {
        width:45%;  
    }

    @media (max-width: 820px) and (min-width: 621px)  {
        width: 60%;    
    }

    @media (max-width: 620px) and (min-width: 501px)  {
        width: 70%;    
    }   

    @media (max-width: 500px) and (min-width: 341px) {
        width: 80%;
    }
    @media (max-width: 340px) and (min-width: 5px) {
        width: 90%;
    }
`;

export const InputSignup = styledComponents.input`
    display: flex;
    flex-direction: row;
    Justify-content: center;
    width: 100%;
    margin: 8px 0 30px 0;
    padding-bottom: .2rem;
    border: none;
    border-bottom: 1px solid #ffffff;
    color:#ffffff;
        
        &::-webkit-input-placeholder {
        color: #ececec;
        font-size: 13px;
    }

    ${props => props.estilo === 'BtnSignup' && `
        cursor: pointer;   
        color: #ffffff;
        width: 65%;
        margin: .4rem 0 1.8rem 0;
        padding: 0.5rem 0;
        border: none;
        font-size: 1rem;
        font-weight: 600;
        border: 1px solid #ffffff;
        border-radius: 2rem;
            &:hover{
                color:#3574B7;
                background-color: #ececec;
                border: 1px solid #ffffff;
                transition: 0.2s;
                transform: translateY(-2px);
            }
            &:active{
                backgrpund-color:#ffffff;
                transform: translateY(0.5px);
            }
    `}

    ${props => props.estilo === 'Password' &&`
    margin: 8px 0 5px 0;
    `}
`;


export const DivInputSignup = styledComponents.div`
    display: flex;
    justify-content: center;
`;

export const ErrorSignup = styledComponents.p`
    color: #FEEB49;
    margin-block:0; 
    font-size: .8rem;
`;

export const TextoSignup = styledComponents.p`
    font-size: 12px;
    text-align: center;

    ${props => props.estilo === 'Titulo' && `
        Font-size: 2rem;
    `}
    ${props => props.estilo === 'Subtitulo' && `
        Font-size: 1.2rem;
    `}
    ${props => props.estilo === 'Back' && `
        Font-size: 1rem;
        &:hover{
            transition: 0.2s;
            transform: translateY(-2px);
            text-shadow: 0px 2px 4px #bababa;
        }
        &:active{
            backgrpund-color:#ffffff;
            transform: translateY(5px);
        }
    `}

    ${props => props.estilo === 'Google' && `
        Font-size: .8rem;
        text-decoration: none;
        color: white;
        width: 20rem;
    `}
    ${props => props.estilo === 'SpanGoogle' && `
     Font-size: 1rem;
    `}
`;

export const ImgGoogleSignup = styledComponents.img`
    width: 15%;
    height: 15%; 
`;

export const DivGoogleSignup =styledComponents.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    /* box-sizing: border-box;
    width: calc(100%-10px);
    */

`


