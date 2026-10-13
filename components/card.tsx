import Image, { StaticImageData } from "next/image"

type CardProps = {
    cardData: {
        image: StaticImageData,
        projectTitle: string;
        projectDescription: string;
    }[]
}

const Card = ({ cardData }: CardProps) => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-y-8 lg:gap-x-8 mt-40 mx-6 md:mx-0">
            {cardData.map((card) => (
                <div className="rounded-sm overflow-clip flex lg:flex-col md:flex-row flex-col" key={card.projectTitle}>
                    <div className="w-full md:w-1/2 lg:w-full aspect-350/320 relative shrink-0">
                        <Image
                            className="object-cover"
                            src={card.image}
                            alt={card.projectTitle}
                            loading="lazy"
                            fill
                            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        />
                    </div>
                    <div className="bg-cream hover:bg-peach hover:text-white flex flex-col gap-4 items-center justify-center flex-1 text-center p-8 text-gray">
                        <h4 className="leading-6.5 tracking-[5px] ">{card.projectTitle}</h4>
                        <p>{card.projectDescription}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card
