import { BarChart } from "@mui/icons-material"


export const Graf = () => {
return (
    <div>
 <BarChart
  xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
  series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
  width={500}
  height={300}
/>
    </div>
)
}