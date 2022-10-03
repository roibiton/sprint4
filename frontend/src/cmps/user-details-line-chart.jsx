import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { utilService } from '../services/util.service';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        // {
        //   label: 'Dataset 1',
        //   data: labels.map(() => utilService.getRandomIntInclusive(-1000,1000)),
        //   borderColor: 'rgb(255, 99, 132)',
        //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
        // },
        // {
        //   label: 'Dataset 2',
        //   data: labels.map(() => utilService.getRandomIntInclusive(-500,1500)),
        //   borderColor: 'rgb(53, 162, 235)',
        //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
        // },
    ],
};

export function UserDetailsLineChart(userStays) {
    console.log('userStays',userStays)
    data.datasets = userStays.userStays.map((stay) =>
        ({
            label: `${stay.name}`,
            data: labels.map(() => utilService.getRandomIntInclusive(-1000, 1000)),
            borderColor: `${utilService.getRandomColor()}`,
            backgroundColor: `${utilService.getRandomColor()}`,
})
    )
    return <div className='user-details-line-chart'><Line options={options} data={data} /></div>;
}
