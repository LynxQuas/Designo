import ContactCta from "@/components/contact-cta";
import LocationCard from "@/components/location-card";
import { locations } from "@/data/locations";

const Locations = () => {
    const [location1, location2, location3] = locations;
    return (
        <section className="">
            <div className="flex flex-col gap-y-8 md:gap-y-30 lg:gap-y-8">
                <LocationCard
                    className="flex flex-col-reverse lg:flex-row w-full lg:gap-7.5 md:gap-7.5"
                    office={location1.office}
                    country={location1.country}
                    mapImage={location1.mapImage}
                    address1={location1.address1}
                    address2={location1.address2}
                    contact={location1.contact}
                />

                <LocationCard
                    className="flex flex-col-reverse lg:flex-row-reverse w-full lg:gap-7.5 md:gap-7.5"
                    office={location2.office}
                    country={location2.country}
                    mapImage={location2.mapImage}
                    address1={location2.address1}
                    address2={location2.address2}
                    contact={location2.contact}
                />

                <LocationCard
                    className="flex flex-col-reverse lg:flex-row w-full lg:gap-7.5 md:gap-7.5"
                    office={location3.office}
                    country={location3.country}
                    mapImage={location3.mapImage}
                    address1={location3.address1}
                    address2={location3.address2}
                    contact={location3.contact}
                />
            </div>
            <ContactCta />
        </section>
    )
}

export default Locations;
