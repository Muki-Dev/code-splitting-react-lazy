import logo from '../logo.svg';

const Page3 = ({ onRouteChange }) => {
	return(
			<div className="App">
		      <header className="App-header">
		        <img src={logo} className="App-logo" alt="logo" />
		        <h1 className='app-title'>Welcome to react</h1>
		      </header>
		      <button onClick={() => onRouteChange('page1')}>Page1</button>
		      <button onClick={() => onRouteChange('page2')}>Page2</button>
		      <button className='disabled'>Page3</button>
		    </div>
		);
}

export default Page3