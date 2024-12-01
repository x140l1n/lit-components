import { css } from 'lit';

export default css`
    .button {
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 8px;
        
        &.primary {
            background-color: #4CAF50;
        }

        &.secondary {
            background-color: #008CBA;
        }

        &.large {
            font-size: 20px;
            padding: 20px 40px;
        }

        &.small {
            font-size: 12px;
            padding: 10px 20px;
        }

        &:hover {
            filter: brightness(0.9);
        }
    }
`;
