
export default function PlaylistsConteiner({children}) {

    return (
        <section style={
            {
            display: "flex", 
            height: "214px",  
            margin: "31px 0 14px 54px", 
            justifyContent: "space-between",
            }}>
            {children}
        </section>
    )
}