import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Link, useLocation } from "react-router"


export const CustomMenu = () => {

  const {pathname} = useLocation()

const isActive = (path: string) =>{
  return pathname === path
}


  return (
<NavigationMenu>
  <NavigationMenuList>
    {/* home */}
    <NavigationMenuItem>
      <NavigationMenuLink  className={cn(isActive('/') && 'bg-slate-200', 'p-2 rounded-md')}>
        <Link to='/'>Inicio</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
    {/* busqueda */}
    <NavigationMenuItem  >
      <NavigationMenuLink  className={cn(isActive('/search') && 'bg-slate-200', 'p-2 rounded-md')}>
        <Link to='/search'>Busqueda</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
)
}

