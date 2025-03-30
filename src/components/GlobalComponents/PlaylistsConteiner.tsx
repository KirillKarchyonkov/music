interface PlaylistsConteinerProps {
    children: React.ReactNode;
}

export default function PlaylistsConteiner({children}: PlaylistsConteinerProps) {

    return (
        <section 
            className="flex w-full h-[245px] pt-[31px] pb-3.5 pl-13.5 justify-between"
            >
            {children}
        </section>
    )
}