import styled from "styled-components";

export const StyledTask = styled.div `

    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #cccccc;
    padding: 20px 0;

    p{
        font-size: 18px;
        color: #666666;
    }

    button{
        background-color: transparent;
        border: none;
        font-size: 30px;
        color: #FF5555;
        cursor: pointer;
        &:hover{
            color: red;
        }
    }
`