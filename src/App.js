import './App.css';
import {SnackbarProvider} from "notistack";
import {Navigate, Route, Routes} from "react-router-dom";
import {ThemeSwitcherProvider} from "react-css-theme-switcher";
import HomePage from "./pages/home-page";
import DomesticPolicyPage from "./pages/domestic-policy-page";
import ForeignPolicyPage from "./pages/foreign-policy-page";
import CulturalPolicyPage from "./pages/cultural-policy-page";
import ChurchPolicyPage from "./pages/church-policy-page";
import ResultsPage from "./pages/results-page";
import BioPage from "./pages/bio-page";
import ManPage from "./pages/man-page";
import WomanPage from "./pages/woman-page";

function App() {
    const currThemes = {
        dark: `${process.env.PUBLIC_URL}/antd.dark-theme.css`,
        light: `${process.env.PUBLIC_URL}/antd.light-theme.css`,
    };

    return (
        <ThemeSwitcherProvider themeMap={currThemes} defaultTheme="light">
            <SnackbarProvider maxSnack={3}>
                <Routes>
                    <Route path={"/home"} element={<HomePage/>}/>
                    <Route path={"/bio"} element={<BioPage/>}/>
                    <Route path={"/domestic-policy"} element={<DomesticPolicyPage/>}/>
                    <Route path={"/foreign-policy"} element={<ForeignPolicyPage/>}/>
                    <Route path={"/cultural-policy"} element={<CulturalPolicyPage/>}/>
                    <Route path={"/church-policy"} element={<ChurchPolicyPage/>}/>
                    <Route path={"/results"} element={<ResultsPage/>}/>
                    <Route path={"/man"} element={<ManPage/>}/>
                    <Route path={"/woman"} element={<WomanPage/>}/>
                    <Route path={"*"} element={<Navigate to={"/home"} replace/>}/>
                </Routes>
            </SnackbarProvider>
        </ThemeSwitcherProvider>
    );
}

export default App;
