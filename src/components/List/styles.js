import styled from "styled-components";

export const StyledList = styled.section `

    width: 90%;
    max-width: 600px;
    margin: 40px auto 100px auto; //top right bottom left
    background-color: #ffffff;
    padding: 30px;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 5px 5px 10px #DDDDDD;
    
    h3{
        margin-bottom: 20px;
        color: #333333;
    }

    form{
        display: flex;
        column-gap: 10px;
        margin-bottom: 10px;

        input{
            flex-grow: 1;
            height: 54px;
            box-sizing: border-box;
            border-radius: 5px;
            padding-left: 10px;
            border: solid 1px #CCCCCC;
            font-size: 18px;
        }
        
        button{
            width: 105px;
            font-size: 18px;
            background-color: #001D29;
            color: #ffffff;
            border-radius: 5px;
            border: none;
            cursor: pointer;

            &:hover{
                background-color: #014217;
            }

            &:active{
                transform: scale(0.95);
            }

            &:disabled{
                background-color: #666666;
                opacity: 0.5;
                pointer-events: none;
                //display: none;
            }

        }
    }
    
`

