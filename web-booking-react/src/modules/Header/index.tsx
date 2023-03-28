import { faCartShopping, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AlignItemsTypes, JustifyContentTypes } from "enums/flexTypes";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { openModal } from "store/reducers/Window/actions";
import { Field } from "ui/Field";
import "./style.scss"

const Header: React.FC<any> = () => {
    const dispatch = useDispatch();
    const city = useSelector((state: any) => state.user.city);
    const count = useSelector((state: any) => state.cart.count);

    const clickHandler = () => {
        // @ts-ignore
        dispatch(openModal(true));
    }

    return (
        <Field ai={AlignItemsTypes.center} jc={JustifyContentTypes.spaceBetween} className='header'>
            <Field ai={AlignItemsTypes.center} className='location'>
                <FontAwesomeIcon className='location__icon' icon={faLocationDot} />
                <p id='city-name' className='location__city-name' onClick={clickHandler}>{ city }</p>
            </Field>
            <Link to="/" className='header__company'>WebBooking</Link>
            <Field jc={JustifyContentTypes.flexEnd} ai={AlignItemsTypes.center} className='basket'>
                <Link to="/cart">
                    <FontAwesomeIcon className='basket__icon' icon={faCartShopping} />
                </Link>
                <p id='basket-count' className='basket__count'>{ count }</p>
            </Field>
        </Field>
    )
}

export { Header };
