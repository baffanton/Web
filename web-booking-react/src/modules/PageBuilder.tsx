import { Header } from "./Header";
import { getCookie } from "../helpers/cookie";

const PageBuilder: React.FC<any> = () => {
    const city = getCookie('city');

    return (
        <>
            <Header city={city} productCount={0} />
        </>
    )
}

export { PageBuilder };
