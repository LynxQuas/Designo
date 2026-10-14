import CanadaMapImage from "@/public/assets/locations/desktop/image-map-canada.png"
import CanadaMapImageTablet from "@/public/assets/locations/tablet/image-map-canada.png"

import AustraliaMapImage from "@/public/assets/locations/desktop/image-map-australia.png"
import AustraliaMapImageTablet from "@/public/assets/locations/tablet/image-map-australia.png"

import UnitedKingdomMapImage from "@/public/assets/locations/desktop/image-map-united-kingdom.png"
import UnitedKingdomMapImageTablet from "@/public/assets/locations/tablet/image-map-uk.png"

export const locations = [
    {
        country: "Canada",
        office: "Designo Central Office",
        address1: "3886 Wellington Street",
        address2: "Toronto Ontario M9C 3J5",
        contact: {
            phone: "+1 253-863-8967",
            email: "contact@designo.co",
        },
        mapImage: {
            desktop: CanadaMapImage,
            tablet: CanadaMapImageTablet
        }
    },

    {
        country: "Australia",
        office: "Designo AU Office",
        address1: "19 Balonne Street",
        address2: "New South Wales 2443",
        contact: {
            phone: "(02) 6720 9092",
            email: "contact@designo.au",
        },
        mapImage: {
            desktop: AustraliaMapImage,
            tablet: AustraliaMapImageTablet
        }
    },

    {
        country: "United Kingdom",
        office: "Designo UK Office",
        address1: "13 Colorado Way",
        address2: "Rhyd-y-fro SA8 9GA",
        contact: {
            phone: "078 3115 1400",
            email: "contact@designo.uk",
        },
        mapImage: {
            desktop: UnitedKingdomMapImage,
            tablet: UnitedKingdomMapImageTablet
        },
    },
];

