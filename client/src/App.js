import './App.css';
import { Link, Outlet } from 'react-router-dom'


function App() {
  
  return (
    <div className='border'>
      <nav>
        <Link to='/'>Home</Link> - {' '}
        <Link to='/ranches'>Ranches</Link> - {' '}
        <Link to='/about'>About</Link> - {' '}
        <Link to='/jobs'>Jobs</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
