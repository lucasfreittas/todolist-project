import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const Main = styled.section`
    width: 100%;
    max-width: 46rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    margin: -1.65rem 0;
`;

export const Form = styled.form`
    display: flex;   
    gap: 0.5rem;
    width: 100%;
    
    height: 3.38rem;

    > input {
        display: flex;
        background-color: ${({theme}) => theme.COLORS.GRAY_500};
        color: ${({theme}) => theme.COLORS.GRAY_100};
        border: 1px solid ${({theme}) => theme.COLORS.GRAY_700};
        padding: 1rem;
        width: 100%;
        border-radius: 0.5rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 140%;
        flex: 1;

        &::placeholder{
            color: ${({theme}) => theme.COLORS.GRAY_300};
        };

        &:focus{
            outline: 1px solid ${({theme}) => theme.COLORS.PURPLE_500}; 
        }
    }

    > button {
        display: flex;

        height: 100%;
        padding: 1rem;
        justify-content: center;
        align-items: center;
        gap: 0.4rem;

        border-radius: 0.5rem;
        background-color: ${({theme}) => theme.COLORS.BLUE_500};
        color: ${({theme}) => theme.COLORS.GRAY_100};
        line-height: 140%;
        font-weight: 700;
        font-size: 0.875rem;
        border: none;

        transition: all 0.1s ease-in-out;

        &:hover{
            background-color: ${({theme}) => theme.COLORS.BLUE_300};
        };
    };

`;

export const Tasks = styled.div`

`;