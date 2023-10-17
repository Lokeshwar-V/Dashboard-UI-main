import CustomTable from "./Table/CustomTable";
import { rowsObject } from '../constants'
import { useMemo } from "react";
import Photo1 from '../icons/27022519889f16e1275b4e0f96f434b8.jpeg'
import Photo2 from '../icons/628d9abe1d64b9cd528c434381eba87f.jpeg'
import { Box, Text } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'


export default function OrderDetails() {
    const columnsData = useMemo(() => [
        { label: 'timeStamp', name: 'Product Name', cellRenderer: ProductDetail },
        { label: 'source', name: 'Stock' },
        { label: 'status', name: 'Price', cellRenderer: StatusRenderer }, { label: 'select', name: 'Total Sales', cellRenderer: CustomSelect }
    ], []);

    function CustomSelect(value) {
        return <button className="bg-gray-300 p-1 font-medium text-black rounded-lg min-w-[60px] hover:scale-110">{value[1]}</button>;
    }

    function StatusRenderer(value) {
        const backgroundColor = value[1] === 'failed' ? 'bg-red-200' : value[1] === 'waiting' ? 'bg-yellow-100' : 'bg-green-200';
        return <div className={`flex items-center p-1 capitalize text-gray-800 font-medium text-sm rounded-lg justify-center min-w-[60px] ${backgroundColor}`}>{value[1]}</div>;
    }

    function ProductDetail(value) {
        console.log("🚀 ~ file: OrderDetails.jsx:27 ~ ProductDetail ~ value:", value[1][1])
        return <Box className="flex gap-2 items-center">
            <Image
                maxW={'160px'}                
                src={value[1][1] === 'a' ? Photo1 : Photo2}
                alt='Dan Abramov'
                rounded={'2xl'}
                aspectRatio={'16/9'}
            />
            <Text fontSize={'24px'}>{value[1]}</Text>
        </Box>
    }

    return (
        <CustomTable
            headers={columnsData} // column data
            row={rowsObject} // row data
            sortable // Boolean, default false. To sort columns by ascending or descending when clicking the column name. This won't work for cell renderer components inside a column. Only for strings and numbers.
            caption="Product Sell" // String, This is the header props for the table, default behavior has no header, so headers are visible only when a caption is provided. It displays search, total rows, total filtered rows, and filter.
        />
    );
}
