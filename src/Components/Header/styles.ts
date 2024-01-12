import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 12.5rem;
    background-color: ${({theme}) => theme.COLORS.GRAY_700};
    
    text-align: center;

    > svg {
        width: 7.875rem;
    }
`;