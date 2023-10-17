import { Box, Grid, GridItem, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { cardData } from '../constants'


export default function Cards() {
    const [isLargerThan1400] = useMediaQuery('(min-width: 1400px)')

    return (
        <Grid className='justify-1between flex w-full mt-10 ' templateColumns={{
            lg: isLargerThan1400 ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
            sm: 'repeat(1, 1fr)'
        }} gap={6}>
            {cardData.map((item) => <CardItem key={item.title} item={item} isLargerThan1400={isLargerThan1400} />)}
        </Grid>
    )
}

const CardItem = ({ item, isLargerThan1400 }) => {

    return <GridItem className='px-4 py-6 md:px-2 md:py-6 lg:px-6 lg:py-8 lg:max-w-none justify-center gap-3 flex items-center bg-white rounded-lg drop-shadow-light'>
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} width={{
            lg: isLargerThan1400 ? '120px' : '100px',
            sm: '120px'
        }} height={{
            lg: isLargerThan1400 ? '120px' : '100px',
            sm: '120px'
        }} background={'linear-gradient(201deg, #D3FFE7 3.14%, #EFFFF6 86.04%)'} rounded={'full'}>
            {item.icons}
        </Box>
        <Box className='flex flex-col gap-0 '>
            <Text as={'span'} color={'#ACACAC'} fontSize={'12px'}>
                {item.title}
            </Text>
            <Text color={'#333'} fontSize={'28px'} fontWeight={600}>
                {item.body}
            </Text>
            <Box className='flex items-center gap-1'>
                {item.description.icon}
                <Text as={'span'} fontSize={'10px'} color={item.description.isProfit ? '#00AC4F' : '#D0004B'}>
                    {item.description.growth}
                </Text>
                <Text color={'#292D32'} fontSize={'10px'}>
                    {item.description.period}
                </Text>
            </Box>

        </Box>
    </GridItem>
}

