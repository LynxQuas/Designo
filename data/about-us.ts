import Canada from "@/public/assets/shared/desktop/illustration-canada.svg"
import Australia from "@/public/assets/shared/desktop/illustration-australia.svg"
import UnitedKingdom from "@/public/assets/shared/desktop/illustration-united-kingdom.svg"

import AboutUsImage from "@/public/assets/about/desktop/image-about-hero.jpg";
import AboutUsImageTablet from "@/public/assets/about/tablet/image-about-hero.jpg";
import AboutUsImageMobile from "@/public/assets/about/mobile/image-about-hero.jpg";


import RealDealImage from "@/public/assets/about/desktop/image-real-deal.jpg";
import RealDealImageTablet from "@/public/assets/about/tablet/image-real-deal.jpg";
import RealDealImageMobile from "@/public/assets/about/mobile/image-real-deal.jpg";


import WorldClassTalentImage from "@/public/assets/about/desktop/image-world-class-talent.jpg";
import WorldClassTalentImageTablet from "@/public/assets/about/tablet/image-world-class-talent.jpg";
import WorldClassTalentImageMobile from "@/public/assets/about/mobile/image-world-class-talent.jpg";


export const aboutContent = {
    section1: {
        headerText: "About Us",
        subText: "Founded in 2010, we are a creative agency that produces lasting results\
        for our clients. We’ve partnered with many startups, corporations, and nonprofits \
        alike to craft designs that make real impact. We’re always looking forward to creating\
        brands, products, and digital experiences that connect with our clients’ audiences.",

        image: {
            desktop: AboutUsImage,
            tablet: AboutUsImageTablet,
            mobile: AboutUsImageMobile
        },
    },

    section2: {
        headerText: "World-class talent",
        subText: "We are a crew of strategists, problem-solvers, and technologists.\
            Every design is thoughtfully crafted from concept to launch, ensuring success in its given market.\
            We are constantly updating our skills in a myriad of platforms",

        subText2: "Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important.\
            We give great importance to craftsmanship, service, and prompt delivery.\
            Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.",

        image: {
            desktop: WorldClassTalentImage,
            tablet: WorldClassTalentImageTablet,
            mobile: WorldClassTalentImageMobile
        }
    },

    section3: {
        headerText: "The real deal",
        subText: "As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.\
          Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity.\
          We make design and technology more accessible and give you tools to measure success.\
          We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies,\
          we inspire audiences to take action and drive real results.",

        subText2: " We are visual storytellers in appealing and captivating ways.\
            By combining business and marketing strategies, we inspire audiences to take action and drive real results.",
        image: {
            desktop: RealDealImage,
            tablet: RealDealImageTablet,
            mobile: RealDealImageMobile
        }
    }
}

export const locations = [
    {
        svg: Canada,
        href: "/locations",
        label: "canada"
    },

    {
        svg: Australia,
        href: "/locations",
        label: "Australia",
    },

    {
        svg: UnitedKingdom,
        href: "/locations",
        label: "United Kingdom"
        
    }
]
