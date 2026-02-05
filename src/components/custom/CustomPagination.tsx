import { Button } from "@/components/ui/button"

import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

interface Props {
  totalPages: number;
}

const page = 2;

export const CustomPagination = ({ totalPages }: Props) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <Button variant="outline" size="sm" disabled>
        <ChevronLeft className="h-4 w-4" />
        Previous
      </Button>

      {
        Array.from({ length: totalPages }).map((_, index) => {
          return (
            <Button
              key={index}
              variant={page == index ? "default" : "outline"}
              size="sm"
            >
              {index + 1}
            </Button>
          )
        })
      }

      {/* <Button variant="default" size="sm">
        1
      </Button>
      <Button variant="outline" size="sm">
        2
      </Button>
      <Button variant="outline" size="sm">
        3
      </Button>
      <Button variant="ghost" size="sm" disabled>
        <MoreHorizontal className="h-4 w-4" />
      </Button> */}

      <Button variant="outline" size="sm">
        Next
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
