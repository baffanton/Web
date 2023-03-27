import './style.scss';
import cx from 'classnames';
import { PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Field } from 'ui/Field';
import { DirectionTypes } from 'enums/flexTypes';

interface IModal {
    isOpened: boolean;
    title: string;
    onModalClose: any;
    showCloseButton?: boolean;
}

const Modal: React.FC<PropsWithChildren<IModal>> = ({ 
    isOpened, 
    title, 
    onModalClose,
    showCloseButton = true, 
    children }) => {
    const classNames = cx('modal', isOpened ? 'modal_isOpen' : 'modal_isClosed');

    return (
        <Field className={classNames}>
            <Field className='modal__body' direction={DirectionTypes.column}>
                {showCloseButton && (
                    <FontAwesomeIcon className='modal__close' onClick={onModalClose} icon={faXmark} />
                )}
                <p className='modal__title'>{title}</p>
                {children}
            </Field>
        </Field>
    )
}

export { Modal };
