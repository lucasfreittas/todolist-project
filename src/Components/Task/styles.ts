import styled from "styled-components";

export const Container = styled.ul`
    > .taskCompleted{
        color: ${({theme}) => theme.COLORS.GRAY_300};
        text-decoration-line: line-through;

        svg {
            color: ${({theme}) => theme.COLORS.PURPLE_500};
            background-color: white;
            border-radius: 100%;
        }
    };

    > li{
        display: flex;
        gap: 0.75rem;
        padding: 1rem;
        justify-content: center;
        align-items: flex-start;
        background-color: ${({theme}) => theme.COLORS.GRAY_500};
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 0.875rem;
        line-height: 140%;
        font-weight: 400;
        border-radius: 0.5rem;
        border: 1px solid ${({theme}) => theme.COLORS.GRAY_400};
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);

        .radioInputContainer{
            display: flex;
            align-items: center;
            justify-content: center;
            
            > input {
                opacity: 0;
                cursor: pointer;
                width: 100%;
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