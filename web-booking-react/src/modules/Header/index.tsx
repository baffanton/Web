import { faCartShopping, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AlignItemsTypes, JustifyContentTypes } from "enums/flexTypes";
import { Field } from "ui/Field";
import "./style.scss"

interface IHeader {
    city: string | null;
    productCount: number;
}

const Header: React.FC<IHeader> = (props: IHeader) => {
    const { city, productCount } = props;

    return (
        <Field ai={AlignItemsTypes.center} jc={JustifyContentTypes.spaceBetween} className='header'>
            <Field ai={AlignItemsTypes.center} className='location'>
                <FontAwesomeIcon className='location__icon' icon={faLocationDot} />
                <p id='city-name' className='location__city-name'>{ city }</p>
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

