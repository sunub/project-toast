import React from "react";

const ToastProvider = React.createContext(null);

function ToastContext({ children }) {
	const [toasts, setToasts] = React.useState([]);

	function createToasts(message, variant) {
		const newToast = [
			...toasts,
			{
				id: crypto.randomUUID(),
				message,
				variant,
			},
		];

		setToasts(newToast);
	}

	function dismissToast(id) {
		if (id === "all") {
			setToasts([]);
		} else {
			const newToast = toasts.filter((toast) => toast.id !== id);
			setToasts(newToast);
		}
	}

	return (
		<ToastProvider.Provider value={{ toasts, createToasts, dismissToast }}>
			{children}
		</ToastProvider.Provider>
	);
}

export { ToastProvider, ToastContext };
