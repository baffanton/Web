import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeCartEnum } from 'enums/changeCartTypes';
import { AlignItemsTypes, DirectionTypes, JustifyContentTypes } from 'enums/flexTypes';
import { useDispatch } from 'react-redux';
import { changeCart } from 'store/reducers/Cart/actions';
import { Field } from 'ui/Field';
import './style.scss';

const CartCard: React.FC<any> = ({item}) => {
    const dispatch = useDispatch();
    const { id, title, author, count, price, picture } = item;

    const handlerClick = (type: ChangeCartEnum) => {
        // @ts-ignore
        dispatch(changeCart(type, id));
    }

    return (
        <Field className='cart-card'>
            <Field className='cart-card__image-container'>
                <img className='cart-card__image' src={picture} alt="" />
            </Field>
            <Field direction={DirectionTypes.column} className='cart-card__info-container'>
                    <p className='cart-card__title'>{title}</p>
                    <p className='cart-card__author'>{author}</p>
                </Field>
            <Field direction={DirectionTypes.column} className='cart-card__price-container'>
                <Field ai={AlignItemsTypes.flexEnd} direction={DirectionTypes.column} className='cart-card__change-container'>
                    <Field ai={AlignItemsTypes.center} jc={JustifyContentTypes.spaceBetween} className='cart-card__change'>
                        <FontAwesomeIcon onClick={() => handlerClick(ChangeCartEnum.minus)} className='cart-card__minus-book' icon={faMinus} />
                        <p className='cart-card__count-book'>{count}</p>
                        <FontAwesomeIcon onClick={() => handlerClick(ChangeCartEnum.plus)} className='cart-card__plus-book' icon={faPlus} />
                    </Field>
                    <p onClick={() => handlerClick(ChangeCartEnum.delete)} className='cart-card__delete-book'>Удалить</p>
                </Field>
                <Field ai={AlignItemsTypes.flexEnd} jc={JustifyContentTypes.flexEnd} className='cart-card__total'>
                    <p className='cart-card__digit'>{price} x {count}</p>
                    <p className='cart-card__sum'>Итого: {price * count}</p>
                </Field>
            </Field>
        </Field>
    );
}

export { CartCard };
