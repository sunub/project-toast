import React from "react";

import ToastPlayground from "../ToastPlayground";
import Footer from "../Footer";
import ToastShelf from "../ToastShelf";
import { ToastContext } from "../ToastContext/ToastContext";

function App() {
	return (
		<>
			<ToastContext>
				<ToastPlayground />
				<ToastShelf />
			</ToastContext>
			<Footer />
		</>
	);
}

export default App;
