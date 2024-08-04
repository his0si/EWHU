import React, {useState, useEffect} from "react";
import styled from "styled-components";
import buildings from "./buildings";


const SearchBar = styled.div`
    display: flex;
    font-family: Ewha;
    white-space: pre-wrap;
    background-color: white;
    border-radius: 1rem;
`;

const SearchIntro = styled.div`
    display: flex;
    width: 35px;
    height: 35px;
    background-color: white;
    border: 1px solid black;
    justify-content: center;
    border-radius: 0.5rem;
    font-size: 1rem;
    margin-right: 10px;
    
    
`;
const StyledInput = styled.input`
    font-family: 'MaruBuri';
    height: 2rem;
    width: 300px;
    border: 0;

`;

const NaviBuilding = ()=>{
    const [query, setQuery] = useState('');
    const filterBuilding = buildings.filter((p)=>{
        return p.buildingName.includes(query) ||
        p.buildingNickName.includes(query);
    })

    const onChange = (e)=>{
        setQuery(e.target.value);
    };


 
    return (
        <SearchBar>
            <SearchIntro>
                건물<br/>검색
            </SearchIntro>
            <div>
            <StyledInput
            type="search"
            placeholder="건물 이름을 입력하세요."
            value={query}
            onChange={onChange} />
            
            {query && filterBuilding.length > 0 && (
                    <div>
                        {filterBuilding.map(building => (
                            <div key={building.buildingName}>{building.buildingName}</div>
                        ))}
            </div>)}
            </div>
        </SearchBar>
    );

}

export default NaviBuilding;