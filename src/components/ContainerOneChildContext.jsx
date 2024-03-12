
import { DndContext, useDroppable, DragOverlay } from '@dnd-kit/core'
import {
    restrictToVerticalAxis,
} from '@dnd-kit/modifiers';


function ContainerOneChildContext({ items, indexes, handleDragStart, handleDragEnd }) {

    const { setNodeRef } = useDroppable({
        id: 'droppable',
        data: {
            type: 'type3',
        },
    });

    return (<>
        <DndContext modifiers={[restrictToVerticalAxis]} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            <div style={{ padding: '30px' }} className="first-sections" id="drag-container" ref={setNodeRef}>

                {indexes && indexes.map((ind) => { return items[ind] })
                }
                {/* <DragOverlay>
        {indexes && indexes.map((ind) => {
          if (ind === (activeId - 1)) return items[ind]
        })
        }
      </DragOverlay> */}
            </div>
        </DndContext>
    </>)
}

export default ContainerOneChildContext