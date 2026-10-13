type AboutTextContainerProps = {
    headerText: string;
    subText: string;
    subText2?: string;
    className?: string;
    headerTextColor?: string;
}

const AboutTextContainer = ({headerText,className, subText, subText2, headerTextColor}: AboutTextContainerProps) => {
    return (
        <div className={className}>
            <h2 className={`text-3xl leading-tight md:text-4xl xl:text-5xl ${headerTextColor}`}>
                {headerText}
            </h2>

            <p className="leading-7">{subText}</p>

            {subText2 && <p className="leading-7">{subText2}</p>}
        </div>
    )
}

export default AboutTextContainer;
