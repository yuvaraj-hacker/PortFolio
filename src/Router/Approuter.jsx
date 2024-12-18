import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../core/Main/Main";
import Home from "../Components/Home/Home";
import ScrollToTop from "./ScrollToTop";
import KiranaaPage from "../Components/KiraanaPage/KiranaaPage";
import Main1 from "../core/main1/Main1";
import JobezzyPage from "../Components/JobezzyPage/JobezzyPage";
import YelagiriPage from "../Components/YelagiriPage/YelagiriPage";
import FolsumPage from "../Components/FolsumPage/FolsumPage";


function Approuter() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route element={<Main />}>
                    <Route path="/" element={<Home />} />

                  
                 
                </Route>
                <Route element={<Main1 />}>
                    <Route path="/kiranaa" element={<KiranaaPage />} />
                    <Route path="/jobezzy" element={<JobezzyPage />} />
                    <Route path="/yelagiri" element={<YelagiriPage />} />
                    <Route path="/folsum" element={<FolsumPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default Approuter;