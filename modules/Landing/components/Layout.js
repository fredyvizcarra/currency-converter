import Conveter from "./Converter";
import Navbar from "./Navbar";
import TopCrypto from "./TopCrypto";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className='flex justify-center h-screen bg-primary'>


                {children}
                {/* <TopCrypto /> */}
            </main>

        </>

    );
}