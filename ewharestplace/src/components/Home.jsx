import React from "react";
import Title from "./Title";
import NaviBuilding from "./NaviBuilding";
import styled from "styled-components";
import EwhaMap from "./EwhaMap";

const GreenDiv = styled.div`
background-color: #1E4119;
font-family: 'MaruBuri';
`
;
const Home = ()=>{
    return(
        <GreenDiv>
            <Title />
            <NaviBuilding />
            <EwhaMap/>
        </GreenDiv>
    )
};

export default Home;