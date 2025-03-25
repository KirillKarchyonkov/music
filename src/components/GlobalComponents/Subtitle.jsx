export default function Subtitle({children, text}) {

    return (
        <h2 
            className="font-bold text-[32px] text-white mt-18.5 mb-3.5 ml-13.5"
            >{children}
            <span
                className="text-[#EE10B0]"
                >{text}
            </span>
        </h2>
    )
}

