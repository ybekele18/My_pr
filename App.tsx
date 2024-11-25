import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Github, Mail, Phone } from 'lucide-react';
import Welcome from './components/Welcome';
import Auth from './components/Auth';
import Services from './components/Services';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route 
            path="/auth" 
            element={<Auth onAuthSuccess={() => setIsAuthenticated(true)} />} 
          />
          <Route 
            path="/services" 
            element={
              isAuthenticated ? 
                <Services /> : 
                <Navigate to="/auth" replace />
            } 
          />
        </Routes>
        
        <footer className="bg-gray-900 py-8 mt-auto">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="space-y-2 text-center md:text-left mb-4 md:mb-0">
                <h3 className="text-xl font-bold">Help Center</h3>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+251942823656</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <Github className="w-4 h-4" />
                  <span>@ybekele18</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>ybekele18@gmail.com</span>
                </div>
              </div>
              <div className="text-sm text-gray-400">
                © {new Date().getFullYear()} Yared Bekele. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;