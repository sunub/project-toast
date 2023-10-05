import React from "react";

const VariantProvider = React.createContext(null);

function VariantContext({ children }) {
	const [variant, setVariant] = React.useState("");

	const value = React.useMemo(() => {
		return { variant, setVariant };
	}, [variant]);

	return (
		<VariantProvider.Provider value={value}>
			{children}
		</VariantProvider.Provider>
	);
}

export { VariantContext, VariantProvider };
