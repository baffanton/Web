import { DirectionTypes } from 'enums/flexTypes';
import { setCookie } from 'helpers/cookie';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactSelect from 'react-select';
import { closeModal } from 'store/reducers/Modal/actions';
import { changeLocation } from 'store/reducers/User/actions';
import { Field } from 'ui/Field';
import { Modal } from 'ui/Modal';
import { configCities } from './config';
import './style.scss';

interface IChooseCity {
    currentCity: string | null;
    cityIsChoosen: boolean;
}

const ChooseCity: React.FC<IChooseCity> = ({ currentCity, cityIsChoosen }) => {
    const dispatch = useDispatch();

    const cities = useSelector((state: any) => state.user.cities);
    const modalIsOpened = useSelector((state: any) => state.modal.isOpened);

    const [currentOption, setCurrentOption] = useState<{label: string, value: string} | null>(cities.find(city => city.label === currentCity) || null);

    const handlerChange = (selected: any) => {
        setCurrentOption(selected);
    }

    const handlerClickOnCity = (title: string) => {
        setCookie('city', title);
        // @ts-ignore
        dispatch(changeLocation(title));
        // @ts-ignore
        dispatch(closeModal());
    }

    const locationIsChoosen = () => {
        // @ts-ignore
        dispatch(closeModal());
    }

    const handlerAcceptBtn = () => {
        if (!currentOption) {
            return null;
        }
        const { label } = currentOption;
        setCookie('city', label);
        // @ts-ignore
        dispatch(changeLocation(label));
        // @ts-ignore
        dispatch(closeModal());
    }

    return (
        <Modal 
            isOpened={modalIsOpened} 
            title="Выберите город"
            onModalClose={locationIsChoosen} 
            showCloseButton={cityIsChoosen}
        >
            <Field direction={DirectionTypes.column} className='choose-city'>
                <ReactSelect 
                    options={cities}
                    closeMenuOnSelect
                    onChange={handlerChange}
                    value={currentOption}
                    isSearchable
                    className='choose-city__select-container'
                    classNamePrefix='choose-city'
                    placeholder='Город'
                />
                <Field direction={DirectionTypes.column} className='choose-city__big-cities'>
                    {configCities.map(({ id, title }) => {
                        return (
                            <Field key={id} onClick={() => handlerClickOnCity(title)}>
                                <p key={id} id={id} className='choose-city__name'>{ title }</p>
                            </Field>
                        )
                    })}
                </Field>
                <Field>
                    <button disabled={!currentOption} className='choose-city__accept-button' onClick={handlerAcceptBtn}>Применить</button>
                </Field>
            </Field>
        </Modal>
    );
}

export { ChooseCity };
