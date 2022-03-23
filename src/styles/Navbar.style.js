import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
	width: 100%;
	height: ${(props) => (props.extendNavbar ? '100vh' : '5rem')};
	background-color: black;
	display: flex;
	flex-direction: column;

	@media (min-width: 815px) {
		height: 5rem;
	}
`;

export const LeftContainer = styled.div`
	flex: 70%;
	display: flex;
	align-items: center;
	padding-left: 5%;
	background-color: red;
`;

export const RightContainer = styled.div`
	flex: 30%;
	display: flex;
	justify-content: flex-end;
	padding-right: 50px;
	background-color: salmon;
`;

export const NavbarInnerContainer = styled.div`
	width: 100%;
	height: 5rem;
	display: flex;
`;

export const NavbarLinkContainer = styled.div`
	display: flex;
`;

export const NavbarLink = styled(Link)`
	color: white;
	font-size: x-large;
	font-family: Arial, Helvetica, sans-serif;
	text-decoration: none;
	margin: 1rem;

	@media (max-width: 815px) {
		display: none;
	}
`;
export const NavbarLinkExtended = styled(Link)`
	color: white;
	font-size: x-large;
	font-family: Arial, Helvetica, sans-serif;
	text-decoration: none;
	margin: 1rem;

	/* @media (max-width: 815px) {
		display: none;
	} */
`;

export const Logo = styled.img`
	margin: 1rem;
	max-width: 11rem;
	height: auto;
`;

export const OpenLinksButton = styled.button`
	width: 70px;
	height: 50px;
	background: none;
	border: none;
	color: white;
	font-size: 45px;
	cursor: pointer;

	@media (min-width: 815px) {
		display: none;
	}
`;
export const NavbarExtendedContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-with: 815px) {
		display: none;
	}
`;
