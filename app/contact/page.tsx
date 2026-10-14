import ContactFormInput from "@/components/contact-form-input";
import { locations } from "@/data/about-us";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
    return (
        <section className="space-y-40 pb-80">
            <div className="flex flex-col gap-10 md:rounded-md bg-peach px-6 py-16 text-white
            md:px-14 md:py-20 lg:flex-row lg:items-center lg:gap-20 lg:pl-24">
                <div className="flex flex-1 flex-col gap-y-6 text-center lg:text-left">
                    <h2 className="text-4xl leading-tight md:text-5xl">
                        Contact Us
                    </h2>
                    <p className="text-base leading-relaxed">
                        Ready to take it to the next level? Let’s talk about your
                        project or idea and find out how we can help your business
                        grow. If you are looking for unique digital experiences
                        that’s relatable to your users, drop us a line.
                    </p>
                </div>

                <form className="flex w-full flex-1 flex-col gap-y-6
                lg:max-w-95">
                    <ContactFormInput placeholder="Name" name="name" />
                    <ContactFormInput placeholder="Email Address" name="email-address" />
                    <ContactFormInput placeholder="Phone" name="phone" />
                    <textarea id="your-message" rows={4} placeholder="Your Message" className="ring-0 outline-none border-b border-white resize-none">
                    </textarea>
                    <button className="tracking-[1px] hover:bg-peach-light hover:text-white cursor-pointer self-end text-[15px] bg-white text-black
                    w-38 py-4 rounded-sm">SUBMIT</button>
                </form>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-1 justify-center-safe">
                {locations.map((location) => (
                    <div className="flex flex-col gap-y-12 items-center justify-center" key={location.label}>
                        <Image src={location.svg} alt={location.label} loading="eager" width={182} height={143} className="w-auto h-auto" />

                        <div className="flex flex-col items-center gap-y-8">
                            <p className="text-[20px] uppercase leading-6.5 tracking-[5px]">{location.label}</p>
                            <Link className="bg-peach text-sm p-4.5 text-white uppercase rounded-sm" href={location.href}>See location</Link>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Contact;
