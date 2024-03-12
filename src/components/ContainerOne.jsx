import { useDraggable } from '@dnd-kit/core'
import React from 'react'
import ContainerOneChildContext from './ContainerOneChildContext'
import { CSS } from '@dnd-kit/utilities';

function ContainerOne({ containerIndexes, handleDragStart, handleDragEnd, items, indexes }) {

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 0,
        data: {
            supports: 'type1',
        },
    });

    const style = {
        transform: CSS.Translate.toString(transform),
    };
    return (
        <div style={{ ...style, padding: '30px', backgroundColor: 'lightgrey' }} ref={setNodeRef}>
            <ContainerOneChildContext containerIndexes={containerIndexes} listeners={{ ...listeners }} attributes={{ ...attributes }} items={items} indexes={indexes} handleDragStart={handleDragStart} handleDragEnd={handleDragEnd} />
        </div>
    );
}

export default ContainerOne