import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { SlashIcon } from "lucide-react"
import { Link } from "react-router"


    interface BreadCrumb {
        label: string,
        to: string
    }


   interface Props {
        currentPage : string,
        bradCrumbs?: BreadCrumb[]
    }

export const CustomBreadcrums = ({currentPage, bradCrumbs}: Props) => {



 


  return (
        <Breadcrumb className="my-5">
        <BreadcrumbList>
                <BreadcrumbItem>
                     <BreadcrumbLink asChild>
                                <Link to='/'>Inicio</Link>
                     </BreadcrumbLink>
                </BreadcrumbItem>
                
                
                {
                    bradCrumbs?.map(bread => (
                        <div>
                         <BreadcrumbItem>
                                <BreadcrumbSeparator>
                                    <SlashIcon />
                                </BreadcrumbSeparator>
                            <BreadcrumbLink>
                                    <Link to={bread.to}>{bread.label}</Link>
                            </BreadcrumbLink> 
                        </BreadcrumbItem>
                        </div>
                    ))
                }

                <BreadcrumbSeparator>
                    <SlashIcon />
                </BreadcrumbSeparator>






                 <BreadcrumbItem>
                     <BreadcrumbLink className="text-black">{currentPage} </BreadcrumbLink>
                </BreadcrumbItem>
        </BreadcrumbList>
        </Breadcrumb>
  )
}

