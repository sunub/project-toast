import React from "react";

function VariantInput({ value, ...delegated }) {
	const id = `variant-${value}`;

	return (
		<label htmlFor={id}>
			<input
				id={id}
				type="radio"
				value={value}
				name="variant"
				{...delegated}
			/>
			{value}
		</label>
	);
}

export default VariantInput;
