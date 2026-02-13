import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const scaleIn = keyframes`
  from { transform: scale(.96); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

export const Overlay = styled.div`
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.55);
	backdrop-filter: blur(6px);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 2000;
	animation: ${fadeIn} 0.2s ease;
`;

export const Modal = styled.div`
	position: relative;
	width: 800px;
	max-width: 98%;
	min-height: 400px;
	background: linear-gradient(145deg, #2c2c2c, #1a1a1a);
	border-radius: 24px;
	overflow: hidden;
	display: grid;
	gap: 40px;
	grid-template-columns: 1fr 1fr;
	animation: ${scaleIn} 0.25s ease;
	box-shadow: 0 40px 90px rgba(0, 0, 0, 0.6);

	@media (max-width: 700px) {
		grid-template-columns: 1fr;
	}
`;

export const ModalImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;

	padding: 40px;
`;

export const ModalContent = styled.div`
	padding: 32px;
	display: flex;
	flex-direction: column;
`;

export const ModalCategory = styled.span<{ $type: string }>`
	color: rgba(190, 169, 142, 0.82);
	font-size: 12px;
	letter-spacing: 1px;
	text-transform: uppercase;
	color: ${({ $type }) =>
		$type.includes("clothing")
			? "#5a4bff"
			: $type.includes("electronics")
				? "#00a87e"
				: "#ff8c42"};
`;

export const ModalTitle = styled.h2`
	color: #d5d4d4;
	margin: 10px 0 14px;
	font-weight: 500;
`;

export const ModalDescription = styled.p`
	color: #9a9a9a;
	line-height: 1.6;
	margin-bottom: 20px;
`;

export const ModalPrice = styled.div`
	font-size: 24px;
	font-weight: 600;
	color: #bda98e;
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 14px;
	right: 16px;
	border: none;
	background: transparent;
	color: #bda98e;
	font-size: 20px;
	cursor: pointer;
`;
