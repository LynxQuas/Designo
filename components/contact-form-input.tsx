type ContactFormInputProps = {
    placeholder: string;
    name: string;
}
const ContactFormInput = ({placeholder, name}: ContactFormInputProps) => {

    return (
        <input
        placeholder={placeholder}
        name={name}
        id={name}
        autoComplete="off"
            className="w-full px-2 py-2 border-0 outline-none ring-0
             focus:ring-offset-0 border-b border-white"
        />
    )
}

export default ContactFormInput;
