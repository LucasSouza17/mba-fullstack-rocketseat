import { forwardRef, useState } from "react"
import { cn } from "../lib/utils"
import Icon from "./icon"
import { AlertCircle, icons } from "lucide-react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: keyof typeof icons
  label?: string
  error?: string
}


export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon, error, className, ...props }: InputProps, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = props.type === "password";


    return (
      <div className="font-poppins">
        <label htmlFor={props.id} className="uppercase text-label-md text-grayscale-200 focus-within:text-orange-base">{label}
          <div className="flex items-center px-[2px] gap-2 py-[14px] border-b transition-colors focus-within:border-b-grayscale-400">
            {icon && <Icon className="w-6 h-6" name={icon} />}
            <input
              className={cn('w-full outline-none ring-0 text-body-md font-normal text-grayscale-400 transition-colors placeholder:text-grayscale-200 focus-within:caret-orange-base', className)}
              ref={ref}
              {...props}
              type={isPassword && showPassword ? "text" : props.type}
            />
            {isPassword && (
              <button type="button" onClick={() => setShowPassword(!showPassword)}>
                <Icon
                  className="w-6 h-6 cursor-pointer text-grayscale-200"
                  name={showPassword ? "Eye" : "EyeOff"}
                />
              </button>
            )}
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