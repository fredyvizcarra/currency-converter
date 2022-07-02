import Conveter from "./components/Converter";
import Layout from "./components/Layout";
import TopCrypto from "./components/TopCrypto";

export default function HomePage() {
    return <Layout>
        <div className="flex flex-col items-center">
            <Conveter />
            <TopCrypto />
        </div>

    </Layout>
}