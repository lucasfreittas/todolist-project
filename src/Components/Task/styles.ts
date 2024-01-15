import styled from "styled-components";

export const Container = styled.ul`
    width: 100%; 
    align-items: left;
    > .taskCompleted{
        color: ${({theme}) => theme.COLORS.GRAY_300};
        text-decoration-line: line-through;

        > div > svg:first-of-type {
            color: ${({theme}) => theme.COLORS.PURPLE_500};
            border-radius: 100%;
        };
    };

    > li{
        display: flex;
        gap: 0.75rem;
        padding: 1rem;
        justify-content: flex-start;
        align-items: center;
        background-color: ${({theme}) => theme.COLORS.GRAY_500};
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 0.875rem;
        line-height: 140%;
        font-weight: 400;
        border-radius: 0.5rem;
        border: 1px solid ${({theme}) => theme.COLORS.GRAY_400};
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);

        > p {
            width: 100%;
        }

        .radioInputContainer{
            display: flex;
            align-items: center;
            justify-content: center;
            
            > input {
                opacity: 0;
                cursor: pointer;
                width: 20px;
                position: absolute;
            }
        }

        > button {
            background-color: transparent;
            border: none;
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }
    }
`;