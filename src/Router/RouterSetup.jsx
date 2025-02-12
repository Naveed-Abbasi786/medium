import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import DetailPage from '../Pages/DetailPage'
import WritePage from '../Pages/WritePage'
export default function Router() {
    return (
        <BrowserRouter>
      <Routes>
        <Route  path='/' element={<HomePage/>}/>
        <Route  path='DetailPage' element={<DetailPage/>}/>
        <Route  path='WritePage' element={<WritePage/>}/>

      </Routes>
      </BrowserRouter>
  )
}
