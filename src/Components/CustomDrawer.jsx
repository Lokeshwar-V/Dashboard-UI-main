import { HamburgerIcon } from '@chakra-ui/icons'
import { IconButton, Box, Drawer, DrawerContent, } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function CustomDrawer(props) {

    const [open, setOpen] = useState(false);
    const toggleDrawer = () => setOpen((prev) => !prev);

    return (
        <Box className='bg-[#F2EFFF]'>
            <IconButton background={'transparent'} onClick={toggleDrawer}>
                <HamburgerIcon background={'transparent'} />
            </IconButton>
            <Drawer placement='left' onClose={toggleDrawer} isOpen={open} >
                <DrawerContent>
                    {props.children}
                </DrawerContent>
            </Drawer>
        </Box>
    )
}
