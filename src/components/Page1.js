import logo from '../logo.svg';

const Page1 = ({ onRouteChange }) => {
	return(
			<div className="App">
		      <header className="App-header">
		        <img src={logo} className="App-logo" alt="logo" />
		        <h1 className='app-title'>Welcome to react</h1>
		      </header>
		      <button className='disabled'>Page1</button>
		      <button onClick={() => onRouteChange('page2')}>Page2</button>
		      <button onClick={() => onRouteChange('page3')}>Page3</button>
		    </div>
		);
}

export default Page1