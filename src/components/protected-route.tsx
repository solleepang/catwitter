import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

// Route 접근시 유저정보 확인
export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = auth.currentUser;
  if (user === null) {
    return <Navigate to="/login" />; // 유저정보가 없을 경우 로그인 페이지로
  }
  return children;
}
