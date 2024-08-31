import React from "react";

const List = ({id, nickname, rating, content, setUpdateUI})=>{
    return (
        <li style={{
            
        }}>
            <div style={{
                backgroundColor: "gray",
                marginTop:"10px",
                marginRight:"20px",
                height:"70px",
                borderRadius: "10px",
                padding: "5px"
            }}>
            <div>{nickname}:</div>
            {content}
            </div>
            
        </li>
    )
}

export default List;