import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AlignItemsTypes, JustifyContentTypes } from "enums/flexTypes";
import { Link } from "react-router-dom";
import { Field } from "ui/Field";
import './style.scss';

interface IBasket {
    count: number;
}

const Basket: React.FC<IBasket> = ({ count }) => {
    return (
        <Field jc={JustifyContentTypes.flexEnd} ai={AlignItemsTypes.center} className='basket'>
            <Link to="/cart">
                <FontAwesomeIcon className='basket__icon' icon={faCartShopping} />
            </Link>
            <p className='basket__count'>{ count }</p>
        </Field>
    )
}

export { Basket };
