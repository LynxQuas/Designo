import HeroSection from "@/components/hero-section";
import ProjectCard from "@/components/project-card";

import AppDesign from "@/public/assets/home/desktop/image-app-design.jpg";
import WebDesign from "@/public/assets/home/desktop/image-web-design-large.jpg";
import WebDesignSmall from "@/public/assets/home/desktop/image-web-design-small.jpg";
import GraphicDesign from "@/public/assets/home/desktop/image-graphic-design.jpg";

import PassionateSvg from "@/public/assets/home/desktop/illustration-passionate.svg"
import FriendlySvg from "@/public/assets/home/desktop/illustration-friendly.svg"
import ResourcefulteSvg from "@/public/assets/home/desktop/illustration-resourceful.svg"
import ValueCard from "@/components/value-card";
import ContactCta from "@/components/contact-cta";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <section className="">
            <HeroSection />

            <div className="mx-6 md:mx-0 grid pt-20 grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-x-7.5 gap-y-6">
                <ProjectCard className="md:hidden" backgroundImage={WebDesignSmall} title="Web Design" url="/web-design" />
                <ProjectCard className="md:row-span-2 hidden md:block row-span-1" backgroundImage={WebDesign} title="Web design" url="/web-design" />
                <ProjectCard backgroundImage={AppDesign} title="App design" url="/app-design" />
                <ProjectCard backgroundImage={GraphicDesign} title="Graphic Design" url="/graphic-design" />
            </div>

            <div className="grid grid-cols-1 mx-6 md:mx-0 lg:grid-cols-3 gap-y-20 md:gap-y-8 lg:gap-x-8 mt-40">
                <ValueCard
                    svg={PassionateSvg}
                    valueTitle="PASSIONATE"
                    context="Each project starts with an in-depth brand research to ensure we only create products
                 that serve a purpose. We merge art, design, and technology into exciting new solutions." />

                <ValueCard
                    svg={ResourcefulteSvg}
                    valueTitle="RESOURCEFUL"
                    context="Everything that we do has a strategic purpose. We use an agile approach in all of
                    our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
                />

                <ValueCard
                    svg={FriendlySvg}
                    valueTitle="FRIENDLY"
                    context=" We are a group of enthusiastic folks who know how to put people first. 
                    Our success depends on our customers, and we strive to give them the best experience a company can provide."
                />
            </div>
            <ContactCta/>
        </section>
    );
}
