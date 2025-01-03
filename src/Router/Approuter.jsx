import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../core/Main/Main";
import Home from "../Components/Home/Home";
import ScrollToTop from "./ScrollToTop";
import KiranaaPage from "../Components/KiraanaPage/KiranaaPage";
import Main1 from "../core/main1/Main1";
import JobezzyPage from "../Components/JobezzyPage/JobezzyPage";
import YelagiriPage from "../Components/YelagiriPage/YelagiriPage";
import FolsumPage from "../Components/FolsumPage/FolsumPage";
import ColorsPage from "../Components/ColorsPage/ColorsPage";
import Contact from "../Components/Contact/Contact";
import VividPage from "../Components/VividPage/VividPage";
import InbaPage from "../Components/InbaPage/InbaPage";
import SriKrishnaPage from "../Components/SriKrishnaPage/SriKrishnaPage";
import DGLholidaysPage from "../Components/DGLPage/DGLholidaysPage";



function Approuter() {
    return (
        <BrowserRouter>
            <ScrollToTop />

            <Routes>
                <Route element={<Main />}>
                    <Route path="/" element={<Home />} />
                </Route>
                <Route element={<Main1 />}>
                    <Route path="/kiranaa-bazaar" element={<KiranaaPage />} />
                    <Route path="/jobezzy" element={<JobezzyPage />} />
                    <Route path="/yelagiri-gold-hill-resort" element={<YelagiriPage />} />
                    <Route path="/folsum-pulse" element={<FolsumPage />} />
                    <Route path="/colors-montessori" element={<ColorsPage />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/vivid-engineering-consultants" element={<VividPage />} />
                    <Route path="/inba-foods" element={<InbaPage />} />
                    <Route path="/sri-krishna" element={<SriKrishnaPage />} />
                    <Route path="/dglholidays" element={<DGLholidaysPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default Approuter;