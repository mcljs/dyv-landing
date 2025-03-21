import { ArrowSmallDownIcon } from '@heroicons/react/20/solid';
import React from 'react';

function ExpireDown({
  numberSerie = 0,
  closesPrice = 0,
  lockedPrice = 0,
  pricePool = 0,
  valueUp = 0,
  valueDown = 0,
}) {
  return (
    <figure className="__slide w-[80vw] shrink-0  sm:p-10 md:w-[43vw] xl:w-[30rem]">
      <div className="relative">
        <div className="  relative overflow-hidden rounded-lg bg-gradient-to-b from-gray-400 to-purple-700 px-px pb-[3px] pt-px text-slate-500">
          <div className="sc-3a5c8d1f-1 sc-69ac18f9-1 glwDJB gzciwb">
            <div className="sc-b1def301-0 fHGznP">
              <div className="sc-3a5c8d1f-1 sc-32d5f017-0 glwDJB chfQFH text-white">
                <svg
                  viewBox="0 0 24 24"
                  width="21px"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sc-231a1e38-0 dlQLCq"
                >
                  <path d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" />
                </svg>
                <div
                  color="textDisabled"
                  fontSize="16px"
                  className="sc-daa4d312-0 ipHAGF"
                >
                  Expired
                </div>
              </div>
              <div className="sc-b1def301-1 ggUjvU">
                <div
                  fontSize="12px"
                  color="textDisabled"
                  className="sc-daa4d312-0 jeXusl"
                >
                  # {numberSerie}
                </div>
              </div>
            </div>
            <div
              className="sc-7199f2b4-0 flLQI "
              style={{ position: 'relative' }}
            >
              <div className="sc-3a5c8d1f-1 iQDxM cursor-pointer">
                <div className="sc-b0205416-0 cGCWyQ cursor-pointer">
                  <svg
                    height="65px"
                    width="240px"
                    viewBox="0 0 240 65"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-231a1e38-0 dPwWVs"
                  >
                    <g filter="url(#filter0_i)">
                      <path
                        d="M10.0001 49.2757L10.0003 64H234L234 49.2753C234 42.5136 229.749 36.4819 223.381 34.2077L138.48 3.8859C127.823 0.0796983 116.177 0.0796931 105.519 3.8859L20.6188 34.2076C14.2508 36.4819 10.0001 42.5138 10.0001 49.2757Z"
                        fill="#969696"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_i"
                        x="10.0001"
                        y="1.03125"
                        width={224}
                        height="62.9688"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation={1} />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2={-1}
                          k3={1}
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <div className="sc-b0205416-1 giGtSP cursor-pointer text-white">
                    <div
                      fontSize="20px"
                      color="success"
                      className="sc-daa4d312-0 cKWrye"
                    >
                      Up
                    </div>
                    <div className="sc-3a5c8d1f-1 glwDJB">
                      <div
                        height="14px"
                        className="sc-3a5c8d1f-1 sc-32d5f017-0 cboqpi ieaVLn"
                      >
                        <div
                          fontSize="14px"
                          color="textSubtle"
                          className="sc-daa4d312-0 fPRZRD mr-1"
                        >
                          {valueUp}x{' '}
                        </div>
                        <div
                          fontSize="14px"
                          color="textSubtle"
                          className="sc-daa4d312-0 kmaGkw"
                        >
                          Payout
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sc-3a5c8d1f-1 sc-8d651315-0 glwDJB rounded-lg bg-white">
                <div className="sc-8d651315-1 dztVmP">
                  <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                    <div className="ml-4 mt-2">
                      <h3 className="leading-2 text-xs font-semibold text-[#989898]">
                        CLOSED PRICE
                      </h3>
                      <p className="text-xs font-semibold leading-6 text-[#989898]">
                        ${closesPrice}
                      </p>
                    </div>
                    <div className="ml-4 mt-2 flex-shrink-0">
                      <button
                        type="button"
                        className="bg-gradient-red inline-flex items-center gap-x-1.5 rounded-md px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        <ArrowSmallDownIcon
                          className="-ml-0.5 h-5 w-5"
                          aria-hidden="true"
                        />
                        $ {closesPrice}
                      </button>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs text-[#989898]">
                    <dt>Locked Price:</dt>
                    <dd>${lockedPrice}</dd>
                  </div>
                  <div className="mt-1 flex items-center  justify-between text-xs text-[#989898]">
                    <dt>Prize Pool:</dt>
                    <dd>{pricePool} XMB</dd>
                  </div>
                </div>
              </div>
              <div className="sc-3a5c8d1f-1 cfWdbc">
                <div className="sc-b0205416-0 cGCWyQ">
                  <svg
                    height="65px"
                    width="240px"
                    viewBox="0 0 240 65"
                    color="text"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-231a1e38-0 dPwWVs"
                  >
                    <g filter="url(#filter0_i)">
                      <path
                        d="M10.0001 15.7243L10.0003 1H234L234 15.7247C234 22.4864 229.749 28.5181 223.381 30.7923L138.48 61.1141C127.823 64.9203 116.177 64.9203 105.519 61.1141L20.6188 30.7924C14.2508 28.5181 10.0001 22.4862 10.0001 15.7243Z"
                        fill="#DD0F0D"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_i"
                        x="10.0001"
                        y={1}
                        width={224}
                        height="62.9688"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation={1} />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2={-1}
                          k3={1}
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <div className="sc-b0205416-1 giGtSP text-white">
                    <div className="sc-3a5c8d1f-1 glwDJB">
                      <div
                        height="14px"
                        className="sc-3a5c8d1f-1 sc-32d5f017-0 cboqpi ieaVLn"
                      >
                        <div
                          fontSize="14px"
                          color="white"
                          className="sc-daa4d312-0 gxfCcI"
                        >
                          {valueDown}x
                        </div>
                        <div
                          fontSize="14px"
                          color="white"
                          className="sc-daa4d312-0 kftbyn"
                        >
                          Payout
                        </div>
                      </div>
                    </div>
                    <div
                      fontSize="20px"
                      color="white"
                      className="sc-daa4d312-0 jvBUtp"
                    >
                      Down
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}

export default ExpireDown;
