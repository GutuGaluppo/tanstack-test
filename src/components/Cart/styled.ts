import styled from "styled-components";

export const CartItem = styled.li`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 10px;
	background: #1a1a1a;
	border-radius: 12px;
	padding: 10px;
	margin-bottom: 10px;
	border: 1px solid rgba(255, 255, 255, 0.05);
	transition: transform 0.25s ease;

	&:hover {
		transform: translateY(-1px);
		background: rgba(255, 255, 255, 0.03);
	}
`;

export const Empty = styled.p`
	color: #888;
`;

export const CartProduct = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	min-width: 0; /* important for ellipsis */
`;

export const CartThumb = styled.img`
	width: 36px;
	height: 36px;
	object-fit: contain;
	border-radius: 6px;
	background: #2c2c2c;
	padding: 4px;
`;

export const CartTitle = styled.div`
	font-size: 13px;
	color: #ddd;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: 150px;
`;

export const Quantity = styled.span`
	background: rgba(190, 169, 142, 0.15);
	color: #bea98e;
	font-size: 11px;
	padding: 2px 7px;
	border-radius: 999px;
`;

export const QtyControls = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

export const QtyButton = styled.button`
	width: 28px;
	height: 28px;
	border-radius: 6px;
	border: 1px solid rgba(190, 169, 142, 0.35);
	background: transparent;
	color: #bea98e;
	cursor: pointer;
	font-weight: 600;
	transition: 0.2s ease;

	&:hover {
		background: #bea98e;
		color: #0c0c0c;
	}

	&:disabled {
		opacity: 0.3;
		cursor: not-allowed;
	}
`;

export const RemoveButton = styled.button`
	position: absolute;
	right: 0px;
	top: -8px;
	width: 16px;
	height: 16px;
	border-radius: 50%;
	border: none;
	cursor: pointer;
	font-size: 12px;

	background: #bea98e;
	color: #0c0c0c;

	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
	z-index: 1100;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ClearAllButton = styled(QtyButton)`
	width: auto;
	padding: 0 12px;
`;
