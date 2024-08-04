import React from "react";
import Title from "./Title";
import NaviBuilding from "./NaviBuilding";
import styled from "styled-components";
import EwhaMap from "./EwhaMap";
import GreenDiv from "./GreenDiv";


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