import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import DonutChart from "react-donut-chart";
import Chart from 'react-google-charts'

export default function CustomPieChart() {
  return (
    <Box className='w-[98%] lg:w-[50%] xl:w-[35%]  h-[40vh]  custom-bar-graph-container flex flex-col '>
      <Box className='flex flex-col flex-grow'>
        <Text fontSize={'22px'} fontWeight={600} color={'#000'}>
          Customers
        </Text>
        <Text fontSize={'14px'} color={'#ACACAC'}>
          Customers that buy products
        </Text>
      </Box>
      <Box className='w-[100%] h-[40vh] mt-4'>
        <PieChart />
      </Box>
    </Box>
  )
}



const PieChart = () => {

  const pieData = [
    ['Task', 'Hours per Day'],

    ['15 % Total Retained', 15],
    ['65% Total New Customers', 65],
    ['20% Un-Categarised', 20],
  ]


  const pieOptions = {
    pieHole: 0.4,
    legend: 'none',
    backgroundColor: 'transparent'
  }

  return (

    <Chart
      style={{
        background: "transparent"
      }}

      width="100%"
      height={'35vh'}
      chartType="PieChart"
      data={pieData}
      options={pieOptions}
      rootProps={{ 'data-testid': '3' }}
    />
  )

}

