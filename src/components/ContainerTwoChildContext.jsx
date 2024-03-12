
import { DndContext, useDroppable } from '@dnd-kit/core'
import {
    restrictToVerticalAxis,
} from '@dnd-kit/modifiers';


function ContainerTwoChildContext({ containerIndexes, listeners, attributes, secondItems, secondIndexes, handleSecondStart, handleDragEnd }) {

    const { setNodeRef } = useDroppable({
        id: 'droppable',
        data: {
            type: 'type3',
        },
    });

    console.log(secondItems)

    return (<div {...listeners} {...attributes}>
        <DndContext modifiers={[restrictToVerticalAxis]} onDragStart={handleSecondStart} onDragEnd={handleDragEnd}>
            <div style={{ padding: '30px' }} className={containerIndexes[1] === 1 ? 'aside-sections' : 'first-sections'} id="aside-sections" ref={setNodeRef}>
                {secondIndexes && secondIndexes.map((ind) => { return secondItems[ind] })
                }
            </div>
        </DndContext>
    </div>)
}

export default ContainerTwoChildContext