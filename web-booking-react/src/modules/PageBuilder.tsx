import { Header } from "./Header";
import { ShowCase } from "./ShowCase";
import { ChooseLocation } from "./ChooseLocation";
import { checkCityInCookies } from "./helpers";
import { useDispatch, useSelector } from "react-redux";
import { changeLocation } from "store/reducers/User/actions";
import { openModal } from "store/reducers/Window/actions";
import { useEffect } from "react";

const PageBuilder: React.FC<any> = () => {
    const dispatch = useDispatch();
    const cityFromCookie = checkCityInCookies();
    const modalIsOpen = useSelector((state: any) => state.window.modalIsOpen);
    
    useEffect(() => {
        if (cityFromCookie) {
            // @ts-ignore
            dispatch(changeLocation(cityFromCookie));
        }

        if (!cityFromCookie) {
            // @ts-ignore
            dispatch(openModal(true));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>
            <Header city={cityFromCookie} />
            <ShowCase />
            {modalIsOpen && (
                <ChooseLocation cityIsChoosen={!!cityFromCookie}  />
            )}
        </>
    )
}

export { PageBuilder };
