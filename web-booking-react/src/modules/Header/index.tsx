import { faCartShopping, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AlignItemsTypes, JustifyContentTypes } from "enums/flexTypes";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "store/reducers/Window/actions";
import { Field } from "ui/Field";
import "./style.scss"

const Header: React.FC<any> = () => {
    const dispatch = useDispatch();
    const city = useSelector((state: any) => state.user.city);
    const productCount = useSelector((state: any) => state.cart.productCount);

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
            <p className='header__company'>WebBooking</p>
            <Field jc={JustifyContentTypes.flexEnd} ai={AlignItemsTypes.center} className='basket'>
                <FontAwesomeIcon className='basket__icon' icon={faCartShopping} />
                <p id='basket-count' className='basket__count'>{ productCount }</p>
            </Field>
        </Field>
    )
}

export { Header };
