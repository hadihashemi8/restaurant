import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import TuneIcon from '@mui/icons-material/Tune';
import CancelIcon from '@mui/icons-material/Cancel';
import Title from '../../components/Title/Title';
import Card from '../../components/Card/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import { useDispatch, useSelector } from 'react-redux';
import { filterProducts } from '../../redux/slices/filterSlice';

import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import Loader from '../../components/Loader/Loader';




function valuetext(value) {
    return `${value}°C`;
}




export default function FoodsMenue() {

    // infinite scroll data
    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [index, setIndex] = useState(2);

    // redux section
    const selector = useSelector(state => state.filterItems)
    const dispatch = useDispatch()

    const [products, setProducts] = useState([])

    const [filterOptionItems, setFilterOptionItems] = useState([
        { id: 1, option: "همه", isChecked: true },
        { id: 2, option: "همبرگر", isChecked: true },
        { id: 3, option: "پیتزا", isChecked: true },
        { id: 4, option: "کباب", isChecked: true },
        { id: 5, option: "دسر", isChecked: true },
        { id: 6, option: "مرغ", isChecked: true },
        { id: 7, option: "پاستا", isChecked: true },
        { id: 8, option: "نوشیدنی", isChecked: true },
    ])
    const [filterOptionChips, setFilterOptionChips] = useState(["همه"])

    const [showFilterSection, setShowFilterSection] = useState(false)
    const [value, setValue] = useState([0, 200000]);



    const handleDelete = (item) => () => {
        setFilterOptionChips(prev => prev.filter(option => option !== item))

        const itemIndex = filterOptionItems.find(optionItem => optionItem.option == item)


        let newItems = []

        if (itemIndex.option == "همه") {
            newItems = filterOptionItems.map(item => {
                item.isChecked = false


                return item
            })
        } else {
            newItems = filterOptionItems.map(item => {
                if (item.id == itemIndex.id) {
                    item.isChecked = false
                }

                return item
            })

        }


        const newFilterChips = filterOptionItems.filter(item => item.isChecked).map(item => item.option)


        setFilterOptionChips(newFilterChips)
        setFilterOptionItems(newItems)
    };


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const changeHandle = (e) => {

        const filterOption = e.target.value

        const findItem = filterOptionItems.find(item => item.option == filterOption)

        if (filterOption == "همه" && !findItem.isChecked) {
            const newItems = filterOptionItems.map(item => {
                item.isChecked = true


                return item
            })

            setFilterOptionChips(["همه"])

            setFilterOptionItems(newItems)
        } else if (filterOption == "همه" && findItem.isChecked) {
            const newItems = filterOptionItems.map(item => {
                item.isChecked = false

                return item
            })

            const newFilterChips = filterOptionItems.filter(item => item.isChecked).map(item => item.option)

            setFilterOptionChips(newFilterChips)
            setFilterOptionItems(newItems)

        } else {

            const newItems = filterOptionItems.map(item => {
                if (item.option == findItem.option) {
                    item.isChecked = !item.isChecked
                }
                if (item.option == "همه") {
                    item.isChecked = false
                }


                return item
            })


            // add and remove items from chips

            const newFilterChips = filterOptionItems.filter(item => item.isChecked).map(item => item.option)


            setFilterOptionChips(newFilterChips)
            setFilterOptionItems(newItems)

        }


    }


    useEffect(() => {
        setProducts(selector.filtredItems)

    }, [selector])

    useEffect(() => {
        dispatch(filterProducts({ filterOptionChips, items }))
    }, [items])


    const filterHandler = () => {
        dispatch(filterProducts({ filterOptionChips, items }))
    }



    // infinite scroll section
    useEffect(() => {
        axios.get("/api/product?offset=10&limit=12")
            .then((res) => setItems(res.data.data))
            .catch((err) => console.log(err));
    }, []);

    const fetchMoreData = () => {
        axios
            .get(`/api/product?offset=${index}0&limit=12`)
            .then((res) => {

                setItems((prevItems) => [...prevItems, ...res.data.data]);

                res.data.data.length > 0 ? setHasMore(true) : setHasMore(false);
            })
            .catch((err) => console.log(err));

        setIndex((prevIndex) => prevIndex + 1);
    };



    return (
        <>

        <title>منوی غذا</title>

            <Layout>
                <div className='mt-24 '>
                    <Title title="منوی غذا" theme="bg-main-color5" />

                    <div className=' sm:border-[1px] border-gray-300 sm:rounded-xl grid grid-cols-1 lg:grid-cols-3 gap-4 relative mt-14 p-1'>

                        <div className={`bg-main-color4 lg:col-span-1 lg:relative overflow-y-scroll lg:overflow-y-auto  absolute top-0  w-full h-full duration-300 flex flex-col items-center z-30 p-4 border-l-[1px] border-gray-300 ${showFilterSection ? "right-0 block" : "-right-full lg:right-0 hidden lg:block"}`}>
                            <div className='flex items-center justify-center p-2 lg:hidden'>
                                <button className='flex items-center justify-center bg-main-color1 text-main-color4 py-2 px-5 rounded-xl text-xl' onClick={() => setShowFilterSection(false)}>
                                    <CancelIcon />
                                </button>

                            </div>

                            <div className=' w-full sticky top-0 left-0 p-2 flex flex-col items-center'>
                                <Stack className='w-full bg-white p-4 flex flex-wrap items-start justify-center gap-2 rounded-md' direction="row" >
                                    {filterOptionChips.length > 0 ? (filterOptionChips.map(item =>
                                        <Chip key={item.id} className='flex items-center flex-row-reverse  chip' label={item} onDelete={handleDelete(item)} />
                                    )) : <p>هیچ فیلتری انتخاب نشده است</p>}


                                </Stack>

                                <Accordion className="mt-4 rounded-md w-full  overflow-hidden">
                                    <AccordionSummary
                                        className="rounded-md "
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>دسته بندی</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails >
                                        <FormGroup onChange={changeHandle}>
                                            {filterOptionItems.map(item => (
                                                <FormControlLabel key={item.id} checked={item.isChecked} control={<Checkbox />} label={item.option} value={item.option} />
                                            ))}

                                        </FormGroup>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion className="mt-4 rounded-md w-full  overflow-hidden">
                                    <AccordionSummary
                                        className="rounded-md "
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>فیلتر بر اساس قیمت</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className="flex flex-col items-center">
                                        <Box sx={{ width: '90%' }}>
                                            <Slider
                                                // getAriaLabel={() => 'Temperature range'}
                                                value={value}
                                                onChange={handleChange}
                                                valueLabelDisplay="auto"
                                                min={0}
                                                max={200000}
                                            // getAriaValueText={valuetext}
                                            />
                                        </Box>
                                        <p className='mt-4'>{value[1]} تومان - {value[0]} تومان</p>
                                    </AccordionDetails>
                                </Accordion>

                                <button onClick={filterHandler} className='bg-main-color5 py-2 rounded-md w-full mt-4 text-main-color4'>اعمال فیلتر</button>
                            </div>
                        </div>

                        <div className=' col-span-1 lg:col-span-2 flex flex-col   relative'>
                            <div className='flex items-center justify-center p-2 lg:hidden '>
                                <button className='flex items-center justify-center bg-main-color1 text-main-color4 py-2 px-5 rounded-xl text-xl' onClick={() => setShowFilterSection(true)}>
                                    فیلتر
                                    <TuneIcon className='mr-1 ' />
                                </button>
                            </div>

                            <InfiniteScroll
                                dataLength={items.length}
                                next={fetchMoreData}
                                hasMore={hasMore}
                                loader={<Loader />}
                            >
                                <div className='w-full p-2 gap-2   grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                                    {products?.map(item => (
                                        <div key={item.id} className='col-span-1 '>
                                            <Card offerCard={false} data={item} />
                                        </div>
                                    ))}
                                    { }
                                </div>
                            </InfiniteScroll>

                        </div>

                    </div>
                </div>
            </Layout>
        </>
    )
}
