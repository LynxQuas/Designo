import Image, { StaticImageData } from "next/image";

type Loading = "eager" | "lazy" | undefined

type CustomImageProps = {
    src: StaticImageData,
    alt: string;
    width: number;
    height: number;
    loading: Loading;
    className: string;
}

const CustomImage = ({src, alt, width, height, loading, className}: CustomImageProps) => {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            className={className}
        />
    )
}

export default CustomImage;
