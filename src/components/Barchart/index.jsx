import {
  Bar,
  Legend,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    "month": "T1",
    "Dịch vụ ăn uống": 400,
    "Thực phẩm tươi sống": 200,
    "Chế biến thực phẩm": 390,
  },
  {
    "month": "T2",
    "Dịch vụ ăn uống": 300,
    "Thực phẩm tươi sống": 18,
    "Chế biến thực phẩm": 90,
  },
  {
    "month": "T3",
    "Dịch vụ ăn uống": 200,
    "Thực phẩm tươi sống": 90,
    "Chế biến thực phẩm": 30,
  },
  {
    "month": "T4",
    "Dịch vụ ăn uống": 27,
    "Thực phẩm tươi sống": 8,
    "Chế biến thực phẩm": 349,
  },
  {
    "month": "T5",
    "Dịch vụ ăn uống": 180,
    "Thực phẩm tươi sống": 480,
    "Chế biến thực phẩm": 390,
  },
  {
    "month": "T6",
    "Dịch vụ ăn uống": 20,
    "Thực phẩm tươi sống": 380,
    "Chế biến thực phẩm": 390,
  },
  {
    "month": "T7",
    "Dịch vụ ăn uống": 349,
    "Thực phẩm tươi sống": 400,
    "Chế biến thực phẩm": 340,
  },
  {
    "month": "T8",
    "Dịch vụ ăn uống": 490,
    "Thực phẩm tươi sống": 43,
    "Chế biến thực phẩm": 340,
  },
  {
    "month": "T9",
    "Dịch vụ ăn uống": 340,
    "Thực phẩm tươi sống": 40,
    "Chế biến thực phẩm": 90,
  },
  {
    "month": "T10",
    "Dịch vụ ăn uống": 340,
    "Thực phẩm tươi sống": 430,
    "Chế biến thực phẩm": 9,
  },
  {
    "month": "T11",
    "Dịch vụ ăn uống": 30,
    "Thực phẩm tươi sống": 300,
    "Chế biến thực phẩm": 30,
  },
  {
    "month": "T12",
    "Dịch vụ ăn uống": 340,
    "Thực phẩm tươi sống": 300,
    "Chế biến thực phẩm": 5,
  },
];



function Barchart() {
  return (
    <div>
      <BarChart width={900} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" label={{ value: "Tháng", position: "insideBottomRight", offset: -5}} />
        {console.log("This is y axis")}
        
        {console.log(<YAxis/>)}
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Dịch vụ ăn uống" fill="#ffc107" />
        <Bar dataKey="Thực phẩm tươi sống" fill="#82ca9d" />
        <Bar dataKey="Chế biến thực phẩm" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default Barchart;
