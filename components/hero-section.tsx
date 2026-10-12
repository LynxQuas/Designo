import Image from "next/image";
import { heroSectionContent } from "@/data/home-page-data";

const HeroSection = () => {
    return (
        <div className="md:rounded-md bg-peach isolate w-full relative">
            <div className="flex xl:flex-row flex-col items-center justify-center">
                <div className="flex flex-col items-center lg:items-start xl:w-135 gap-10 mx-6 md:mx-15 xl:mx-24 xl:pb-29 xl:pt-36.25 py-15">
                    <p className="text-white font-medium md:text-5xl text-[32px] leading-8 md:leading-12 text-center lg:text-start" >
                        {heroSectionContent.headerText}
                    </p>

                    <p className="text-white tracking-0 leading-6.5 text-center lg:text-start" >
                    {heroSectionContent.headerSubText}
                    </p>

                    <button className="bg-white font-medium tracking-wide text-sm text-gray rounded-sm w-38 py-4.25 px-6.25">LEARN MORE</button>
                </div>

                <div className="h-100 xl:h-auto overflow-hidden flex justify-center items-start">
                    <Image
                        alt="hero image"
                        width={279}
                        loading="eager"
                        height={573}
                        src="/hero-phone-img.png"
                        className="w-auto h-auto xl:mt-40 shrink-0"
                    />
                </div>

            </div>
        </div >
    )
}

export default HeroSection;
