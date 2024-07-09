import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';
import Dashboard from "./component/Dashboard/Dashboard";
import UserProvider from './context/UserContext'

function App() {

  return (
		<>
			<BrowserRouter>
				<UserProvider>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
						<Route
							path="/dashboard"
							element={<Dashboard />}
						/>
					</Routes>
				</UserProvider>
			</BrowserRouter>
		</>
  );
}

export default App;
