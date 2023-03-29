import { AlignItemsTypes, JustifyContentTypes } from "enums/flexTypes";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { openModal } from "store/reducers/Modal/actions";
import { Field } from "ui/Field";
import { Basket } from "./components/Basket";
import { City } from "./components/City";
import "./style.scss"

const Header: React.FC<any> = () => {
    const dispatch = useDispatch();
    const city = useSelector((state: any) => state.user.city);
    const count = useSelector((state: any) => state.cart.count);

    const clickHandler = () => {
        // @ts-ignore
        dispatch(openModal());
    }

    return (
        <Field ai={AlignItemsTypes.center} jc={JustifyContentTypes.spaceBetween} className='header'>
            <City city={city} onClick={clickHandler} />
            <Link to="/" className='header__company'>WebBooking</Link>
            <Basket count={count}/>
        </Field>
    )
}

export { Header };
