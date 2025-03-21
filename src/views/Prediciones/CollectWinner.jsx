import Modal from '@/components/Modal';
import { Layout } from '@/components/app/Layout';
import { ArrowLeftIcon, ArrowSmallDownIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { useState } from 'react';

function CollectWinner({
  open,
  setOpen,
  background = true,
  allowClickToClose = false,
  size = 'md',
  flat,
  closeButton,
  className,
}) {


  return (
    <Modal
      open={open}
      setOpen={setOpen}
      background={background}
      allowClickToClose={allowClickToClose}
      size={size}
      flat={flat}
      closeButton={closeButton}
      className={className}
    >
      <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="ml-4 mt-2">
          <h3 className="flex items-center text-sm font-semibold leading-6 text-gray-100">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mr-2 text-white "
            >
              <ArrowLeftIcon className="h-6 w-auto" />
            </button>
            Collect Winnings
          </h3>
        </div>
      </div>
      <div>
        <div className="mt-7 flex justify-center">
          <svg
            className='w-40 h-40 text-yellow-500'
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M98.398 21.146a17.092 17.092 0 0 0-4.636.521c-20.49 5.262-33.163 20.63-36.116 38.649-2.952 18.019 2.168 38.346 12.676 58.193 20.695 39.086 63.262 77.08 117.852 85.85-5.61-6.72-11.05-14.246-16.274-22.375-39.008-12.57-70.021-42.344-85.67-71.899-9.206-17.387-12.846-34.491-10.82-46.857C77.437 50.862 83.482 42.89 98.238 39.1c.065-.017.068-.034.092-.053-.065-.143.105-.08 0 0 .022.049.061.11.176.217.527.493 1.689 2.24 2.207 5.14 1.036 5.804-.413 15.593-8.135 25.68l14.293 10.942c10.418-13.61 13.65-28.086 11.56-39.785-1.044-5.85-3.396-11.165-7.628-15.124-3.174-2.969-7.747-4.868-12.405-4.972zm315.204 0c-4.658.104-9.23 2.003-12.405 4.972-4.232 3.96-6.584 9.274-7.629 15.124-2.089 11.699 1.143 26.174 11.56 39.785l14.294-10.942c-7.722-10.087-9.171-19.876-8.135-25.68.518-2.9 1.68-4.647 2.207-5.14a.695.695 0 0 0 .176-.217c-.105-.08.065-.143 0 0 .024.019.027.036.092.053 14.756 3.79 20.801 11.76 22.828 24.127 2.026 12.366-1.614 29.47-10.82 46.857-15.649 29.555-46.662 59.33-85.67 71.899-5.223 8.129-10.665 15.655-16.274 22.375 54.59-8.77 97.157-46.764 117.852-85.85 10.508-19.847 15.628-40.174 12.676-58.193-2.953-18.02-15.626-33.387-36.116-38.649a17.092 17.092 0 0 0-4.636-.521zm-276.166 7.713c2.146 36.533 16.76 83.07 36.537 120.824 10.707 20.442 22.876 38.334 34.761 50.685C220.62 212.72 232 218.858 240 218.858h32c8 0 19.38-6.138 31.266-18.49 11.885-12.351 24.054-30.243 34.761-50.685 19.777-37.755 34.39-84.29 36.537-120.824H137.436zm95.564 208v16h46v-16h-46zm6.445 34c-2.458 25.967-12.796 57.873-24.437 76h81.984c-11.64-18.127-21.979-50.033-24.437-76h-33.11zm-38.445 94v14h110v-14H201zm-32 32v94h174v-94H169zm23 23h128v48H192v-48z"></path>
          </svg>
        </div>
        <div className="mt-6">
      <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="ml-4 mt-2">
          <h3 className="text-md font-semibold leading-6 text-gray-100">Collecting</h3>
        </div>
        <div className="ml-4 mt-2 flex-shrink-0 text-white">
      0.000
        </div>
      </div>
    </div>
       
      </div>

      <div className="mt-5">
        <button className="focus:shadow-outline-orange bg-gradient-green text-md block w-full transform rounded-lg border border-transparent  px-6 py-3 text-center font-semibold leading-6 text-white transition-all duration-150 ease-in-out hover:scale-105 focus:border-green-600 focus:outline-none ">
          Confirm
        </button>
      </div>
    </Modal>
  );
}

export default CollectWinner;
