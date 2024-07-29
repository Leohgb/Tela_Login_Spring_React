import styled from "styled-components";

export const Container = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
        height: 100vh;
`;

export const Content = styled.div`  
        gap:15px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        box-shadow: 0 4px 15px 5px #BA4DE3;
        max-width: 350px;
        padding: 20px;
        background-color: #262626;
        border-radius: 5px;
`;

export const Label = styled.label`
        font-size: 18px;
        padding-bottom: 5px;
        font-weight: 600;
        color: #f0f2f5;
`;

export const LabelSignin = styled.label`
        font-size: 16px;
        color: #676767;
`;

export const LabelError = styled.label`
        font-size: 14px;
        color: red;
`;

export const Strong = styled.strong`
        cursor: pointer;

        a{
            margin-top: -5px;
            text-decoration: none;
            color: #BA4DE3;
        }
`;