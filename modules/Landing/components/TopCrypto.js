import { useState, useEffect, Fragment } from "react";
import React from "react";

export default function TopCrypto() {
    const [cryptocurrency, setCryptocurrency] = useState([]);
    const [metadata, setMetadata] = useState([]);


    useEffect(() => {
        request();
    }, []);

    const request = async () => {
        const response = await fetch('./api/getTopCrypto')
        const data = await response.json();
        const dataFilter = data.data;
        let idsCrypto = [];

        setCryptocurrency(dataFilter);

        for (let item of dataFilter) {
            idsCrypto.push(item.id);
        }

        const response1 = await fetch('./api/getMetadata?' + new URLSearchParams({ idsCrypto }))
        const data1 = await response1.json();
        const dataFilter1 = data1.data;
        setMetadata(dataFilter1);
    };



    const filterData = () => {

        const mapOfUsers = {};

        const displayData = [];


        for (let [key, item] of Object.entries(metadata)) {
            mapOfUsers[item.id] = item;

        }


        for (let i of cryptocurrency) {

            displayData.push({ ...i, crypto_data: mapOfUsers[i.id] });
        }
        return displayData;

    };

    const data = filterData();

    return (

        <Fragment>


            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10 mb-10">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="  text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="pl-44 py-3 e">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3 ">
                                Price USD
                            </th>
                            <th scope="col" className="px-6 py-3k">
                                Change 24h
                            </th>
                            <th scope="col" className="px-6 py-3 ">
                                Cap market
                            </th>
                            <th scope="col" className="px-6 py-3  ">
                                Volume(24h)
                            </th>

                        </tr>
                    </thead>
                    {data.map(item => {
                        return (
                            <tbody >
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                                    <th scope="row" className=" md:visible px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                        <div className='flex '>
                                            <div className='w-20 ml-16'>
                                                <img className='h-10 w-10 rounded-full m-2' src={item.crypto_data?.logo} alt='' />
                                            </div>
                                            <div className='text-white mr-4 flex items-center text-lg'>
                                                {item.symbol}
                                            </div>
                                            <div className='text-slate-500 flex items-center text-md'>
                                                {item.name}
                                            </div>

                                        </div>
                                    </th>
                                    <td className="px-6 py-4">
                                        <div className="">
                                            $ {item.quote?.USD.price.toFixed(2)}
                                        </div>
                                    </td>
                                    <td className="p-6 py-4  ">
                                        <div className="">
                                            % {item.quote?.USD.percent_change_24h.toFixed(2)}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4   ">
                                        <div className="">
                                            $ {item.quote?.USD.market_cap.toFixed(2)}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4  ">
                                        <div className="">
                                            $ {item.quote?.USD.volume_24h.toFixed(2)}
                                        </div>
                                    </td>

                                </tr>
                            </tbody>
                        )
                    })}
                </table>

            </div>

        </Fragment>

    )
}

{/* <Fragment>
            <h2 className="text-2xl w-20 ml-20 py-5 text-white">Name</h2>
            {data.map(item => {
                return (
                    <div className="flex space-x-16">
                        <div className='flex '>
                            <div className='w-20 ml-16'>
                                <img className='h-10 w-10 rounded-full m-2' src={item.crypto_data?.logo} alt='' />
                            </div>
                            <div className='text-white mr-4 flex items-center text-lg'>
                                {item.symbol}
                            </div>
                            <div className='text-slate-500 flex items-center text-md'>
                                {item.name}
                            </div>

                        </div>
                        <div className="">
                            {item.quote?.USD.price.toFixed(2)} $
                        </div>


                    </div>


                )
            }
            )}
        </Fragment> */}