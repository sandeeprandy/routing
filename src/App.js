import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Blog from './Components/Blog';
import Post from './Components/Post';

function App() {
  return (
    <div> 
    
    <BrowserRouter>
    <Home>
      <Routes>
       
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="post/:postId" element={<Post />} /> 
      </Routes>
      </Home>
    </BrowserRouter>
   
    </div>
  );
}

export default App;