import { icons } from "lucide-react"
import Icon from "../../../components/icon"

export interface DashboardCardInfoProps {
  icon: keyof typeof icons
  description: string
  value: string
}

export function DashboardCardInfo({ icon, description, value }: DashboardCardInfoProps) {
  return (
    <div className="flex items-center gap-4 rounded-[20px] h-28 bg-shape-white pl-3 pr-7 py-3">
      <div className="flex items-center justify-center w-20 h-[86px] rounded-xl bg-blue-light">
        <Icon name={icon} className="w-10 h-10 text-blue-base" />
      </div>
      <div>
        <p className="text-grayscale-400 text-title-lg font-sans">{value}</p>
        <span className="text-grayscale-300 text-body-xs font-poppins">{description}</span>
      </div>
    </div>
  )
}