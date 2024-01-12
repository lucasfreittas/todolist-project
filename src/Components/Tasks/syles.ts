import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    margin-top: 4rem;

`;

export const Counter = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;
    font-weight: 700;
    
    div {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
    };

    span{
            padding: 0.125rem 0.5rem;
            border-radius: 62.4375rem;
            background-color: ${({theme}) => theme.COLORS.GRAY_400};
            color: ${({theme}) => theme.COLORS.GRAY_200};
            font-size: 0.75rem;
        }

    .createdTasks{
        color: ${({theme}) => theme.COLORS.BLUE_300};

        
    };

    .completedTasks{
        color: ${({theme}) => theme.COLORS.PURPLE_300};
    };


`;

export const List = styled.div`

`;

export const EmptyList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    padding: 4rem 1.5rem;
    gap: 1rem;

    font-size: 1rem;
    color: ${({theme}) => theme.COLORS.GRAY_300};
    font-weight: 700;
    line-height: 140%;

    text-align: center;

    border-radius: 0.5rem;
    border-top: 1px solid ${({theme}) => theme.COLORS.GRAY_400};

    > div span{
        font-weight: 400;
    }
`;