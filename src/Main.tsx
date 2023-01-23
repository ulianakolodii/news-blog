import { Routes, Route } from 'react-router-dom';
import ReadMore from './ReadMore';
import App from './App';

export default function Main() {
    return (
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/readmore' element={<ReadMore />} />
        </Routes>
    );
}
