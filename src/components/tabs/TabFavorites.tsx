interface TabFavoritesProps {
    children: React.ReactNode;
}

export default function TabFavorites({children}: TabFavoritesProps)  {

    return (
        <h2 
            className="font-semibold text-3xl text-[#EE10B0] opacity-60 my-6 mx-auto text-center uppercase"
            >
            {children}
        </h2>
    )
}