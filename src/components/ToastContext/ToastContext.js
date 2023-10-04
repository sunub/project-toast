import React from "react";

const ToastProvider = React.createContext(null);

function ToastContext({ children }) {
	const [toastContent, setToastContent] = React.useState(new Map());

	const value = React.useMemo(() => {
		return { toastContent, setToastContent };
	}, [toastContent]);

	return (
		<ToastProvider.Provider value={value}>
			{children}
		</ToastProvider.Provider>
	);
}

export { ToastProvider, ToastContext };
