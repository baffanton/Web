import { AlignItemsTypes, DirectionTypes, JustifyContentTypes } from "enums/flexTypes";
import { createRef, FC, PropsWithChildren } from "react";
import cx from 'classnames'
import { IField } from "./types";
import "./style.scss"

const Field: FC<PropsWithChildren<IField>> = ({
    id = '',
    children,
    className = '',
    ai = AlignItemsTypes.default,
    jc = JustifyContentTypes.default,
    direction = DirectionTypes.default,
    noFlex = false,
    ...params
}) => {
    const ref = createRef<HTMLDivElement>();
    const classNames = cx(
        className,
        'field',
        jc && `field_jc_${jc}`,
        ai && `field_ai_${ai}`,
        noFlex && `field_no-flex`,
        direction && `field_${direction}`
    )

    if (id) {
        return (
            <div id={id} className={classNames} {...params} ref={ref}>{ children }</div>
        )
    }

    return (
        <div className={classNames} {...params} ref={ref}>{ children }</div>
    )

}

export { Field };
