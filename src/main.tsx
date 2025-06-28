import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import "./globals.css";

const rootElement = document.getElementById("root");
if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<Home />
		</StrictMode>,
	);
} else {
	console.error('Root element with id "root" not found.');
}
