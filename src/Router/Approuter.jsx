import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../core/Main/Main";
import Home from "../Components/Home/Home";
import ScrollToTop from "./ScrollToTop";
import KiranaaPage from "../Components/KiraanaPage/KiranaaPage";
import JobezzyMain from "../Shared/Components/Jobezzys/JobezzyMain";
import YelagiriMain from "../Shared/Components/Yelagiri/YelagiriMain";
import Main1 from "../core/main1/Main1";


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
                    <Route path="/jobezzy" element={<JobezzyMain />} />
                    <Route path="/yelagiri" element={<YelagiriMain />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default Approuter;