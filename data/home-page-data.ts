
import AppDesign from "@/public/assets/home/desktop/image-app-design.jpg";
import WebDesign from "@/public/assets/home/desktop/image-web-design-large.jpg";
import WebDesignSmall from "@/public/assets/home/desktop/image-web-design-small.jpg";
import GraphicDesign from "@/public/assets/home/desktop/image-graphic-design.jpg";


import PassionateSvg from "@/public/assets/home/desktop/illustration-passionate.svg"
import FriendlySvg from "@/public/assets/home/desktop/illustration-friendly.svg"
import ResourcefulteSvg from "@/public/assets/home/desktop/illustration-resourceful.svg"

export const heroSectionContent = {
    headerText: "Award-winning custom designs and digital branding solutions",
    headerSubText: "With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services."
}

export const homePageProjectCardData = [
    { mobileImage: WebDesignSmall, image: WebDesign, title: "Web Design", url: "/web-design", featured: true },
    { image: AppDesign, title: "App Design", url: "/app-design", featured: false },
    { image: GraphicDesign, title: "Graphic Design", url: "/graphic-design", featured: false }
]

export const projectValueData = [
    { 
        svg: PassionateSvg,
        valueTitle: "PASSIONATE",
        context:  "Each project starts with an in-depth brand research to ensure we only\
        create products that serve a purpose.We merge art, design, and technology into exciting new solutions.",
    },


    { 
        svg: ResourcefulteSvg,
        valueTitle: "RESOURCEFUL",
        context:  "Everything that we do has a strategic purpose. We use an agile approach in all of\
        our projects and value customer collaboration.It guarantees superior results that fulfill our clients’ needs.",
    },

    { 
        svg: FriendlySvg ,
        valueTitle: "FRIENDLY",
        context:  " We are a group of enthusiastic folks who know how to put people first. Our success\
        depends on our customers, and we strive to give them the best experience a company can provide."
    },
]



