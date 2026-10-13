import Image from "next/image";
import type { StaticImageData } from "next/image";
import AboutTextContainer from "@/components/about-text-container";

type AboutSectionProps = {
    headerText: string;
    subText: string;
    subText2?: string;
    image: {
        desktop: StaticImageData;
        tablet: StaticImageData;
        mobile: StaticImageData;
    };
    theme?: "peach" | "cream";
    reverseOnDesktop?: boolean;
    loading?: "eager" | "lazy";
};

const AboutSection = ({
    headerText,
    subText,
    subText2,
    image,
    theme = "cream",
    reverseOnDesktop = false,
    loading = "eager",
}: AboutSectionProps) => {
    const isPeach = theme === "peach";

    return (
        <div
            className={`flex flex-col-reverse overflow-clip md:rounded-md lg:flex-row ${isPeach ? "bg-peach" : "bg-cream"
                } ${reverseOnDesktop ? "lg:flex-row-reverse" : ""
                }`}
        >
            <AboutTextContainer
                className={`flex min-w-0 flex-1 flex-col justify-center gap-y-8 px-8 py-20 text-center md:px-14.5 md:py-16 lg:px-8 xl:px-20 lg:text-start ${isPeach ? "text-white" : "text-black"
                    }`}
                headerText={headerText}
                headerTextColor={isPeach ? undefined : "text-peach"}
                subText={subText}
                subText2={subText2}
            />

            <Image
                src={image.desktop}
                alt={headerText}
                width={689}
                height={320}
                loading={loading}
                className="hidden w-[40%] shrink-0 object-cover lg:block"
            />

            <Image
                src={image.tablet}
                alt={headerText}
                width={689}
                height={320}
                loading={loading}
                className="hidden h-auto w-full shrink-0 object-cover md:block lg:hidden"
            />

            <Image
                src={image.mobile}
                alt={headerText}
                width={375}
                height={320}
                loading={loading}
                className="block w-full shrink-0 object-cover md:hidden"
            />
        </div>
    );
};

export default AboutSection;
