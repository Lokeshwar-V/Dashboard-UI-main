import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { customBarGraphData } from '../constants';
import { ChevronDownIcon } from '@chakra-ui/icons';

export default function CustomBarGraph() {

  return (
    <Box className='w-[98%]  lg:w-[50%] xl:w-[65%] h-[40vh]  custom-bar-graph-container flex flex-col'>
      <Box className='w-full flex'>
        <Box className='flex flex-col flex-grow'>
          <Text fontSize={'22px'} fontWeight={600} color={'#000'}>
            Overview
          </Text>
          <Text fontSize={'14px'} color={'#ACACAC'}>
            Monthly Earning
          </Text>
        </Box>
        <Menu >
          <MenuButton _hover={{ background: "#eaebed" }} background={'#eaebed'} minWidth={'118px'} minH={'38px'} color={'#7E7E7E'} borderRadius={'10px'} as={Button} rightIcon={<ChevronDownIcon />}>
            Quaterly
          </MenuButton>
          <MenuList >
            <MenuItem  >Monthly</MenuItem>
            <MenuItem  >Semi-Anual</MenuItem>
            <MenuItem  >Anually</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box className='w-[100%] h-[40vh] mt-4'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={customBarGraphData}>
            <Tooltip cursor={false} content={<></>} />
            <Bar dataKey="earnings" fill='#F2EFFF' activeBar={{ fill: '#5932EA' }} radius={10}>
              {customBarGraphData.map((entry, index) => (
                <Cell
                  cursor="pointer"
                  key={`cell-${index}`}
                  style={{ boxShadow: '0 35px 60px -15px rgba(0, 0, 0, 0.3)' }}
                />
              ))}
            </Bar>
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  )
}

