import { Header } from "./Header";
import { ShowCase } from "./ShowCase";
import { useDispatch, useSelector } from "react-redux";
import { changeLocation } from "store/reducers/User/actions";
import { useEffect } from "react";
import { Route, Routes } from "react-router";
import { CartPage } from "./CartPage";
import { checkCityInCookies } from "helpers/checkCityInCookie";
import { openModal } from "store/reducers/Modal/actions";
import { ChooseCity } from "./ChooseCity";
import { Field } from "ui/Field";
import './style.scss';

const PageBuilder: React.FC<any> = () => {
    const dispatch = useDispatch();
    const cityFromCookie = checkCityInCookies();
    const modalIsOpened = useSelector((state: any) => state.modal.isOpened);
    
    useEffect(() => {
        if (cityFromCookie) {
            // @ts-ignore
            dispatch(changeLocation(cityFromCookie));
        }

        if (!cityFromCookie) {
            // @ts-ignore
            dispatch(openModal());
        }
    }, [dispatch, cityFromCookie])


    return (
        <>
            <Header />
            <Field className="main">
                <Routes>
                    <Route path="/" element={<ShowCase />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </Field>
            
            {modalIsOpened && (
                <ChooseCity currentCity={cityFromCookie} cityIsChoosen={!!cityFromCookie}  />
            )}
        </>
    )
}

export { PageBuilder };
