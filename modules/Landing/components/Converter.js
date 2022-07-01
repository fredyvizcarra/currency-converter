import { useState, useEffect, Fragment } from "react";
import React from "react";

const Conveter = () => {
    const [newValue, setNewValue] = useState({ coinOne: "", coinTwo: "", amountToConverter: "" });
    const [data, setData] = useState([]);



    useEffect(() => {
        request();
    }, [newValue]);

    const onChange = (event) => {
        const value = event.target.value;
        setNewValue({
            ...newValue,
            [event.target.name]: value
        });

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        return request(newValue);
    }

    const request = async (newValue) => {
        const response = await fetch('./api/getConverter?' + new URLSearchParams(newValue))
        const data = await response.json();
        const dataFilter = data.data;
        setData(dataFilter);
    }


    return (

        <div className="h-full w-auto bg-primary">
            <h1 className=" flex justify-center text-4xl font-normal leading-normal pt-8 mb-2 text-white">Cryptocurrecy Converter</h1>
            <form onSubmit={handleSubmit} className=" p-14">
                <div className="flex justify-center">
                    <label className="inline-block relative w-64">

                        <select name="coinOne" value={newValue.coinOne} onChange={onChange} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option value="BTC">Bitcoin-BTC</option>
                            <option value="ETH">Ethereum-ETH</option>
                            <option value="XRP">Ripple-XRP</option>
                            <option value="SOL">Solana-SOL</option>
                            <option value="ADA">Cardano-ADA</option>
                            <option value="LTC">Litecoin-LTC</option>
                            <option value="DOT">Polkadot-DOT</option>
                            <option value="USD">United States Dollar-USD</option>
                            <option value="MXN">Mexican Peso-MXN</option>
                            <option value="EUR">Euro-EUR</option>

                        </select>
                    </label>
                    <h3 className="text-2xl text-white mx-5">To</h3>
                    <label className="inline-block relative w-64">

                        <select name="coinTwo" value={newValue.coinTwo} onChange={onChange} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option value="BTC">Bitcoin-BTC</option>
                            <option value="ETH">Ethereum-ETH</option>
                            <option value="XRP">Ripple-XRP</option>
                            <option value="SOL">Solana-SOL</option>
                            <option value="ADA">Cardano-ADA</option>
                            <option value="LTC">Litecoin-LTC</option>
                            <option value="DOT">Polkadot-DOT</option>
                            <option value="USD">United States Dollar-USD</option>
                            <option value="MXN">Mexican Peso-MXN</option>
                            <option value="EUR">Euro-EUR</option>
                        </select>
                    </label>
                </div>

                <div className="flex justify-center space-x-5  mt-10 ">
                    <input name="amountToConverter" type="number" placeholder="Amount" value={newValue.amountToConverter} onChange={onChange} className="shadow appearance-none border rounded w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Convert</button>
                </div>

            </form>
            <div className=" flex justify-center relative ">
                <div className="h-10 w-32 block appearance-none  bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    {data && data.map(item => {
                        return <div className="flex justify-center">{item.quote?.[newValue.coinTwo]?.price.toFixed(2)}</div>
                    })}
                </div>
            </div>


        </div>
    )







}

export default Conveter;