import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/ko" replace />} />
      <Route path="/:locale" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/ko" replace />} />
    </Routes>
  );
}
