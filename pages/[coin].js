import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../modules/Landing/components/Layout";

const Coin = () => {
    const { query } = useRouter();
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


    const filterDataCrypto = data.find(item => {
        return item.slug === query.coin
    });





    return (
        <Layout >
            <div className="flex justify-center h-screen bg-primary">
                <div className=" mt-6 h-full w-full bg-primary shadow-2xl  ">
                    <div className="md:flex md:space-x-32">
                        <div className="flex ">
                            <div className='w-20 ml-16'>
                                <img className='h-10 w-10 rounded-full m-2' src={filterDataCrypto && filterDataCrypto.crypto_data?.logo} alt='' />
                            </div>
                            <div className="text-white mr-4 flex items-center text-2xl">{filterDataCrypto && filterDataCrypto.name}</div>
                            <div className="text-white flex items-center text-xl">({filterDataCrypto && filterDataCrypto.symbol})</div>
                        </div>
                        <div className="flex space-x-20 justify-center mt-4 md:h-8">
                            <div className="text-2xl text-white">${filterDataCrypto && filterDataCrypto.quote?.USD.price.toFixed(2)}</div>
                            <div className="bg-green-600 h-auto w-auto rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                <div className="text-white p-2">Rank #{filterDataCrypto && filterDataCrypto.cmc_rank}</div>
                            </div>

                        </div>
                    </div>

                    <div className=' grid grid-cols-2 text-sm space-x-10 justify-center mt-10 md:grid-cols-4'>

                        <div className=' border-r flex flex-col items-center font-light text-white'>
                            <div className="">LOW-HIGH % 24h</div>
                            <div className="mt-3 font-bold">{filterDataCrypto && filterDataCrypto.quote?.USD.percent_change_24h}</div>
                        </div>
                        <div className=' border-l flex flex-col items-center font-light text-white md:border-r'>
                            <div className=' '>MAREKT CAP</div>
                            <div className="mt-3 font-bold ">{filterDataCrypto && filterDataCrypto.quote?.USD.market_cap}</div>
                        </div>
                        <div className='mt-8 border-r flex flex-col items-center font-light text-white md:mt-0 md:border-l'>
                            <div className=' '>VOLUME 24h</div>
                            <div className=" mt-3 font-bold">{filterDataCrypto && filterDataCrypto.quote?.USD.volume_24h}</div>
                        </div>
                        <div className='mt-8  border-l flex flex-col items-center font-light text-white md:mt-0'>
                            <div className=' '>TOTAL SUPPLY</div>
                            <div className="mt-3 font-bold">{filterDataCrypto && filterDataCrypto.total_supply}</div>
                        </div>
                    </div>
                    <div className="text-white text-md p-10">{filterDataCrypto && filterDataCrypto.crypto_data?.description}</div>
                    {/* <div className="flex text-white">
                        <a href=https://twitter.com{}/>
                            <img
                                src='images/twitter-footer.png'
                                alt='twitter'
                                className='h-6 w-6'
                            />
                        </a>
                        <div>@{filterDataCrypto && filterDataCrypto.crypto_data?.twitter_username}</div>
                    </div> */}







                </div>
            </div>

        </Layout>



    );
}

export default Coin;