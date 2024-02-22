import { Route, Routes } from 'react-router';
import './App.css';
import MainContainer from './Components/MainContainer/MainContainer';
import HomeWrapper from './Pages/HomeWrapper/HomeWrapper';
import MovieTVPage from './Components/MovieTVPage/MovieTVPage';
// import MainContent from './Components/MainContent/MainContent';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeWrapper/>}>
        <Route index element={<MainContainer/>}/>
        <Route path=':cat' element={<MovieTVPage/>}/>
        <Route path=':cat' element={<MovieTVPage/>}/>
      </Route>
    </Routes>
    )
}

export default App;
