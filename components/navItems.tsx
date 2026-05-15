import { Link, NavLink } from "react-router"
import { sidebarItems } from "~/constants"
import { cn } from "../lib/utils"

const NavItems = () => {
  return (
    <section className="nav-items">
     <Link to="/"  className="link-logo">
     <img src="/assets/icons/logo.svg" alt="logo" className="size-7.5" />
     <h1>TourVisto</h1>
     </Link>
     <div className="container">
          <nav>
               {sidebarItems.map(({id,href,icon,label})=>(
                    <NavLink to={href} key={id} className="link ">
                    {({isActive}: {isActive: boolean}) => (
                         <div className={cn('group nav-item',{'bg-primary-100 text-white!':isActive})}>
                         <img src={icon} alt={label} className="size-5" />
                         <span className="">{label}</span>
                         </div>
                    )}
                    </NavLink>
               ))}
          </nav>
     </div>
    </section>
  )
}

export default NavItems