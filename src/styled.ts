import styled from "styled-components";

export const Page = styled.div`
	min-height: 100vh;
	background: radial-gradient(circle at top, #2c2c2c, #0c0c0c 70%);
	display: flex;
	justify-content: center;
	padding: 20px;
	color: #f5f5f5;
`;

export const Panel = styled.div<{ $cartOpen?: boolean }>`
	flex: 1;
	max-width: 1200px;
	border-radius: 26px;
	padding: 40px;
	transition:
		transform 0.35s ease,
		filter 0.35s ease;

	@media (max-width: 900px) {
		transform: ${({ $cartOpen }) =>
			$cartOpen ? "scale(0.96) translateX(-6px)" : "scale(1)"};
		filter: ${({ $cartOpen }) => ($cartOpen ? "brightness(0.7)" : "none")};
	}
`;

export const Title = styled.h1`
	font-size: clamp(1.5rem, 6vw, 4.5rem);
	font-weight: 600;
	color: #f5f5f5;
	margin-bottom: 20px;
`;

export const Sidebar = styled.aside<{ $open?: boolean }>`
	position: fixed;
	right: 26px;
	top: 10%;
	bottom: 26px;

	width: 320px;
	height: fit-content;
	max-height: 85vh;
	overflow-y: auto;

	background: rgba(20, 20, 20, 0.65);
	backdrop-filter: blur(18px);
	border-radius: 22px;
	padding: 20px;
	padding-top: 32px;
	border: 1px solid rgba(255, 255, 255, 0.06);
	box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
	z-index: 1000;

	transition: transform 0.35s ease;
	transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(120%)")};

	@media (max-width: 900px) {
		width: 280px;
		right: 16px;
		top: 16px;
		bottom: 16px;
	}
`;

export const CartToggleWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

export const CartToggle = styled.button<{ $open?: boolean }>`
	position: fixed;
	right: 40px;
	top: 40px;
	width: 62px;
	height: 62px;
	border-radius: 50%;
	border: 3px solid #0c0c0c;
	cursor: pointer;
	font-size: 22px;

	transition: transform 0.35s ease;

	background: #bea98e;
	color: #0c0c0c;

	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
	z-index: 1100;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 900px) {
		right: 28px;
		top: 28px;
		transform: ${({ $open }) =>
			$open ? "translate(4%, -10%) scale(0.8)" : "none"};
	}
`;

export const PaginationButton = styled.button`
	border-radius: 50%;
	border: 3px solid #0c0c0c;
	cursor: pointer;
	font-size: 22px;
	background: transparent;
	color: #bea98e;
	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
	z-index: 1100;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const PaginationWrapper = styled.div`
	position: absolute;
	bottom: 30px;
	left: 50%;
	transform: translateX(-50%);

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
	margin-top: 20px;
`;

export const PaginationLength = styled.span`
	font-size: 18px;
	color: #f5f5f5;
`;

export const CartCount = styled.span`
	position: absolute;
	top: 10px;
	right: 13px;
	background: #0c0c0c;
	color: #bea98e;
	font-size: 11px;
	padding: 2px 6px;
	border-radius: 999px;
`;

export const Backdrop = styled.div<{ $open: boolean }>`
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.45);
	backdrop-filter: blur(3px);
	opacity: ${({ $open }) => ($open ? 1 : 0)};
	pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
	transition: opacity 0.25s ease;
	z-index: 900;
`;
