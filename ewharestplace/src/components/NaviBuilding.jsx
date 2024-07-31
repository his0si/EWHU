import React, {useState, useEffect} from "react";
import styled from "styled-components";


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
    
`;
const StyledInput = styled.input`
    font-family: 'MaruBuri';
    height: 2rem;
    width: 300px;
    border: 0;

`;




const buildings = [
    {buildingName: "공학관", buildingNickName: "공대"},
    {buildingName: "교육관", buildingNickName: "굑관"},
    {buildingName: "학관", buildingNickName: "학"},
    {buildingName: "학생문화관", buildingNickName: "학문관"},
    {buildingName: "생활환경관", buildingNickName: "생활관"},
    {buildingName: "sk텔레콤관", buildingNickName: ""},
    {buildingName: "신세계관", buildingNickName: "경영"},
    {buildingName: "연구협력관", buildingNickName: "연협"},
    {buildingName: "종합과학관", buildingNickName: "종과"},
    {buildingName: "포스코관", buildingNickName: "포관"},
    {buildingName: "약학관", buildingNickName: "약대"},
    {buildingName: "ECC", buildingNickName: "이씨씨"},
    {buildingName: "국제교육관", buildingNickName: "국교관"},
    {buildingName: "체육관", buildingNickName: ""},
    {buildingName: "중앙도서관", buildingNickName: "중도"},
    {buildingName: "헬렌관", buildingNickName: "간호"},
    {buildingName: "음악관", buildingNickName: "음대"},
    {buildingName: "조형예술관", buildingNickName: "조예대"}
];

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