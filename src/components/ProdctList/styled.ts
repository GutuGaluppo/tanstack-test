import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Grid = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
	gap: 18px;
	padding: 0;
	list-style: none;
`;

export const Card = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: space-between; /* pushes bottom section down */
	height: 450px; /* ensures equal height inside grid */

	background: linear-gradient(145deg, #2c2c2c, #1a1a1a);
	border-radius: 20px;
	padding: 18px;
	animation: ${fadeUp} 0.4s ease forwards;

	box-shadow:
		0 10px 30px rgba(0, 0, 0, 0.6),
		inset 0 1px rgba(255, 255, 255, 0.05);

	transition: 0.3s ease;

	&:hover {
		transform: translateY(-6px);
	}
`;

export const CardFooter = styled.div`
	margin-top: auto;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const ProductTitle = styled.p`
	font-weight: 500;
	margin: 6px 0;
	color: #f1f1f1;
`;

export const Price = styled.span`
	font-size: 18px;
	font-weight: 600;
	color: #bea98e;
`;

export const Button = styled.button`
	margin-top: 14px;
	border: 1px solid rgba(190, 169, 142, 0.4);
	background: transparent;
	color: #bea98e;
	padding: 10px 14px;
	border-radius: 999px;
	font-weight: 500;
	letter-spacing: 0.5px;
	cursor: pointer;
	transition: 0.25s ease;

	&:hover {
		background: #bea98e;
		color: #0c0c0c;
		box-shadow: 0 6px 20px rgba(190, 169, 142, 0.35);
	}
`;

export const ImageWrap = styled.div`
	background: radial-gradient(circle, #4a4a4a, #2c2c2c);
	border-radius: 14px;
	padding: 20px;
	height: 180px;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;

	img {
		transition: transform 0.3s ease;
	}

	&:hover img {
		transform: scale(1.08);
	}
`;

export const ProductImage = styled.img`
	max-height: 140px;
	max-width: 100%;
	object-fit: contain;
`;

export const Category = styled.span<{ $type: string }>`
	position: absolute;
	top: 8px;
	right: 18px;
	background: rgba(190, 169, 142, 0.12);
	color: #bea98e;
	font-size: 11px;
	letter-spacing: 1px;
	padding: 4px 10px;
	border-radius: 999px;
	text-transform: uppercase;

	background: ${({ $type }) =>
		$type.includes("clothing")
			? "#eef0ff"
			: $type.includes("electronics")
				? "#e6fbf5"
				: "#fff4e6"};

	color: ${({ $type }) =>
		$type.includes("clothing")
			? "#5a4bff"
			: $type.includes("electronics")
				? "#00a87e"
				: "#ff8c42"};
`;

export const Rating = styled.div`
	font-size: 13px;
	color: #bea98e;
	opacity: 0.9;
`;

export const MetaRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 8px;
`;
