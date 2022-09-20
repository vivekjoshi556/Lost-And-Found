import Button from "../ui/Button";
import Input from "../ui/Input";

import Password from "../ui/Password";
import LoginMessage from "./LoginMessage";
import { AuthContext } from "../contexts/authContext";
import { useContext, useState } from "react";
import Form from "../ui/Form";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';


const LoginIndex = () => {
	let name,value;
	const authCntxt = useContext(AuthContext);

	const[user, setUser] = useState({
		email:"", password:"",
	});

	const handleInputslogin = (e) => {
		name = e.target.name;
		value = e.target.value;
	
		setUser({ ...user, [name]: value})
	};

	const postDatalogin = async (e) => {
		e.preventDefault();

		const { email, password  } = user;

		const response = await fetch(`${ process.env.REACT_APP_SERVER_URL }api/v1/auth/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});
		const data = await response.json();

		console.log("Data", data);
		if (data && response.status === 200)
			authCntxt.login(data.token, data.user.user_id, data.user.email, data.user.name);
		else
			toast.error(data.msg);
	};

	return (
		<div className="bg-[#DBF4F9] min-h-screen grid grid-cols-1 md:grid-cols-2 pt-24">
			<LoginMessage></LoginMessage>
			<Form submitHandler = { postDatalogin } className="bg-white h-fit pt-20 pb-10 w-7/12 mx-auto my-auto">
				<Input onChange={handleInputslogin} name = "email" label="Username" className="mb-5" />
				<Password onChange={handleInputslogin} name = "password" placeholder="Password"/>

				<div className="text-right text-xs relative bottom-4">
					<a href="www.google.com"> Forgot Password?</a>
				</div>

				<Button type = "submit" className="mx-auto mb-2">LOGIN</Button>
				<h1>Don't have an account!</h1>
				<Link to="/signUp">Register</Link>
			</Form>
		</div>
	);
};

export default LoginIndex;
