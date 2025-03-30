import { NavLink } from "react-router-dom";

interface AsideSectionTitleProps {
  children: React.ReactNode;
  src: string;
  to: string;
}

export default function AsideSectionButton({ children, src, to }: AsideSectionTitleProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center justify-start my-6 w-[174px] ${
          isActive
            ? "h-10 bg-[#EE10B0] rounded-lg py-0.5 px-2 font-semibold text-xl"
            : "bg-transparent"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <img
            className={`block ${isActive ? "w-6" : "w-3"}`}
            src={src}
            alt="#"
          />
          <div
            className={`ml-2 font-medium text-base text-white pt-[0.2em] ${
              isActive ? "font-semibold text-xl" : ""
            }`} 
          >
            {children}
          </div>
        </>
      )}
    </NavLink>
  );
}