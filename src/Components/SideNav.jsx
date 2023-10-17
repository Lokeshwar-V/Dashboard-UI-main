import { Box, ChakraProvider, Heading, Text } from '@chakra-ui/react'
import { ReactComponent as DashboardIcon } from "../icons/dashboard.svg";
import { ReactComponent as ArrowIcon } from "../icons/arrow.svg";
import { ReactComponent as AvatarIcon } from "../icons/profile.svg";
import { useMediaQuery } from '@chakra-ui/react';

import { SideNavList } from '../constants'

import React, { useState } from 'react'
import CustomDrawer from './CustomDrawer'

export default function SideNav() {
    const [isMobileMode] = useMediaQuery('(max-width: 650px)')

    return (
        isMobileMode ? <CustomDrawer>
            <SideNavContent />
        </CustomDrawer> : <SideNavContent />

    )
}

const SideNavContent = () => <Box className=' px-1 md:px-2 lg:px-4 bg-[#26195f] h-screen flex flex-col justify-start '>
    <SideNavHeader />
    <SideNavItems />
    <SideNavFooter />
</Box>

const SideNavHeader = () => {
    return <Box className='flex gap-2  py-6'>
        <DashboardIcon />
        <Heading fontSize={'26px'} className='font-semibold  text-[#FFFFFF]' >Dashboard</Heading>
    </Box>
}

const SideNavItems = () => {

    const [selected, setSelected] = useState(SideNavList[0].name)
    const handleClickSideNavItem = (name) => () => setSelected(name)

    return <Box className='flex-grow gap-5 flex flex-col my-5'>
        {SideNavList.map((navItem, index) =>
            <Box
                key={navItem.name}
                className={`p-2 min-h-[46px] flex gap-2 cursor-pointer rounded-md min-w-[200px] text-[#FFFFFF] items-center ${selected === navItem.name ? 'bg-[#9197B3]' : ''}`}
                onClick={handleClickSideNavItem(navItem.name)}>
                {navItem.icon}
                <Text className='text-base flex-grow'>{navItem.name}</Text>
                <ArrowIcon />
            </Box>
        )}
    </Box>
}

const SideNavFooter = () => {
    return <Box className='flex p-3 m-2 mb-6 rounded-lg bg-[#9197B3] gap-4 items-center ' >
        <AvatarIcon />
        <Box className='flex flex-col flex-grow'>
            <Text className='font-semibold'>
                Lokeshwar
            </Text>
            <Text className='text-slate-300'>
                Software Engineer
            </Text>
        </Box>
        <ArrowIcon className='brightness-0 invert rotate-90' />
    </Box>

}









