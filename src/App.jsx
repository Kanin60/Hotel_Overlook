
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import { FirstPage } from './pages/Firstpage/FirstPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { HotelPage } from './pages/HotelPage/HotelPage';
import { RoomPage } from "./pages/RoomPage/Roompage";
import { ReservationPage } from "./pages/ReservationPage/ReservationPage";
function App() {

    //Retunere alle ruterne i projektet
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainLayout />}>
                        <Route index element={<FirstPage />} />
                        <Route path='/hoteller' element={<HotelPage />} />
                        <Route path='/vaerelser' element={<RoomPage />} />
                        <Route path='/reservation' element={<ReservationPage />} />
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/*' element={<ErrorPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App


