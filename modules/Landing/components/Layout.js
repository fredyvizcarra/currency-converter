import Conveter from "./Converter";
import Navbar from "./Navbar";
import TopCrypto from "./TopCrypto";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className=' h-full bg-primary'>


                {children}
                {/* <TopCrypto /> */}
            </main>

        </>

    );
}