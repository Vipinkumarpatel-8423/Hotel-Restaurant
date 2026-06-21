import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import AppRoutes from './routes/AppRoutes'
import WhatsAppButton from './components/layout/WhatsAppButton'
const App = () => {
  return (
    <>
    <Header/>
    <AppRoutes/>
    <Footer/>

    <WhatsAppButton />
    </>
  )
}

export default App