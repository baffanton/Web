import { InputPositionEnum, InputTypeEnum } from "enums/inputTypes";

interface IRadio {
    name: string;
    id: string;
    label: string;
    inputType: InputTypeEnum;
    inputPosition: InputPositionEnum;
    labelClassNames?: string;
    inputClassNames?: string;
    checked?: boolean;
    handlerChange?: any;
    handlerClick?: any;
}

const Radio: React.FC<IRadio> = ({ 
    name,
    id,
    label,
    inputType,
    inputPosition,
    labelClassNames,
    inputClassNames,
    handlerChange,
    handlerClick,
    checked
    }) => {
    if (inputPosition === InputPositionEnum.first) {
        return (
            <>
                <input checked={checked} onClick={handlerClick} name={name} id={id}  type={inputType} className={inputClassNames || ''} />
                <label htmlFor={id} className={labelClassNames || ''}>{ label }</label>
            </>
        )
    }
    return (
        <>
            <label htmlFor={id} className={labelClassNames || ''}>{ label }</label>
            <input onChange={handlerChange} id={id}  type={inputType} className={inputClassNames || ''} />
        </>
    )
}

export { Radio };
