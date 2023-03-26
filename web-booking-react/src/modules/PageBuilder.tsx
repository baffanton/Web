import { Header } from "./Header";
import { getCookie } from "../helpers/cookie";
import { ShowCase } from "./ShowCase";

const PageBuilder: React.FC<any> = () => {
    const city = getCookie('city');

    return (
        <>
            <Header city={city} />
            <ShowCase />
        </>
    )
}

export { PageBuilder };
