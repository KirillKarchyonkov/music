interface AsideSectionTitleProps {
    children: React.ReactNode;
}

export default function AsideSectionTitle({children}: AsideSectionTitleProps)  {

    return (
        <h2 
            className="font-light text-xs text-[#EE10B0]/60 mt-6"
            >
            {children}
        </h2>
    )
}