import Link from "next/link"

const ContactCta = () => {
    return (
        <div className="bg-peach isolate z-10 lg:px-23.75 lg:py-18 mt-32.75 rounded-md p-14.5 mx-6 md:mx-0">
            <div className="flex justify-between items-center flex-col lg:flex-row">
                <div className="lg:w-1/2 text-white space-y-6 my-4">
                    <h3 className="font-medium text-[40px] text-center
                    leading-10 lg:text-start">Let’s talk about your project</h3>
                    <p className="leading-6.5 text-center lg:text-start
                    ">Ready to take it to the next level? Contact us today and find out
                        how our expertise can help your business grow.</p>
                </div>

                <Link href="/contact" className="text-center bg-white text-black p-4.5 rounded-sm cursor-pointer hover:cursor-pointer uppercase hover:bg-peach-light hover:text-white">get in touch</Link>
            </div>
        </div>
    )
}

export default ContactCta
