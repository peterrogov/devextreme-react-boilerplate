import { Routes, Route } from "react-router-dom";
import { HomeView } from "./home";
import { NotFoundView } from "./not-found";

export const MainRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="*" element={<NotFoundView />} />
        </Routes>
    )
}