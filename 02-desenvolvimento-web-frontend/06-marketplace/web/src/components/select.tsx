import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import Icon from "./icon";
import { AlertCircle, ChevronDown, ChevronUp, icons, X } from "lucide-react";

interface SelectProps {
  label?: string;
  icon?: keyof typeof icons;
  options: { value: string; label: string }[];
  error?: string;
  onChange?: (value: string | null) => void;
  value?: string | null;
}

export const Select = ({ label, icon, options, error, onChange, value = null }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(value);

  const labelSelected = options.find((option) => option.value === selected)?.label;

  useEffect(() => {
    setSelected(value);
  }, [value])

  return (
    <div className="relative font-poppins">
      <label className="uppercase text-label-md text-grayscale-200 focus-within:text-orange-base">
        {label}
        <div
          className={cn("flex items-center px-[2px] gap-2 py-[14px] border-b transition-colors cursor-pointer", {
            "border-b-orange-base": isOpen,
          })}
          onClick={() => setIsOpen(!isOpen)}
        >
          {icon && <Icon className={cn("w-6 h-6", { "text-orange-base": isOpen })} name={icon} />}
          <span className={cn("w-full !text-body-md font-normal normal-case", selected ? "text-grayscale-400" : "text-grayscale-200")}>{labelSelected || "Selecione"}</span>
          {selected && (
            <div className="flex items-center rounded-full bg-shape-shape justify-center p-0.5 w-[20px] h-[20px] transition-all hover:filter hover:brightness-90">
              <X size={16} className="cursor-pointer rounded-full text-grayscale-300" onClick={(e) => {
                e.stopPropagation();
                setSelected(null);
                setIsOpen(false);
                onChange?.(null);
              }} />
            </div>
          )}
          {isOpen ? <ChevronUp className="w-6 h-6 text-grayscale-300" /> : <ChevronDown className="w-6 h-6 text-grayscale-300" />}
        </div>
        {isOpen && (
          <ul className="absolute w-full mt-2 py-1 bg-white max-h-[200px] text-body-sm font-poppins drop-shadow-md rounded-md overflow-auto">
            {options.map((option, index) => (
              <li
                key={index}
                className={cn(
                  "flex normal-case font-normal items-center px-4 h-12 py-2 cursor-pointer hover:bg-orange-base/5",
                  selected === option.value && "text-orange-base"
                )}
                onClick={() => {
                  setSelected(option.value);
                  setIsOpen(false);
                  onChange?.(option.value);
                }}
              >
                {option.label}
                {selected === option.value && <Icon className="w-5 h-5 ml-auto" name="Check" />}
              </li>
            ))}
          </ul>
        )}
      </label>
      {error && <div className="flex items-center gap-1 py-2">
        <AlertCircle className="w-4 h-4 text-semantic-danger" />
        <span className="text-body-xs text-semantic-danger normal-case">{error}</span>
      </div>}
    </div>
  );
};
