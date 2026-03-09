import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log("main.jsx loading...");
const rootElement = document.getElementById('root');
console.log("Root element focus:", rootElement);

if (!rootElement) {
  console.error("FAILED to find root element!");
  document.body.innerHTML = "<h1 style='color:red'>FATAL: Root element #root not found!</h1>";
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
