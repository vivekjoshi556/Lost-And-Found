import { useContext, useState } from "react";

import React from "react";
import DegreeInput from "../ui/DegreeInput";
import Email from "../ui/Email";
import Input from "../ui/Input";
import Password from "../ui/Password";
import SignupMessage from "./SignupMessage";
import Button  from "../ui/Button";
import Form from "../ui/Form";
import { AuthContext } from "../contexts/authContext";
import { Link } from "react-router-dom";

const SignupIndex = () => 
{
    const authCntxt = useContext(AuthContext);
    const[user, setUser] = useState({
        name:"", email:"", degree:"", password:"",
    });

    let name,value;
    const handleInputs = (e) =>
    {
      name = e.target.name;
      value = e.target.value;
    
      setUser({ ...user, [name]: value})
    };

    const postData = async (e) => {
      e.preventDefault();
  
        const { name, email, degree, password } = user;

        const resp = await fetch(`${ process.env.REACT_APP_SERVER_URL }api/v1/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                degree,
                password,
            }),
        });

      const data = await resp.json();

        console.log(data);
        if (data.status === 400 || !data) {
            window.alert("Invalid Registration");
        } else {
            authCntxt.login(data.token, data.user_id);
        }
    };
    return (
        <div className="bg-[#DBF4F9] min-h-screen grid grid-cols-1 md:grid-cols-2">
            <SignupMessage></SignupMessage>
            <Form submitHandler = { postData } method="POST" className="bg-white h-fit pt-10 pb-10 my-auto w-7/12 mx-auto" >
                <Input label = "Firstname" name = "name" className="mb-5" value={user.name} onChange={handleInputs} />
                <Email value = {user.email} onChange={handleInputs} label="Email" name = "email" className="mb-5"></Email>
                <DegreeInput name = "degree" value = { user.degree } onChange={handleInputs} label="Degree"> </DegreeInput>
                <Password name = "password" value = { user.password } onChange={handleInputs}> </Password>
                
                <Button type = "submit" className="mx-auto mb-0">
                    Signup
                </Button>
				<h1>Already have an account!</h1>
				<Link to="/login">Log In</Link>
            </Form>
        </div>
    );
};

export default SignupIndex;