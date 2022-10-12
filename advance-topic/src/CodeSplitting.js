import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
// import { CommitPage } from "./code-splitting/CommitPage";
// import { LoginPage } from "./code-splitting/LoginPage";
// import { RegisterPage } from "./code-splitting/RegisterPage";

const CommitPage = lazy(() => import("./code-splitting/CommitPage"));
const LoginPage = lazy(() => import("./code-splitting/LoginPage"));
const RegisterPage = lazy(() => import("./code-splitting/RegisterPage"));

export const CodeSplitting = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<CommitPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Suspense>
  );
};
