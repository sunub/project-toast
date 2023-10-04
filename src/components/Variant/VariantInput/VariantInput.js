import React from "react";

function VariantInput({ value, ...delegated }) {
	const id = `variant-${value}`;

	React.useEffect(() => {
		console.log("Input is rendered");
	}, []);

	return (
		<label htmlFor={id}>
			<input
				id={id}
				type="radio"
				name="variant"
				value={value}
				{...delegated}
			/>
			{value}
		</label>
	);
}

export default VariantInput;
