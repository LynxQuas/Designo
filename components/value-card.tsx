import Image, { StaticImageData } from "next/image";

type ValueCardProps = {
    svg: StaticImageData;
    valueTitle: string;
    context: string;
}

const ValueCard = ({ svg, valueTitle, context }: ValueCardProps) => {
    return (
        <div className="flex flex-col items-center justify-center md:flex-row md:gap-x-12 lg:flex-col ">
            <Image src={svg} width={188} height={168} loading="eager" alt={valueTitle}  className="w-auto h-auto" />

            <div className="flex flex-col gap-y-8 items-center md:items-start lg:items-center">
                <h3 className="text-[20px] font-medium leading-6.5 tracking-[5px]">{valueTitle.toUpperCase()}</h3>
                <p className="leading-4 md:leading-6.5 text-center md:text-start lg:text-center">
                    {context}
                </p>
            </div>
        </div>
    )
}

export default ValueCard;
