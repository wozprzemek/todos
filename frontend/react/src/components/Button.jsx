import { ArrowPathIcon, CheckCircleIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/solid'
import React from 'react'

export const Button = ({ type, onClick }) => {
    switch(type) {
        case 'add':
            return(
                <button className='w-12 text-zinc-900 bg-zinc-400 h-10 flex justify-center items-center rounded-r-md' onClick={onClick}>
                    Add
                </button>
            )
        case 'edit':
            return(
                <button className='w-8 h-8 flex justify-center items-center' onClick={onClick}>
                    <PencilIcon className='w-6 text-slate-50'/>
                </button>
            )
        case 'delete':
            return(
                <button className='w-8 h-8 flex justify-center items-center' onClick={onClick}>
                    {<TrashIcon className='w-6 text-red-500'/>}
                </button>
            )
        case 'save':
            return(
                <button className='w-24 text-zinc-50 bg-blue-500 h-10 flex justify-center items-center rounded-r-md' onClick={onClick}>
                    Save
                </button>
            )
        case 'restart':
            return(
                <button className='w-8 text-zinc-900 h-8 flex justify-center items-center rounded-r-md' onClick={onClick}>
                    {<ArrowPathIcon className='w-6 text-blue-300' />}
                </button>
            )
        case 'complete':
            return(
                <button className='w-8 text-zinc-900 h-8 flex justify-center items-center rounded-r-md' onClick={onClick}>
                    {<CheckCircleIcon className='w-6 text-green-500' />}
                </button>
            )
    }
}
