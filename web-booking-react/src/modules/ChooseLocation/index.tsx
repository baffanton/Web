import { DirectionTypes } from 'enums/flexTypes';
import { setCookie } from 'helpers/cookie';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactSelect from 'react-select';
import { changeLocation } from 'store/reducers/User/actions';
import { openModal } from 'store/reducers/Window/actions';
import { Field } from 'ui/Field';
import { Modal } from 'ui/Modal';
import { configCities } from './config';
import './style.scss';

const ChooseLocation: React.FC<{
    cityIsChoosen: boolean;
}> = ({ cityIsChoosen }) => {
    const [modalIsOpened, setModalIsOpened] = useState<boolean>(true);
    const cities = useSelector((state: any) => state.user.cities);
    const [value, setValue] = useState<any>(null)
    const dispatch = useDispatch();

    const handlerChange = (selected: any) => {
        setValue(selected);
    }

    const handlerClick = (title: string) => {
        setValue(title);
        // @ts-ignore
        dispatch(changeLocation(title));
        setModalIsOpened(false);
        setCookie('city', title);
        // @ts-ignore
        dispatch(openModal(false));
    }

    const locationIsChoosen = (city: any) => {
        const checkCityFromList = false;
        if (checkCityFromList) {
            setCookie('city', city);
        }
        setModalIsOpened(false);
        // @ts-ignore
        dispatch(openModal(false));
    }

    const handlerAcceptBtn = () => {
        if (!value) {
            return null;
        }
        const { label } = value;
        // @ts-ignore
        dispatch(changeLocation(label));
        setCookie('city', label);
        setModalIsOpened(false);
        // @ts-ignore
        return dispatch(openModal(false));
    }

    return (
        <Modal 
            isOpened={modalIsOpened} 
            title="Выберите город"
            onModalClose={(city: string | null) => locationIsChoosen(city)} 
            showCloseButton={cityIsChoosen}
        >
            <Field direction={DirectionTypes.column} className='location__body'>
                <ReactSelect 
                    options={cities}
                    closeMenuOnSelect
                    onChange={handlerChange}
                    value={value}
                    isSearchable
                    className='location-select__container'
                    classNamePrefix='location-select'
                    placeholder='Город'
                />
                <Field direction={DirectionTypes.column} className='location__million'>
                    {configCities.map(({id, title}) => {
                        return (
                            <Field key={id} onClick={() => handlerClick(title)}>
                                <p key={id} id={id} className='location__city'>{title}</p>
                            </Field>
                        )
                    })}
                </Field>
                <Field>
                    <button disabled={!value} className='location__accept-button' onClick={handlerAcceptBtn}>Применить</button>
                </Field>
            </Field>
        </Modal>
    );
}

export { ChooseLocation };
