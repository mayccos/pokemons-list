import styled from 'styled-components'
import { colors } from '../../utils/style/colors'

// Creation components that using styled-component
const FooterStyle = styled.footer`
    display: flex;
    justify-content: center;
    border-top: 2px solid ${colors.darkGrey};
    background-color: ${colors.darkGrey};
    padding: 2rem 0 1.5rem;
`
const FooterText = styled.p`
    margin: 0;
    padding: 0;
    color: ${colors.white};
`

/**
 * creation a function  footer common to all pages
 * @return {html element} footer
 */
function Footer() {
    return (
        <FooterStyle>
            <FooterText>Copyright 2023 Mayccos</FooterText>
        </FooterStyle>
    )
}
//Export
export default Footer
