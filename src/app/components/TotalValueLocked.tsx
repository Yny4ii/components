import React from 'react';
interface TotalValueLockedProps {
    value:string
}
const TotalValueLocked = ({value}:TotalValueLockedProps) => {
    return (
        <div className='bg-main-bg rounded-lg py-[12px] px-[34px] shadow-main-shadow w-full flex items-center text-accent justify-between'>
            <p className='text-3xl font-medium'>Total Value Locked:</p>
            <p className='text-4xl font-bold'>${value}</p>
        </div>
    );
};

export default TotalValueLocked;