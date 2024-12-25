import './AsideSectionButton.css'

export default function AsideSectionButton({children, src, onClick, className})  {

    return (
        <button
            type='button'
            className={className}
            onClick={onClick}
        >
            <img src={src} alt="#" />
            <div>{children}</div>
        </button>
    )
}