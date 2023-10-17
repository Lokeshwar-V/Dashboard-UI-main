import { Box, Heading, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { SearchIcon } from '@chakra-ui/icons'

export default function DashboardHeader() {

    return <Box className='flex flex-col md:flex-row   w-full justify-between'>
        <Heading fontSize={'24px'} fontWeight={'500'} color={'#000'}>Hello Lokeshwar 👋🏼,</Heading>
        <InputGroup maxW={'300px'} borderRadius={'12px'} background={'white'}>
            <InputLeftElement pointerEvents='none'>
                <SearchIcon fontSize={'2xl'} color='gray.300' />
            </InputLeftElement>
            <Input borderRadius={'8px'} border={'none'} focusBorderColor='lime' color={'blackAlpha.800'} variant={'outline'} placeholder='Search' />
        </InputGroup>
    </Box>
}
