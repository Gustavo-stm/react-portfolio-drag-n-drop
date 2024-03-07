
import { DndContext, useDroppable, DragOverlay } from '@dnd-kit/core'
import {
  restrictToVerticalAxis
} from '@dnd-kit/modifiers';
import './assets_two/css/styles.css'

import React, { useState } from 'react';
import About from './About';
import Latest from './Latest';
import Experience from './Experience';
import Header from './Header';
import BasicInfo from './BasicInfo';
import Skills from './Skills';
import Testimonials from './Testimonials';
import Education from './Education';
import Languages from './Languages';
import Footer from './Footer';

type AppProps = {};

const App: React.FC<AppProps> = () => {

  const [activeId, setActiveId] = useState<number | null>(null);
  const [items, setItems] = useState<React.ReactNode[]>([<About />, <Latest />, <Experience />])
  const [indexes, setIndexes] = useState<number[]>([0, 1, 2])
  const { setNodeRef } = useDroppable({
    id: 'droppable',
    data: {
      type: 'type3',
    },
  });

  function handleDragStart(event: any) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event: any) {

    let deltaY = event.delta.y

    let contHeight = 1000
    if (deltaY < 0) {
      let draggableFinalIndex: number;
      let diff = contHeight + deltaY

      let newIndexes = [...indexes]
      indexes.forEach((ind, i) => {
        if (ind + 1 === activeId) {
          newIndexes.splice(i, 1)
          draggableFinalIndex = diff > 600 ? i : diff > 400 ? i - 1 : i - 2
          newIndexes.splice(draggableFinalIndex, 0, ind)
        }
      })

      setIndexes(newIndexes)
    }

    else {
      let draggableFinalIndex: number;
      let diff = contHeight - deltaY
      let newIndexes = [...indexes]

      indexes.forEach((ind, i) => {
        if (ind + 1 === activeId) {
          newIndexes.splice(i, 1)
          draggableFinalIndex = diff > 600 ? i : diff > 400 ? i + 1 : i + 2
          newIndexes.splice(draggableFinalIndex, 0, ind)
        }
      })

      setIndexes(newIndexes)
    }
  }

  return (
    <>
      <Header />
      <div className="container sections-wrapper py-5" >
        <div className="row" >
          <div className="primary col-lg-8 col-12" >
            <DndContext modifiers={[restrictToVerticalAxis]} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
              <div id="drag-container" ref={setNodeRef}>

                {indexes && indexes.map((ind) => { return items[ind] })
                }
                <DragOverlay>
                  {indexes && indexes.map((ind) => {
                    if (ind === (activeId - 1)) return items[ind]
                  })
                  }
                </DragOverlay>
              </div>
            </DndContext>
          </div>
        </div>
        < div className="secondary col-lg-4 col-12" >
          <div className="aside-sections">
            <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
              <BasicInfo />
              <Skills />
              <Testimonials />
              <Education />
              <Languages />
            </DndContext>
          </div>
        </div>
      </div >
      < Footer />
    </>
  )
}

export default App
