import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

import AppointmentCreation from '@components/AppointmentCreation';
import SignInSide from '@components/SignInSide';
import SignUp from '@components/SignUp';
import SideMenu from '@components/SideMenu';
import Profile from '@components/Profile';
import AppTheme from "@shared-theme/AppTheme";
import CssBaseline from '@mui/material/CssBaseline';

const xThemeComponents = {}; // Define tus componentes de tema aquí

function SidebarLayout() {
  return (
    <div style={{ display: 'flex' }}>
      <SideMenu />
      <div style={{ flex: 1, marginLeft: 50 }}>
        {/* Renderiza las rutas hijas aquí*/}
        <Outlet/>
      </div>
    </div>
  );
}

function App() {
  return (
    <AppTheme themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Router>
        <div style={{  }}>
          <Routes>
            {/* Agrupación de rutas con Sidebar */}
            <Route element={<SidebarLayout />}>
              <Route path="/" element={ <h1> Pantalla de Inicio :) </h1> } />
              <Route path="/crear-cita" element={<AppointmentCreation />} />
              <Route path="/perfil" element={<Profile />} />
            </Route>
            {/* Rutas sin Sidebar */}
            <Route path="/login" element={<SignInSide />} />
            <Route path="/register" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </AppTheme>
  );
}

export default App;