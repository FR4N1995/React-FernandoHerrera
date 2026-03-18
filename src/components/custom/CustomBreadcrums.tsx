import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { SlashIcon } from "lucide-react"


export const CustomBreadcrums = () => {
  return (
        <Breadcrumb className="my-5">
        <BreadcrumbList>
                <BreadcrumbItem>
                     <BreadcrumbLink href="/">Home </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <SlashIcon />
                </BreadcrumbSeparator>
                 <BreadcrumbItem>
                     <BreadcrumbLink href="/">Component </BreadcrumbLink>
                </BreadcrumbItem>
        </BreadcrumbList>
        </Breadcrumb>
  )
}

