export default function Subtitle({children, text}) {

    return (
        <h2 style={{
            fontWeight: "700",
            fontSize: "32px",
            color: "#fff",
            margin: "74px 0 14px 54px"
        }}>{children}
        <span style={{
            color: "#EE10B0"
        }} 
        >{text}</span>
        </h2>
    )
}

