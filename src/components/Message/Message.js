import React from "react";

function Message({ styles }, ref) {
	React.useEffect(() => {
		console.log("Message is rendered");
	}, []);

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
					ref={ref}
					id="message"
					className={styles.messageInput}
				/>
			</div>
		</>
	);
}

export default React.forwardRef(Message);
