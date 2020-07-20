import styled, {css, keyframes} from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const List = styled.ul`
    display: flex;
    overflow: scroll;
    width: 100%;
    list-style: none;
    ${props => props.fixed && css`
    {
        ${fadeIn()}
        background: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        margin: 0 auto;
        max-width: 400px;
        padding: 5px;
        position: fixed;
        top: -20px;
        transform: scale(0.5);
        z-index: 1;
        left: 0;
        right: 0;
    }`
    }`
const ldsRing = keyframes`    
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    `
export const Lds = styled.div`
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
`

export const LdsDiv = styled.div`
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid #000;
        border-radius: 50%;
        animation: ${ldsRing} 0.6s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #000 transparent transparent transparent;`

export const LdsDivOn = styled.div`
        animation-delay: -0.3s;`

export const LdsDivTw = styled.div`
        animation-delay: -0.2s;`

export const LdsDivTr = styled.div`
        animation-delay: -0.1s;`


export const Item = styled.li`
    padding: 0 8px;
`
