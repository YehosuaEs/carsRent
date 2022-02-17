import styledComponents from "styled-components";

export const DescripUl = styledComponents.div`
    display: flex;
    flex-flow: row-wrap;



`;

export const DescripLi= styledComponents.div`
    margin: 20px 0 0 10px;
    width: 200px;
    font-size: 16px;

    ${props => props.estilo == 'descriptionDown' && `
     margin-top: 10px;
    ` }
`;

export const FeatAndGuide = styledComponents.p`
    margin: 30px 0 0 10px;
    font-weight: 500;
    font-size: 18px;
`;

export const lineaDiv = styledComponents.hr`
    max-width: 100%;
    margin 0 10px;

`;

