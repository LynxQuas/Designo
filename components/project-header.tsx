type ProjectHeaderProps = {
    headerText: string;
    headerSubText: string;
}
const ProjectHeader = ({headerText, headerSubText}: ProjectHeaderProps) => {
    return (
        <div className="bg-peach w-full md:rounded-md flex items-center justify-center">
            <div className="text-white text-center py-16 lg:w-2/5 md:w-1/2 w-full space-y-6">
                <h2 className="text-[48px] leading-12">{headerText}</h2>
                <p className="leading-6.5">{headerSubText}</p>
            </div>
        </div>

    )
}

export default ProjectHeader;
