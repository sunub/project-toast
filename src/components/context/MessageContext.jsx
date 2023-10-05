import React from "react";

const MessagetProvider = React.createContext(null);

function MessageContext({ children }) {
	const [message, setMessage] = React.useState("");

	const value = React.useMemo(() => {
		return { message, setMessage };
	}, [message]);

	return (
		<MessagetProvider.Provider value={value}>
			{children}
		</MessagetProvider.Provider>
	);
}

export { MessageContext, MessagetProvider };
