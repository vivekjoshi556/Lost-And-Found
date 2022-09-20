import Input from '../ui/Input';
import Form from '../ui/Form';
import Textarea from '../ui/Textarea';

const ContactForm = () => {
    return (
        <section className = "relative bg-opacity-0 py-5">
            <div className = "w-full lg:w-1/2 px-4 mx-auto">
                <Form className = "bg-opacity-50 border-gray-100 backdrop-blur-lg p-12" action = "" method = "post">
                    <h3 className = "text-sm font-semibold font-heading dark:text-blue-100 text-orange-800">{ "Got Something In Mind?" }</h3>
                    <span className = "mb-8 text-5xl inline-block text-gray-700 dark:text-gray-200 font-bold">Contact Us</span>
                    
                    <Input label = "Name" name = "name"></Input>
                    <Input type = "email" label = "Email" name = "email"></Input>
                    <Input label = "Subject" name = "subject"></Input>
                    <Textarea placeholder = "What's on your mind?" name = "description"></Textarea>

                    <button className = "w-full inline-block py-4 text-sm text-white font-medium leading-normal bg-red-400 hover:bg-red-500 rounded transition duration-200">Send</button>
                </Form>
            </div>
        </section>
    );
}

export default ContactForm;