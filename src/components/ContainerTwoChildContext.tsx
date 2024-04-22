import { useState, useEffect } from 'react'
import { DndContext, useDroppable } from '@dnd-kit/core'
import {
    restrictToVerticalAxis,
} from '@dnd-kit/modifiers';

type ContainerTwoChild = {
    containerIndexes: any
    listeners: any
    attributes: any
    secondItems: any
    secondIndexes: any
    handleSecondStart: any
    handleDragEnd: any
}

const ContainerTwoChildContext: React.FC<ContainerTwoChild> = ({ containerIndexes, listeners, attributes, secondItems, secondIndexes, handleSecondStart, handleDragEnd }): JSX.Element => {

    const [stylesClass, setStyleClass] = useState('')

    const { setNodeRef } = useDroppable({
        id: 'droppable2',
        data: {
            type: 'type4',
        },
    });

    useEffect(() => {
        if (containerIndexes != undefined) {
            setStyleClass(containerIndexes[1] === 1 ? 'aside-sections' : 'extra-aside-styles')
        }
    }, [containerIndexes])

    return (<div {...listeners} {...attributes}>
        <DndContext modifiers={[restrictToVerticalAxis]} onDragStart={handleSecondStart} onDragEnd={handleDragEnd}>
            <div style={{ padding: '30px' }} className={stylesClass} id="aside-sections" ref={setNodeRef}>
                {secondIndexes && secondIndexes.map((ind: any) => { return secondItems[ind] })
                }
            </div>
        </DndContext>
    </div>)
}

export default ContainerTwoChildContext