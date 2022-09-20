import Form from '../ui/Form';
import Input from '../ui/Input';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const GeneralSettings = () => {
    return (
        <Form method = "post" action="route('user.updateProfile')" file = "true">
            <div className = "flex flex-wrap -mx-4 -mb-4 md:mb-0">
                <div className = "w-full px-4 mb-4 md:mb-0 md:w-1/2">
                    <div className = "h-full flex flex-col items-center justify-center relative" x-data="avatarComponentData()">
                        <img className = "rounded-full object-cover" src="./images/avatar.png" style = {{ "width": "150px", "height": "150px" }} alt = "Not Found" />
                        <label htmlFor="avatar" title="Select New Avatar" className = "relative">
                            <FontAwesomeIcon className = "rounded-full text-white bg-blue-600 absolute fa-pencil cursor-pointer" style = {{"fontSize": "12px", "padding": "8px", "right": "-72px", "bottom": "94px"}} icon = { faPen }></FontAwesomeIcon>
                        </label>
                        <input type="file" className = "hidden" name="avatar" id="avatar" />
                        <div className = "relative text-center">
                            Vivek Joshi
                            <br />
                            <span className = "text-sm italic">(MIT2021114)</span>
                        </div>
                    </div>
                </div>
                <div className = "w-full px-4 md:mb-0 md:w-1/2">
                    <Input name = "first_name" label = "First Name"></Input>
                    <Input name = "last_name" label = "Last Name"></Input>
                    <Input type = "email" className = "" readOnly = { true }  name = "email" label = "Email"></Input>
                    <Input type = "number" className = "" name = "phoneNo" label = "Phone Number"></Input>
                </div>
            </div>
            <div className = "flex justify-end">
                <button type="submit" className = "right-0 inline-block py-1 px-4 leading-loose bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition duration-200 text-sm">Save Changes</button>
            </div>
        </Form>
    );
}

export default GeneralSettings;