
import { DndContext, useDroppable } from '@dnd-kit/core'
import {
    restrictToVerticalAxis,
} from '@dnd-kit/modifiers';


function ContainerOneChildContext({ containerIndexes, listeners, attributes, items, indexes, handleDragStart, handleDragEnd }) {

    const { setNodeRef } = useDroppable({
        id: 'droppable',
        data: {
            type: 'type3',
        },
    });

    return (<div {...listeners} {...attributes}>
        <DndContext modifiers={[restrictToVerticalAxis]} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            <div style={{ padding: '30px' }} className={containerIndexes[0] === 0 ? 'first-sections' : 'aside-sections'} ref={setNodeRef} id="drag-container">
                {indexes && indexes.map((ind) => { return items[ind] })
                }
            </div>
        </DndContext>
    </div>)
}

export default ContainerOneChildContext