import React from 'react';
import {
	NavbarContainer,
	LeftContainer,
	RightContainer,
	NavbarInnerContainer,
	NavbarExtendedContainer,
	NavbarLinkContainer,
	NavbarLink,
	NavbarLinkExtended,
	Logo,
	OpenLinksButton,
} from '../styles/Navbar.style';
import LogoImg from '../assets/logo.png';
import { useState } from 'react';

function Navbar() {
	const [extendNavbar, setExtendNavbar] = useState(false);

	return (
		<NavbarContainer extendNavbar={extendNavbar}>
			<NavbarInnerContainer>
				<LeftContainer>
					<NavbarLinkContainer>
						<NavbarLink to="/">Home</NavbarLink>
						<NavbarLink to="/products">Products</NavbarLink>
						<NavbarLink to="/contacts">Contact Us</NavbarLink>
						<NavbarLink to="/about">About Us</NavbarLink>
						<OpenLinksButton
							onClick={() => setExtendNavbar((curr) => !curr)}
						>
							{' '}
							{extendNavbar ? <> &#10005; </> : <> &#8801;</>}
						</OpenLinksButton>
					</NavbarLinkContainer>
				</LeftContainer>{' '}
				<RightContainer>
					<Logo src={LogoImg}></Logo>
				</RightContainer>
			</NavbarInnerContainer>
			{extendNavbar && (
				<NavbarExtendedContainer>
					<NavbarLinkExtended to="/">Home</NavbarLinkExtended>
					<NavbarLinkExtended to="/products">
						Products
					</NavbarLinkExtended>
					<NavbarLinkExtended to="/contacts">
						Contact Us
					</NavbarLinkExtended>
					<NavbarLinkExtended to="/about">
						About Us
					</NavbarLinkExtended>
				</NavbarExtendedContainer>
			)}
		</NavbarContainer>
	);
}

export default Navbar;
