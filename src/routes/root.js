import { Link } from 'react-router-dom'

const Root = () => {
  console.log(process.env.REACT_APP_BACKEND_API)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Momi Foundation Coding</h1>
        <h1>Coming Soon</h1>
        <Link to="curriculum" relative="path" className='link'>
          <p>Check Curriculum</p>
        </Link>
      </header>
    </div>
  );
}

export default Root;
