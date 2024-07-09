import React, {useState, useEffect} from 'react'
import "./Signup.css"
import { Link , useNavigate} from 'react-router-dom'
import Axios from "axios"

const Alert = () => {
	
	return (
		<div class="block text-xs font-semibold text-red-600 ">
			User Already Exist!
		</div>
	);
}

const Signup = () => {
	const [User, setUser] = useState({
		firstname: '',
		lastname: '',
		email: '',
		password:''
	})

	const [alert, setAlert] = useState(false);

	const navigate = useNavigate();

	const inputHandle = (e) => {
		const { name, value } = e.target;
		
		setUser({
			...User,
			[name]:value
		})
	}

	const submitHandle = async (e) => {
		e.preventDefault();
		setAlert(false);
		
		let user = JSON.stringify(User);
		try {
			const  response = await  Axios.post("http://localhost:4000/signup", {user});
			if(response.request.status == 201)
				navigate("/");
			if (response.request.status == 250)
				setAlert(true);
		} catch (err) {
			console.log(err);
		}

	}
   
	return (
		<div className="dark-theme">
			<div class="grid min-h-screen place-items-center ">
				<div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12 signup-form">
					<h1 class="text-xl font-semibold ">
						<span class="font-normal">
							Please fill in your information to continue !
						</span>
					</h1>

					<form class="mt-6" onSubmit={submitHandle}>
						<div class="flex justify-between gap-3">
							<span class="w-1/2">
								<label
									for="firstname"
									class="block text-xs font-semibold text-gray-600 uppercase"
								>
									Firstname
								</label>
								<input
									id="firstname"
									type="text"
									name="firstname"
									placeholder="John"
									autocomplete="given-name"
									class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
									required
									onChange={inputHandle}
								/>
							</span>
							<span class="w-1/2">
								<label
									for="lastname"
									class="block text-xs font-semibold text-gray-600 uppercase"
								>
									Lastname
								</label>
								<input
									id="lastname"
									type="text"
									name="lastname"
									placeholder="Doe"
									autocomplete="family-name"
									class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
									required
									onChange={inputHandle}
								/>
							</span>
						</div>
						<label
							for="email"
							class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
						>
							E-mail
						</label>
						<input
							id="email"
							type="email"
							name="email"
							placeholder="john.doe@company.com"
							autocomplete="email"
							class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
							required
							onChange={inputHandle}
						/>
						{alert && <Alert />}
						<label
							for="password"
							class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
						>
							Password
						</label>
						<input
							id="password"
							type="password"
							name="password"
							placeholder="********"
							autocomplete="new-password"
							class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
							required
							onChange={inputHandle}
						/>
						<label
							for="password-confirm"
							class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
						>
							Confirm password
						</label>
						<input
							id="password-confirm"
							type="password"
							name="password-confirm"
							placeholder="********"
							autocomplete="new-password"
							class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
							required
							onChange={inputHandle}
						/>
						<button
							type="submit"
							class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none signup-btn"
						>
							Sign up
						</button>
						<p class="flex justify-between mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
							<Link to="/">Already registered?</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup