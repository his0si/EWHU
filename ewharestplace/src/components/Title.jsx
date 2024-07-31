import styled from "styled-components";

const StyledContainer = styled.div`
    display : flex;
    height: 7rem;
    background-color: #1E4119;
    justify-content: start;
    align-items: center;
    font-family: Ewha
    `;

const StyledLogo = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    width: 5rem;
    height: 5rem;
    border-radius: 10rem;
    background-color: #7A8647;
    white-space: pre-wrap;
    font-family: Ewha;
    font-size: 1.5rem;
    color: white;
    margin: 1rem;
`;

const PaleGreen = styled.div`
    color: #C3FFBD`;
const Explain = styled.div`
    color: white;
    margin: 1.5rem 0rem 0rem 0rem;
`;
const WhiteHr = styled.hr`
    height: 0.1rem;
    border: 0;
    background-color: white;
`;

const Title = ()=>{
    return(
        <div> 
        <StyledContainer>
            <StyledLogo>EW<br/><PaleGreen>HU</PaleGreen></StyledLogo>
            <Explain>이화여대<br />휴식공간 찾기</Explain>
           
        </StyledContainer>
        <WhiteHr/>
        </div>
    )
}

export default Title;