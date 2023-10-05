import React from "react";

import ToastPlayground from "../ToastPlayground";
import Footer from "../Footer";
import ToastShelf from "../ToastShelf";
import { MessageContext } from "../context/MessageContext";
import { VariantContext } from "../context/VariantContext";

function App() {
	return (
		<>
			<MessageContext>
				<VariantContext>
					<ToastPlayground />
				</VariantContext>
			</MessageContext>
			<Footer />
		</>
	);
}

export default App;
