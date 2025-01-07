import { useQuery } from "@tanstack/react-query";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { getViewsPerDayBySellerIn30Days } from "../../../api/get-views-per-day-by-seller-in-30-days";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";
import Icon from "../../../components/icon";
import dayjs from "dayjs";

export function VisitorsChart() {
  const { data } = useQuery({
    queryKey: ['metrics', 'visitors'],
    queryFn: getViewsPerDayBySellerIn30Days
  })

  if (!data) return null

  function CustomTooltip({ active, payload }: { active?: boolean; payload?: { name: NameType; value: ValueType; payload: { date: string } }[] }) {
    if (active && payload && payload.length) {
      return (
        <div className="bg-shape-white drop-shadow-xl rounded-lg flex flex-col gap-2 p-3">
          <p className="text-grayscale-400 text-label-sm font-poppins">{dayjs(payload[0]?.payload?.date).format("DD [de] MMMM")}</p>
          <div className="flex items-center gap-2 text-grayscale-300 text-body-xs font-poppins">
            <Icon name="Users" className="w-4 h-4" /> {payload[0]?.value} visitantes
          </div>
        </div>
      )
    }

    return null
  }

  return (
    <ResponsiveContainer width="100%" height={266}>
      <LineChart data={data?.viewsPerDay} style={{ fontSize: 12 }}>
        <XAxis className="text-grayscale-200 text-label-sm font-poppins" dataKey="date" tickFormatter={(date) => date && new Date(date).getDate()} axisLine={false} tickLine={false} dy={16} />
        <YAxis
          dataKey="amount"
          stroke="#888"
          className="text-grayscale-200 text-label-xs font-poppins"
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => Math.round(value).toString()}
          width={12}
        />
        <CartesianGrid vertical={false} strokeDasharray="8 8" />
        <Line
          stroke={'#5EC5FD'}
          type="monotone"
          strokeWidth={2}
          dataKey="amount"
          dot={false}
        />
        <Tooltip content={<CustomTooltip />} />
      </LineChart>
    </ResponsiveContainer>
  )
}