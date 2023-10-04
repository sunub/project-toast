import React from "react";

function useToggle(initValue = false) {
	if (typeof initValue !== "boolean") {
		console.warn("Invalid type for useToggle");
	}

	const [value, setValue] = React.useState(initValue);

	const toggleValue = React.useCallback(() => {
		setValue((currValue) => !currValue);
	}, []);

	return [value, toggleValue];
}

export default useToggle;
