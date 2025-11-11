import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { supabase } from './supabaseClient'
import { useEffect } from 'react'
import Master from './pages/Master'
import MainLayout from './layouts/MainLayout'

function App() {
 return <Routes>
        <Route path="/" element={<MainLayout />}>
        {/* Ini isi <Outlet /> */}
        <Route path="master" element={<Master />} />
        {/* <Route path="task" element={<Task />} /> */}
        {/* <Route path="transaction" element={<Transaction />} /> */}
        {/* <Route path="history-trading" element={<HistoryTrading />} /> */}
        {/* <Route path="notes" element={<Notes />} /> */}
        </Route>
      </Routes>
}

export default App
 