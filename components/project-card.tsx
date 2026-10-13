import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ProjectCardProps = {
    backgroundImage: StaticImageData;
    title: string;
    url: string;
    className?: string;
    mobileImage?: StaticImageData
}

const ProjectCard = ({ backgroundImage, title, url, className, mobileImage }: ProjectCardProps) => {
    return (
        <div className={`${className} group relative overflow-hidden rounded-md`}>
            {mobileImage && (
                <Image
                    src={mobileImage}
                    alt={title}
                    width={500}
                    height={300}
                    loading="eager"
                    className="h-full w-full object-cover md:hidden"
                />
            )}

            <Image
                src={backgroundImage}
                alt={title}
                width={500}
                height={300}
                loading="eager"
                className={`h-full w-full object-cover ${mobileImage ? "hidden md:block" : ""
                    }`}
            />

            <div className="absolute inset-0 bg-black/60 transition-colors duration-300 group-hover:bg-peach/60" />

            <div className="absolute flex flex-col inset-0 z-10 items-center justify-center">
                <h2 className="text-white font-medium leading-12 tracking-[2px] text-3xl">{title.toUpperCase()}</h2>
                <Link className="text-white text-xs tracking-[2px] leading-12" href={url}>VIEW PROJECT</Link>
            </div>
        </div>
    )
}

export default ProjectCard;
