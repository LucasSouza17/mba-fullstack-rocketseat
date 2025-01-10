import { forwardRef } from "react"
import { cn } from "../lib/utils"
import Icon from "./icon"
import { AlertCircle, icons } from "lucide-react"

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  icon?: keyof typeof icons
  label?: string
  error?: string
}


export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, icon, error, className, ...props }: TextareaProps, ref) => {
    return (
      <div className="font-poppins w-full">
        <label htmlFor={props.id} className="uppercase text-label-md text-grayscale-200 focus-within:text-orange-base">{label}
          <div className="flex items-center px-[2px] gap-2 py-[14px] border-b transition-colors focus-within:border-b-grayscale-400">
            {icon && <Icon className="w-6 h-6" name={icon} />}
            <textarea
              className={cn('w-full outline-none ring-0 !text-body-md font-normal text-grayscale-400 transition-colors placeholder:text-grayscale-200 focus-within:caret-orange-base', className)}
              ref={ref}
              {...props}
            />
          </div>
          {error && (
            <div className="flex items-center gap-1 py-2">
              <AlertCircle className="w-4 h-4 text-semantic-danger" />
              <span className="text-body-xs text-semantic-danger normal-case">{error}</span>
            </div>
          )}
        </label>
      </div>
    )
  })