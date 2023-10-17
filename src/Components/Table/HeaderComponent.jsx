
import { SearchIcon } from "@chakra-ui/icons";
import { Checkbox, IconButton, Input, InputGroup, InputLeftElement, InputRightElement, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function HeaderComponent({ total, caption, rowData, filterRows, filterRowsByColumnGroup, onlyFilteredDatas }) {
    // Local state to handle UI values for the filter if it's checked or unchecked
    const [filterRowsByColumn, setFilteredRowsByColumn] = useState([]);

    useEffect(() => {
        resetFilters();
    }, [filterRowsByColumnGroup]);

    // Remove any multi-filter if present
    function resetFilters() {
        // Gathers all the filter values of the column from 'filterRowsByColumnGroup' and saves them to a local state 'filterRowsByColumn'
        setFilteredRowsByColumn(
            filterRowsByColumnGroup.map((filterValues) =>
                filterValues.values.map((item) => ({ [item]: false, column: filterValues.column, filterVal: item }))
            )
        );
    }

    // Searches values based on search input and removes any multi-filter if present
    function filterRowDatas(event) {
        const filteredList = rowData.filter((rowObj) =>
            Object.values(rowObj).filter((value) => value.toString().toLowerCase().includes(event.target.value)).length > 0
        );
        filterRows(filteredList);
        resetFilters();
    }

    // Handles multiple multi-level arrays of objects into a single array of objects with unique values
    function getUniqueValuesInAllArrays(arrays) {
        const commonValues = [];
        const counts = arrays.reduce((obj, arr) => {
            for (const item of arr) {
                const key = JSON.stringify(item);
                obj[key] = (obj[key] || 0) + 1;
                if (obj[key] === arrays.length) {
                    commonValues.push(JSON.parse(key));
                }
            }
            return obj;
        }, {});
        return commonValues;
    }

    // Handle filtering based on the type of value selected from a particular column without disturbing the existing filter if present in the same column
    function handleAddFilterValues(localFileterdColumnGroup) {
        let localFilterList = [];
        filterRowsByColumnGroup.forEach((value, index) => {
            let localTemp = [];
            // Checks multiple columns to make sure all the previous filter logic is saved
            value.values.forEach((item, subIndex) => {
                let localFilterObj = localFileterdColumnGroup[index][subIndex];
                // Updating the filter value of the column to which it belongs
                if (localFilterObj[item]) {
                    localTemp = [...rowData.filter((rowObj) => rowObj[value.column].toString().toLowerCase() === localFilterObj.filterVal.toString().toLowerCase()), ...localTemp];
                }
            });
            // Only update the list if at least one row value matches the filter value
            if (localTemp.length > 0) {
                localFilterList.push(localTemp);
            }
        });
        // Sets the new filtered values after obtaining a unique list of rows
        filterRows(getUniqueValuesInAllArrays(localFilterList));
    }

    // Checks for previous selected filters with respect to column name and filter values
    function checkForFiltersByColumn(array) {
        return array.some((innerArray) => {
            return innerArray.some((obj) => {
                const value = Object.values(obj)[0];
                return typeof value === 'boolean' && value === true;
            });
        });
    }

    // Handles multi-column filtering when selected
    function handleClickFilterCheckbox(event, value, column, index, subIndex) {
        let localFileterdColumnGroup = [...filterRowsByColumn];
        localFileterdColumnGroup[index][subIndex][value] = event.target.checked;
        // To add a filter
        if (event.target.checked) {
            handleAddFilterValues(localFileterdColumnGroup);
        } else {
            // To remove a filter value after unchecked
            let filteredList = onlyFilteredDatas.filter((rowObj) => !(rowObj[column].toString().toLowerCase() === value.toString().toLowerCase()));
            filterRows(filteredList.length > 0 ? filteredList : rowData);
            // After removing, check if previous selected filters are present, then add those filters
            checkForFiltersByColumn(localFileterdColumnGroup) && handleAddFilterValues(localFileterdColumnGroup);
        }
        // To update filter UI based on event value checked
        setFilteredRowsByColumn(localFileterdColumnGroup);
    }

    return (
        <div className="border-b-gray-300 border-b">
            <div className="flex items-center p-5 pt-2 pb-2 pl-6 gap-2 h-max">
                <h1 className="font-semibold text-base flex-grow">{caption}</h1>
                {/* <p className="text-[#99A0A8] text-sm mt-[2px] flex-grow">Total : {total}</p> */}
                {/* {onlyFilteredDatas.length <= total && <p className="text-[#99A0A8] text-sm mt-[2px] mr-2">Filtered Rows : {onlyFilteredDatas.length}</p>} */}
                {/* Searchbar */}
                {/* <InputGroup width={"max-content"}>
                    <Input placeholder='Search' onChange={filterRowDatas} />
                    <InputRightElement width='2.5rem'>
                        <SearchIcon color={"gray"} />
                    </InputRightElement>
                </InputGroup> */}
                <InputGroup width={"max-content"} maxW={'300px'} borderRadius={'12px'} >
                    <InputLeftElement pointerEvents='none'>
                        <SearchIcon fontSize={'xl'} color='gray.300' />
                    </InputLeftElement>
                    <Input onChange={filterRowDatas}  borderRadius={'8px'} border={'none'} focusBorderColor='lime' color={'blackAlpha.800'} variant={'outline'} placeholder='Search' />
                </InputGroup>
                {/* Filter */}
                {filterRowsByColumn.length > 0 && (
                    <Menu>
                        <MenuButton as={IconButton} aria-label='filter' icon={
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M15 1H1L6.6 8.35778V13.4444L9.4 15V8.35778L15 1Z" stroke="#536580" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        } />
                        <MenuList>
                            <div className="flex flex-col justify-start text-lg">
                                <div className="flex justify-between items-center w-full border-b border-[#D9D9D9] p-3 pt-0 pb-1">
                                    <p className="font-medium text-base">Filter by</p>
                                    <button onClick={() => {
                                        resetFilters();
                                        filterRows(rowData);
                                    }} className="text-[#3D8BF8] text-base hover:text-white hover:bg-[#3D8BF8] p-1 rounded">
                                        Reset Filters
                                    </button>
                                </div>
                                {filterRowsByColumnGroup.map((filterValues, index) => (
                                    <div key={filterValues.column}>
                                        <div className="capitalize w-full p-3 pb-0">
                                            <label className="text-[#6B778C] text-base font-medium">{filterValues.column}</label>
                                            <div className="flex flex-col p-1 pt-0">
                                                {filterValues.values.map((value, subIndex) => (
                                                    <div className="text-base m-1 mb-0" key={value + subIndex}>
                                                        <Checkbox
                                                            size='md'
                                                            colorScheme="linkedin"
                                                            onChange={(e) => {
                                                                handleClickFilterCheckbox(e, value, filterValues.column, index, subIndex);
                                                            }}
                                                            isChecked={filterRowsByColumn[index][subIndex][value]}
                                                        >
                                                            {value}
                                                        </Checkbox>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </MenuList>
                    </Menu>
                )}
            </div>
        </div>
    );
}
