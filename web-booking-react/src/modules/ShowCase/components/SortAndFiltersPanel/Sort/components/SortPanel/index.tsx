import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DirectionTypes } from "enums/flexTypes";
import { Field } from "ui/Field";
import { ISortConfig, sortConfig } from "./config";
import './style.scss';

interface ISortPanel {
    onClick: (item: ISortConfig) => void;
}

const SortPanel: React.FC<ISortPanel> = ({ onClick }) => {
    return (
        <Field direction={DirectionTypes.column} className='sort-panel'>
            {sortConfig.map((item) => {
                return (
                    <Field className='sort-panel__item' key={item.id} onClick={() => onClick(item)}>
                        <FontAwesomeIcon className='sort-panel__icon' icon={item.icon} />
                        <p className='sort-panel__title'>{item.title}</p>
                    </Field>
                )
            })}
        </Field>
    )
}

export { SortPanel };
