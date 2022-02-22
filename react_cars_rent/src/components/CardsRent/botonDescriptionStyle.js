import styledComponents from "styled-components";

export const DescripUl = styledComponents.div`
    display: flex;
    flex-flow: row-wrap;
    padding-left: 20px;


`;

export const DescripLi= styledComponents.div`
    margin: 15px 0 0 5px;
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    text-align: left;

    ${props => props.estilo == 'descriptionDown' && `
     margin-top: 15px;
    ` }
`;

export const FeatAndGuide = styledComponents.p`
    margin: 30px 0 0 20px;
    font-weight: 500;
    font-size: 18px;
    text-align: left;
`;

export const LineaDiv = styledComponents.hr`
widht: auto;
margin 0 15px; 
height:1px;
background-color: black;
opacity: .4;

`;


export const Icono = styledComponents.img`
    width:30px;
    height:30px;
    border: 2px solid none;
    margin: 10px 0 0 0;
`;
