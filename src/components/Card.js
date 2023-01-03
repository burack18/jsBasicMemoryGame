import React, { useEffect, useState } from 'react'

export const Card = ({ data, checkSelecteds, isSelected, selecteds }) => {
    const [color, setColor] = useState('gray')
    const { id, value } = data

    useEffect(() => {
        if (selecteds[0]?.id==id) {
            setColor('white')
        } else {
            setColor('gray')
        }
    }, [selecteds])


    const changeColor = (e) => {
        checkSelecteds({ id, value })
    }

    return (
        <div onClick={(e) => changeColor(e)}
            style={{
                backgroundColor: color,
                height: '100%',
                cursor: 'pointer'
            }}>
            <div style={{ position: 'relative', top: '30%' }}>
                {color=='white'&&value}
            </div>
        </div>
    )
}
