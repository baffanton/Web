import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AlignItemsTypes } from "enums/flexTypes";
import { Field } from "ui/Field";
import './style.scss';

interface ICity {
    city: string;
    onClick: (any) => void;
};

const City: React.FC<ICity> = ({city, onClick}) => {
    return (
        <Field ai={AlignItemsTypes.center} className='city'>
            <FontAwesomeIcon className='city__icon' icon={faLocationDot} />
            <p className='city__name' onClick={onClick}>{ city }</p>
        </Field>
    )
}

export { City };
