import React, {useEffect}  from 'react';
import {Routes, Route, useNavigate} from "react-router-dom";

import Login from './components/Login';
import Home from './container/Home';

const App = () => {
    useEffect(() => {
        // Update the document title using the browser API
        document.title = "寶理三官廟";
    });
    
    return (
        <Routes>
            <Route path='login' element={<Login />} />
            <Route path='/*' element={<Home />} />
        </Routes>
    )
}

export default App
