import './App.css';
import {Link,Outlet} from 'react-router-dom'
import Bad from '../src/images/Bad.png'


function App() {
  
  return (
    <div className='border'>
      
      <nav>
        
        <Link className='link' to='/'>Home</Link> {' '}
        <Link className='link' to='/ranches'>Ranches</Link>  {' '}
        <Link className='link' to='/about'>About</Link>  {' '}
        <Link className='link' to='/jobs'>Jobs</Link>
        <div>
        <img className='logo' src={Bad} height={500} />
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
