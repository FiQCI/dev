import React from 'react';
import { capitalizeFirstLetter } from '../../utils/textUtils.js';

export const DeviceStatus = (props) => {

  const { deviceData, devicesWithStatus } = props;

  const status_options = ["offline", "online", "healthy"]

  return (
    <>
      <div className="flex flex-col justify-start text-[14px]">
        <p className="pb-2"><strong>Qubits:</strong> {deviceData.qubits}</p>
        <p className="pb-2"><strong>Basis gates:</strong> {deviceData.basis}</p>
        <p className="pb-2"><strong>Topology:</strong> {deviceData.topology}</p>
      </div>

      {(devicesWithStatus.device_status && !status_options.includes(devicesWithStatus.device_status)) ? (
        <div className='text-center text-[#ae4000] bg-[#ffb66d] border-[0.5px] border-[#ae4000] rounded-[100px] w-[88px] h-[25px]'>
          <p className='font-bold text-[14px]'>{capitalizeFirstLetter(devicesWithStatus.device_status)}</p>
        </div>
      ) : (
        devicesWithStatus.health ? (
          <div className='text-center text-[#204303] bg-[#B9DC9C] border-[0.5px] border-[#204303] rounded-[100px] w-[88px] h-[25px]'>
            <p className='font-bold text-[14px]'>Online</p>
          </div>
        ) : (
          <div className='text-center text-[#7E0707] bg-[#F8CECE] border-[0.5px] border-[#7E0707] rounded-[100px] w-[88px] h-[25px]'>
            <p className='font-bold text-[14px]'>Offline</p>
          </div>
        )
      )}
    </>
  )

}