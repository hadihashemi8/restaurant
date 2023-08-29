import React, { useState } from 'react'
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



function valuetext(value) {
    return `${value}°C`;
}

export default function FoodsMenue() {

    const [showFilterSection, setShowFilterSection] = useState(false)
    const [value, setValue] = React.useState([0, 200000]);

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <Layout>
            <div className='mt-24 '>
                <Title title="منوی غذا" theme="bg-main-color5" />

                <div className=' sm:border-[1px] border-gray-300 sm:rounded-xl grid grid-cols-1 lg:grid-cols-3 gap-4 relative mt-14 p-1'>

                    <div className={`bg-main-color4 lg:col-span-1 lg:relative  absolute top-0  w-full h-full duration-300 flex flex-col items-center z-30 p-4 border-l-[1px] border-gray-300 ${showFilterSection ? "right-0 block" : "-right-full lg:right-0 hidden lg:block"}`}>
                        <div className='flex items-center justify-center p-2 lg:hidden'>
                            <button className='flex items-center justify-center bg-main-color1 text-main-color4 py-1 px-3 rounded-xl' onClick={() => setShowFilterSection(false)}>
                                <CancelIcon />
                            </button>

                        </div>

                        <div className=' w-full sticky top-0 left-0 p-2 flex flex-col items-center'>
                            <Stack className='w-full bg-white p-4 flex flex-wrap items-start justify-center gap-2 rounded-md' direction="row" >

                                <Chip className='flex items-center flex-row-reverse  chip' label="پیتزا" onDelete={handleDelete} />
                                <Chip className='flex items-center flex-row-reverse  chip' label="پیتزا" onDelete={handleDelete} />
                                <Chip className='flex items-center flex-row-reverse  chip' label="پیتزا" onDelete={handleDelete} />
                                <Chip className='flex items-center flex-row-reverse  chip' label="پیتزا" onDelete={handleDelete} />
                                <Chip className='flex items-center flex-row-reverse  chip' label="پیتزا" onDelete={handleDelete} />
                                <Chip className='flex items-center flex-row-reverse  chip' label="پیتزا" onDelete={handleDelete} />



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
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="همه" />
                                        <FormControlLabel control={<Checkbox />} label="پیتزا" />
                                        <FormControlLabel control={<Checkbox />} label="همبرگر" />
                                        <FormControlLabel control={<Checkbox />} label="مرغ" />
                                        <FormControlLabel control={<Checkbox />} label="دسر" />
                                        <FormControlLabel control={<Checkbox />} label="کباب" />
                                        <FormControlLabel control={<Checkbox />} label="پاستا" />
                                        <FormControlLabel control={<Checkbox />} label="نوشیدنی" />

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

                            <button className='bg-main-color5 py-2 rounded-md w-full mt-4 text-main-color4'>اعمال فیلتر</button>
                        </div>
                    </div>

                    <div className=' col-span-1 lg:col-span-2 flex flex-col items-center relative'>
                        <div className='flex items-center justify-center p-2 lg:hidden '>
                            <button className='flex items-center justify-center bg-main-color1 text-main-color4 py-1 px-3 rounded-xl' onClick={() => setShowFilterSection(true)}>
                                فیلتر
                                <TuneIcon className='mr-1 ' />
                            </button>
                        </div>

                        <div className='w-full h-full p-2 gap-2   grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                            <div className='col-span-1'>
                                <Card />
                            </div>
                            <div className='col-span-1'>
                                <Card />
                            </div>
                            <div className='col-span-1'>
                                <Card />
                            </div>
                            <div className='col-span-1'>
                                <Card />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}
