import { Box } from '@chakra-ui/react'
import React from 'react'
import Cards from '../Components/Cards'
import CustomBarGraph from '../Components/CustomBarGraph'
import CustomPieChart from '../Components/CustomPieChart'
import CustomTable from '../Components/CustomTable'
import DashboardHeader from '../Components/DashboardHeader'

export default function DashBoard() {
    return (
        <Box className='w-full h-screen overflow-auto flex-col px-12 py-12 bg-[#F2EFFF]'>
            <DashboardHeader />
            <Cards />
            <Box className='flex flex-col lg:flex-row gap-10'>
                <CustomBarGraph />
                <CustomPieChart />
            </Box>
            <CustomTable />
        </Box>
    )
}

