import React from "react";

function Message({ styles, message, setMessage }) {
	return (
		<div className={styles.row}>
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
					value={message}
					className={styles.messageInput}
					onChange={(e) => setMessage(e.target.value)}
				/>
			</div>
		</div>
	);
}

export default React.memo(Message);
