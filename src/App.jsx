import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { supabase } from './supabaseClient'
import { useEffect } from 'react'
import Master from './pages/Master'
import MainLayout from './layouts/MainLayout'
import Menu from './pages/Menu'
import Category from './pages/Category'

function App() {
 return <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route path="master" element={<Master />} />
        <Route path="menu" element={<Menu />} />
        <Route path="category" element={<Category />} />
        {/* <Route path="task" element={<Task />} /> */}
        {/* <Route path="transaction" element={<Transaction />} /> */}
        {/* <Route path="history-trading" element={<HistoryTrading />} /> */}
        {/* <Route path="notes" element={<Notes />} /> */}
        </Route>
      </Routes>
}

export default App
 