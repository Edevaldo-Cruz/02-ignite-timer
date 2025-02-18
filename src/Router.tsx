import { Routes, Route } from "react-router-dom";

import { DefaultLayout } from "./layout/DefaultLayout";
import { Home } from "./pages/Home";
import { History } from "./pages/History/History";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="history" element={<History />} />
      </Route>
    </Routes>
  );
}
