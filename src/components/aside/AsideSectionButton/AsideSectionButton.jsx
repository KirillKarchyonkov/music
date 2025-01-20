import { NavLink } from "react-router-dom";
import './AsideSectionButton.css';

export default function AsideSectionButton({ children, src, ...props }) {
  return (
    <NavLink
      {...props}
    >
        <img src={src} alt={children} />
        <div>{children}</div>
    </NavLink>
  );
}
