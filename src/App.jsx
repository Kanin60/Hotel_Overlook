
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import { FirstPage } from './pages/Firstpage/FirstPage';
//MANGLER FIRST PAGE STADIG?
import { LoginPage } from './pages/LoginPage/LoginPage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainLayout />}>
                        <Route index element={<FirstPage />} />
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/*' element={<ErrorPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App


