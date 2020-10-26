import styled, {css} from 'styled-components';
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`
export const LogoContainer = styled(Link)`
    height: 100%;
    width: auto;
    padding: 10px 0;
`
export const OptionsContainer = styled.div`
    min-width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

`

const OptionContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;
    text-align: center;
`

export const OptionLink = styled(Link)`
    ${OptionContainerStyles}
`

export const OptionDiv = styled.div`
    display: inline-block;
    ${OptionContainerStyles}
`