import { css } from 'lit';

export default css`
    .button {
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 8px;
        
        &.button--primary {
            background-color: #4CAF50;
        }

        &.button--secondary {
            background-color: #008CBA;
        }

        &:hover {
            filter: brightness(90%);
        }
    }
`;
