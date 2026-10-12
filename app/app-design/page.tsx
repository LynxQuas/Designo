import Card from "@/components/card";
import ContactCta from "@/components/contact-cta";
import ProjectCard from "@/components/project-card";
import ProjectHeader from "@/components/project-header";
import { appDesignCardData, content } from "@/data/app-design";
import { homePageProjectCardData } from "@/data/home-page-data";


const AppDesignPage = () => {
    const filteredCardData = homePageProjectCardData.filter((data) => data.url !== "/app-design");

    return (
        <section className="">
            <ProjectHeader headerText={content.headerText} headerSubText={content.headerSubText} />
            <Card cardData={appDesignCardData} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7.25 md:mt-40 mt-20 mx-6 md:mx-0">
                {filteredCardData.map((data) => (
                    <ProjectCard
                        key={data.url}
                        className="aspect-5/3"
                        url={data.url}
                        title={data.title}
                        backgroundImage={data.image}
                        mobileImage={data.mobileImage}
                    />
                ))}
            </div>

            <ContactCta />
        </section>
    )
}

export default AppDesignPage;
