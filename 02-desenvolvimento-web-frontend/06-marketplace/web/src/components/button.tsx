import { cva, VariantProps } from "class-variance-authority"
import { cn } from "../lib/utils"

const buttonVariants = cva(
  'inline-flex items-center font-poppins justify-between transition-colors whitespace-nowrap rounded-[10px] text-action-md gap-3 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-orange-base text-shape-white hover:bg-orange-dark',
        outline:
          'border border-orange-base text-orange-base bg-transparent hover:border-orange-dark hover:text-orange-dark',
        text: 'text-orange-base hover:text-orange-dark hover:bg-shape-shape',
      },
      size: {
        lg: 'h-14 px-5',
        default: 'h-10 px-4',
        sm: 'h-6 px-1 rounded-md'
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  buttonRef?: React.Ref<HTMLButtonElement>
}

function Button({ className, variant, size, buttonRef, ...props }: ButtonProps) {
  return (
    <button ref={buttonRef} className={cn(buttonVariants({ variant, size, className, }))} {...props} />
  )
}

Button.displayName = 'Button'

export { Button }