import React, { useMemo } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
  responsive: true
};

export const Graph = ({
  iCinco,
  iDiez,
  rangoAnual
}) => {

  const labels = rangoAnual;

  const data = useMemo(function () {
    return {
      datasets: [
        {
          label: "Acumulado con 5%",
          data: iCinco,
          tension: 0.3,
          borderColor: "#066",
          pointRadius: 5,
          pointBackgroundColor: "#066",
        },
        {
          label: "Acumulado con 10%",
          data: iDiez,
          tension: 0.1,
          borderColor: "#0a9",
          pointRadius: 5,
          pointBackgroundColor: "#0a9",
        }
      ],
      labels
    };
  }, []);

  return (
    <Line data={data} options={options} />
  )
}
