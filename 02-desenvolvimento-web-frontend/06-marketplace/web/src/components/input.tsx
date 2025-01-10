import { forwardRef, useRef } from "react";
import { cn } from "../lib/utils";
import Icon from "./icon";
import { AlertCircle, icons } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: keyof typeof icons;
  label?: string;
  error?: string;
  currency?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon, error, className, currency, ...props }: InputProps, ref) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const formatCurrency = (val: string) => {
      const numericValue = val.replace(/\D/g, ""); // Remove tudo que não for número
      const floatValue = parseFloat(numericValue) / 100;
      return isNaN(floatValue)
        ? "0,00"
        : floatValue.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (currency && inputRef.current) {
        const formattedValue = formatCurrency(e.target.value);
        inputRef.current.value = formattedValue; // Atualiza o valor do input diretamente
      }
    };

    return (
      <div className="font-poppins w-full">
        <label htmlFor={props.id} className="uppercase text-label-md text-grayscale-200 focus-within:text-orange-base">
          {label}
          <div className="flex items-center px-[2px] gap-2 py-[14px] border-b transition-colors focus-within:border-b-grayscale-400">
            {icon && <Icon className="w-6 h-6" name={icon} />}
            {currency && <span className="text-body-md text-grayscale-400">R$</span>}
            <input
              className={cn(
                "w-full outline-none ring-0 !text-body-md font-normal text-grayscale-400 transition-colors placeholder:text-grayscale-200 focus-within:caret-orange-base",
                className
              )}
              ref={(el) => {
                if (typeof ref === "function") ref(el);
                inputRef.current = el;
              }}
              {...props}
              type={props.type === "password" ? "password" : "text"}
              onChange={handleChange}
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
    );
  }
);
