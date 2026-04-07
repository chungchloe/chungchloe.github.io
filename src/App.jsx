import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Well from './pages/Well.jsx';
import WebDesign from './pages/WebDesign.jsx';
import Branding from './pages/Branding.jsx';
import Motion from './pages/Motion.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/well" element={<Well />} />
        <Route path="/web-design" element={<WebDesign />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/motion" element={<Motion />} />
      </Route>
    </Routes>
  );
}
