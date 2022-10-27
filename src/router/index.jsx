import useLazy from "@/hooks/useLazy";
import { Routes, Route, Navigate } from "react-router-dom";
const Test = useLazy(import("@/pages/test/index"));
export default function Router() {
  return (
    <Routes>
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}
