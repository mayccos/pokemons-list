import styled from 'styled-components'
import { colors } from '../../utils/style/colors'
import { Link } from 'react-router-dom'
import { faUserCircle, faSignOut } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo13 from '../../assets/13.svg'
import logo1 from '../../assets/logo1.svg'
import logo2 from '../../assets/logo2.svg'

// Creation components that using styled-component
const MainNav = styled.nav`
    background-color: ${colors.darkGrey};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
    height: 200px;
`
const Div = styled.div`
    :hover {
        color: ${colors.lightGreen};
    }
`
const MainNavItem = styled(Link)`
    font-weight: bold;
    color: ${colors.white};

    text-decoration: none;
    margin-right: 0.5rem;
`
const MainNavLogo = styled(Link)`
    display: flex;
    align-items: center;
    font-weight: bold;
`
const MainNavLogoImg = styled.img`
    max-width: 100%;
    width: 58vh;
    height: 200px;
`

const H1 = styled.h1``

// JSX // _________________________________________________________________

/**
 * Creation of a component to show the header
 * @returns {JSX} header
 */
function Header() {
    return (
        <MainNav>
            <MainNavLogo to="/">
                <MainNavLogoImg
                    className="main-nav-logo-image"
                    src={logo13}
                    alt="Mewto Logo"
                />
                <MainNavLogoImg
                    className="main-nav-logo-image"
                    src={logo1}
                    alt="Pokemon Logo"
                />
                <MainNavLogoImg
                    className="main-nav-logo-image"
                    src={logo2}
                    alt="Pikachu Logo"
                />
                <H1 className="sr-only">Pokémons</H1>
            </MainNavLogo>
            {/* {isRemembered || isLogged ? (
                <Div>
                    <MainNavItem to="/profile">
                        <FontAwesomeIcon icon={faUserCircle} />
                        {firstName}
                    </MainNavItem>
                    <MainNavItem to="/login" onClick={signOut}>
                        <FontAwesomeIcon icon={faSignOut} />
                        Sign out
                    </MainNavItem>
                </Div>
            ) : ( */}
            <Div>
                <MainNavItem to="/login">
                    <FontAwesomeIcon icon={faUserCircle} />
                    Sign In
                </MainNavItem>
            </Div>
        </MainNav>
    )
}
//Export
export default Header
