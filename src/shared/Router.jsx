import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Gpt from '../components/Gpt';
import Blog from '../pages/Blog';
import Closures from '../components/Closures';
import ModuloOp from '../components/ModuloOp';
import ReadMd from '../components/ReadMd1';

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Blog />} />
                <Route path="/Closures" element={<Closures />} />       
                <Route path="/ModuloOp" element={<ModuloOp />} />
                <Route path="/Gpt" element={<Gpt />} />
                <Route path="/ReadMd" element={<ReadMd />} />
            </Routes>
        </BrowserRouter>
    );
}