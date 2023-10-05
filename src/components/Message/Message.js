import React from "react";
import { MessagetProvider } from "../context/MessageContext";

function Message({ styles }) {
	const [currMessage, currSetMessage] = React.useState("");
	const { message, setMessage } = React.useContext(MessagetProvider);

	React.useEffect(() => {
		setMessage((newMessage) => {
			newMessage = currMessage;
			return newMessage;
		});
	}, [currMessage, setMessage]);

	return (
		<>
			<label
				htmlFor="message"
				className={styles.label}
				style={{ alignSelf: "baseline" }}
			>
				Message
			</label>
			<div className={styles.inputWrapper}>
				<textarea
					id="message"
					value={currMessage}
					className={styles.messageInput}
					onChange={(e) => currSetMessage(e.target.value)}
				/>
			</div>
		</>
	);
}

export default React.memo(Message);
