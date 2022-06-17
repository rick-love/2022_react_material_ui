import 'dotenv/config'
import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import ResponsiveAppBar from './components/ResponsiveAppBar'

// Screens
import HomeScreen from './screens/HomeScreen'


// Theme
import { ThemeProvider } from '@mui/material'
import themeOptions from './assets/theme'
import Map from './screens/Map'



const App =() => {

  return (
    <Router>
      <ThemeProvider theme={themeOptions} >
        <ResponsiveAppBar />
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/about' element={<About />} />
            <Route path='/map' element={<Map />} />
          </Routes>
        </main>
        <Footer />
      </ThemeProvider>
    </Router>
  )
}

export default App
