import { ListItem, ListItemText } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch } from 'react-redux';
import { removeFromList, updateQty } from '../../redux/slices/ordersSlice';

const OrderCart = (props) => {

    const dispatch = useDispatch()

    const [qty, setQty] = useState(props.qty)

    const removeFromCard = (pId) => {
        dispatch(removeFromList({ id: pId }))
    }

    const addHandler = () => {
        qty < 10 && setQty(prev => prev + 1)
    }

    const decrease = () => {
        qty > 1 && setQty(prev => prev - 1)
    }

    useEffect(() => {
        dispatch(updateQty({ id: props.id, qty }))
    }, [qty])


    return (

        <ListItem className="p-2 flex flex-col md:flex-row items-center justify-between  border-b-[1px] border-main-color1 mb-4" disablePadding>

            <div className='flex items-center justify-between'>

                <Image src={props.image} width={50} height={50} alt="product-img" />

                <div className="flex flex-col items-start justify-between mr-2">
                    <ListItemText className="text-sm" primary={props.title} />
                    <div className='flex flex-col sm:flex-row items-center justify-between '>
                        <ListItemText className="text-sm" primary={`قیمت : ${props.offerPresent == 0 ? props.price * props.qty : props.offerPresent == 100 ? "رایگان" :
                            props.price * props.qty - (((props.offerPresent * props.price) / 100) * props.qty)} `} />
                        {
                            props.offerPresent > 0 && (
                                <p className='text-xs self-end sm:self-auto text-gray-400 line-through mr-1'>{props.price * props.qty}</p>
                            )
                        }
                    </div>
                </div>

            </div>

            <div className="flex items-center justify-between my-4 md:my-0">
                <div className="flex items-center justify-between ml-4">
                    <AddIcon onClick={addHandler} className="text-lg ml-1" />
                    <span>{props.qty}</span>
                    <RemoveIcon onClick={decrease} className="text-lg mr-1" />
                </div>

                <button onClick={() => removeFromCard(props.id)}>
                    <DeleteForeverIcon className="text-main-color5" />
                </button>
            </div>


        </ListItem>

    )
}

export default OrderCart