import React from "react";

const ToastProvider = React.createContext(null);

function ToastContext({ children }) {
	const [message, setMessage] = React.useState("");
	const [variant, setVariant] = React.useState("");

	const mValue = React.useMemo(() => {
		return { message, setMessage };
	}, [message]);

	const vValue = React.useMemo(() => {
		return { variant, setVariant };
	}, [variant]);

	const value = {
		message: mValue,
		variant: vValue,
	};

	return (
		<ToastProvider.Provider value={value}>
			{children}
		</ToastProvider.Provider>
	);
}

export { ToastProvider, ToastContext };
