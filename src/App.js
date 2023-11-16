import React from 'react'
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EventsAndPrograms from './pages/EventsAndPrograms';
import WorkshopRecords from './pages/WorkshopRecords';

export const HOMEPAGE_URL = '/';
export const EVENTS_AND_PROGRAMS_URL = '/events-and-programs';
export const WORKSHOP_RECORDS_URL = '/workshop-records';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOMEPAGE_URL} element={<HomePage />} />
        <Route path={EVENTS_AND_PROGRAMS_URL} element={<EventsAndPrograms />} />
        <Route path={WORKSHOP_RECORDS_URL} element={<WorkshopRecords />} />
      </Routes>
    </BrowserRouter>
  )
}
