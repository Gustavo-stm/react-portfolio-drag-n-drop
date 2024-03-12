import { useDraggable } from '@dnd-kit/core'
import React from 'react'
import ContainerTwoChildContext from './ContainerTwoChildContext'
import { CSS } from '@dnd-kit/utilities';

function ContainerTwo({ containerIndexes, handleSecondStart, handleDragEnd, secondItems, secondIndexes }) {


    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 1,
        data: {
            supports: 'type2',
        },
    });

    const style = {
        transform: CSS.Translate.toString(transform),
    };
    return (
        <div style={{ ...style, padding: '30px', backgroundColor: 'salmon' }} ref={setNodeRef}>
            <ContainerTwoChildContext containerIndexes={containerIndexes} listeners={{ ...listeners }} attributes={{ ...attributes }}
                secondItems={secondItems} secondIndexes={secondIndexes}
                handleSecondStart={handleSecondStart} handleDragEnd={handleDragEnd} />
        </div>
    );
}

export default ContainerTwo