import Image, { StaticImageData } from "next/image";

type locationCardProps = {
    className: string;
    country: string;
    office: string;
    address1: string;
    address2: string;
    contact: {
        phone: string;
        email: string;
    },
    mapImage: {
        desktop: StaticImageData,
        tablet: StaticImageData,
    }
}

const LocationCard = ({ className, country, office, address1, address2, contact, mapImage }: locationCardProps) => {
    return (
        <div className={className}>
            <div className="bg-cream flex-1 rounded-md overflow-clip flex items-center lg:justify-center">
                <div className="flex flex-col space-y-6 p-20 lg:p-0">
                    <h3 className="text-peach text-[40px]
                leading-12">{country}</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-40 lg:gap-x-10">
                        <div className="leading-6.5">
                            <h5 className="font-bold">{office}</h5>
                            <p>{address1}</p>
                            <p>{address2}</p>
                        </div>

                        <div className="leading-6.5">
                            <h5 className="font-bold">Contact</h5>
                            <p>P : {contact.phone}</p>
                            <p>M : {contact.email}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative h-81.5 w-full rounded-md md:hidden lg:block lg:w-87.5">
                <Image
                    src={mapImage.desktop}
                    alt="Canada"
                    loading="eager"
                    fill
                    sizes="(min-width: 1024px) 350px, 100vw"
                    className="rounded-md object-cover"
                />
            </div>

            <Image
                src={mapImage.tablet}
                alt="Canada tablet"
                loading="eager"
                className="md:block w-full h-81.5
                lg:hidden hidden rounded-md overflow-clip aspect-629/326" />
        </div>
    )
}

export default LocationCard;
