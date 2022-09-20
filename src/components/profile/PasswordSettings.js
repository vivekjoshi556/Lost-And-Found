import Form from '../ui/Form';
import Password from '../ui/Password'

const PasswordSettings = () => {
    return (
        <Form method="post" action="route('user.changePassword')">
            <div className = "flex flex-wrap -mx-4 -mb-4 md:mb-0">
                <Password name = "old_pass" label = "Enter Old Password"></Password>
                <Password className1 = "w-full pr-1 md:w-1/2" name = "new_pass" label = "Enter New Password"></Password>
                <Password className1 = "w-full pl-1 md:w-1/2" name = "confirm_new_pass" label = "Confirm New Password"></Password>
            </div>
            <div className = "flex justify-end">
                <button type="submit" className = "right-0 inline-block py-1 px-4 leading-loose bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition duration-200 text-sm">Hello There</button>
            </div>
        </Form>
    );
}

export default PasswordSettings;