import HeroSection from "@/components/hero-section";
import ProjectCard from "@/components/project-card";
import ValueCard from "@/components/value-card";
import ContactCta from "@/components/contact-cta";
import { homePageProjectCardData, projectValueData } from "@/data/home-page-data";

export default function Home() {
    return (
        <section className="">
            <HeroSection />

            <div className="mx-6 md:mx-0 grid pt-20 grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-x-7.5 gap-y-6">
                {homePageProjectCardData.map((cardData) => (
                    <ProjectCard
                        mobileImage={cardData.mobileImage}
                        key={cardData.title}
                        className={`${cardData.featured ? "md:row-span-2 " : ""}`}
                        title={cardData.title}
                        url={cardData.url} backgroundImage={cardData.image} />
                ))}
            </div>

            <div className="grid grid-cols-1 mx-6 md:mx-0 lg:grid-cols-3 gap-y-20 md:gap-y-8 lg:gap-x-8 mt-40">
                {projectValueData.map((data) => (
                    <ValueCard
                        key={data.valueTitle}
                        svg={data.svg}
                        valueTitle={data.valueTitle}
                        context={data.context}
                    />
                ))}
            </div>

            <ContactCta />
        </section>
    );
}
