import React from 'react'
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EventsAndPrograms from './pages/EventsAndPrograms';
import WorkshopRecords from './pages/WorkshopRecords';
import Portfolio from './pages/Portfolio';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Logout from './pages/Logout';
import Signin from './pages/Signin';

export const HOMEPAGE_URL = '/';
export const EVENTS_AND_PROGRAMS_URL = '/events-and-programs';
export const WORKSHOP_RECORDS_URL = '/workshop-records';
export const PORTFOLIO_URL = '/portfolio';
export const PROFILE_URL = '/profile';
export const SETTINGS_URL = '/settings';
export const LOGOUT_URL = '/logout';
export const SIGNUP_URL = 'Signin';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOMEPAGE_URL} element={<HomePage />} />
        <Route path={EVENTS_AND_PROGRAMS_URL} element={<EventsAndPrograms />} />
        <Route path={WORKSHOP_RECORDS_URL} element={<WorkshopRecords />} />
        <Route path={PORTFOLIO_URL} element={<Portfolio />} />
        <Route path={PROFILE_URL} element={<Profile />} />
        <Route path={SETTINGS_URL} element={<Settings />} />
        <Route path={LOGOUT_URL} element={<Logout />} />
        <Route path={SIGNUP_URL} element={<Signin />} />
      </Routes>
    </BrowserRouter>
  )
}
