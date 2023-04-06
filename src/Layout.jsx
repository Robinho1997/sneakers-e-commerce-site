import Navbar from './components/Navbar'
import Footer from './components/Footer'

function Layout(props) {
    return (
      <div className='app'>
        <Navbar/>
          <div>{props.children}</div>
        <Footer/>
      </div>
    )
  }
  
  export default Layout