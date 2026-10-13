import AboutSection from "@/components/about-section";
import ContactCta from "@/components/contact-cta";
import { aboutContent, locations } from "@/data/about-us";
import Image from "next/image";
import Link from "next/link";

const About = () => {
    return (
        <section>
            <div className="space-y-30">
                <div className="md:space-y-30">
                    <AboutSection
                        loading="eager"
                        theme="peach"
                        {...aboutContent.section1}
                    />

                    <AboutSection
                        theme="cream"
                        reverseOnDesktop
                        {...aboutContent.section2}
                    />

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

                <AboutSection theme="cream" {...aboutContent.section3} />
            </div>

            <ContactCta />
        </section>
    );
};

export default About;
