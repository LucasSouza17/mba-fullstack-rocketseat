import { cn } from "../lib/utils"

interface ProductTagProps extends React.HTMLAttributes<HTMLDivElement> {
  type: 'default' | 'available' | 'sold' | 'cancelled'
}


export function ProductTag({ type, className, children, ...props }: ProductTagProps) {
  return (
    <div
      className={
        cn("flex items-center justify-center px-2 py-1 rounded-full",
          {
            "bg-blue-base": type === "available",
            "bg-semantic-success": type === "sold",
            "bg-grayscale-300": type === "cancelled",
            "bg-grayscale-400": type === "default",
          },
          className
        )}
      {...props}>
      <span className="text-label-sm uppercase font-poppins text-shape-white">{children}</span>
    </div>
  )
}