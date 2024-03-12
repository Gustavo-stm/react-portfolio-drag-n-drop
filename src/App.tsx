
import { DndContext, useDroppable, DragOverlay } from '@dnd-kit/core'
import {
  restrictToVerticalAxis,
  restrictToHorizontalAxis
} from '@dnd-kit/modifiers';

import './assets/style.css'

import React, { useEffect, useState } from 'react';
import ContainerOne from './components/ContainerOne'
import ContainerTwo from './components/ContainerTwo'
import About from './components/About';
import Latest from './components/Latest';
import Experience from './components/Experience';
import Header from './Header';
import BasicInfo from './components/BasicInfo';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Education from './components/Education';
import Languages from './components/Languages';
import Footer from './Footer';

type AppProps = {};

const App: React.FC<AppProps> = () => {

  const [activeId, setActiveId] = useState<number | null>(null);
  const [secondActiveId, setSecondActiveId] = useState<number | null>(null);
  const [containerActiveId, setContainerActiveId] = useState<number | null>(null);

  const [items, setItems] = useState<React.ReactNode[]>([<About />, <Latest />, <Experience />])
  const [secondItems, setSecondItems] = useState<React.ReactNode[]>([<BasicInfo />, <Skills />, <Testimonials />, <Education />, <Languages />])
  const [containerItems, setContainerItems] = useState<React.ReactNode[]>([<ContainerOne />, <ContainerTwo />])

  const [indexes, setIndexes] = useState<number[]>([0, 1, 2])
  const [secondIndexes, setSecondIndexes] = useState<number[]>([0, 1, 2, 3, 4])
  const [containerIndexes, setContainerIndexes] = useState<number[]>([0, 1])

  function handleContainerDragStart(event: any) {
    console.log(event)
    setContainerActiveId(event.active.id);
  }

  function handleContainerDragEnd(event: any) {
    let deltaX = event.delta.x

    if (deltaX > 0) {
      if (containerActiveId === 0) {
        setContainerIndexes([1, 0])
      }
      else {
        setContainerIndexes([0, 1])
      }
    }

    else {
      if (containerActiveId === 0) {
        setContainerIndexes([0, 1])
      }
      else {
        setContainerIndexes([1, 0])
      }
    }
  }


  function handleDragStart(event: any) {
    setActiveId(event.active.id);

  }

  function handleDragEnd(event: any) {

    let deltaY = event.delta.y
    let draggableFinalIndex: number;
    let contHeight = 1000

    let theIndexes = event.active.data.current.supports === 'type3' ?
      indexes :
      secondIndexes

    let newIndexes = [...theIndexes]

    if (deltaY < 0) {

      let diff = contHeight + deltaY

      theIndexes.forEach((ind, i) => {
        if (ind + 1 === activeId) {
          newIndexes.splice(i, 1)
          draggableFinalIndex = diff > 600 ? i : diff > 400 ? i - 1 : i - 2
          newIndexes.splice(draggableFinalIndex, 0, ind)
        }
      })

      if (event.active.data.current.supports === 'type3') {
        setIndexes(newIndexes)
      }
      else {
        setSecondIndexes(newIndexes)
      }
    }

    else {

      let diff = contHeight - deltaY

      theIndexes.forEach((ind, i) => {
        if (ind + 1 === activeId) {
          newIndexes.splice(i, 1)
          draggableFinalIndex = diff > 600 ? i : diff > 400 ? i + 1 : i + 2
          newIndexes.splice(draggableFinalIndex, 0, ind)
        }
      })

      if (event.active.data.current.supports === 'type3') {
        setIndexes(newIndexes)
      }
      else {
        setSecondIndexes(newIndexes)
      }
    }
  }

  const handleSecondStart = (event: any) => {
    setSecondActiveId(event.active.id);
  }

  useEffect(() => {
    setContainerItems([<ContainerOne containerIndexes={containerIndexes} items={items} indexes={indexes} handleDragStart={handleDragStart} handleDragEnd={handleDragEnd} />,
    <ContainerTwo containerIndexes={containerIndexes} secondItems={secondItems} secondIndexes={secondIndexes} handleSecondStart={handleSecondStart} handleDragEnd={handleDragEnd} />
    ])
  }, [containerIndexes])

  return (
    <>
      <Header />
      <div className="main-container sections-wrapper">
        <div className="row" >
          <DndContext modifiers={[restrictToHorizontalAxis]} onDragStart={handleContainerDragStart} onDragEnd={handleContainerDragEnd}>
            {containerIndexes && containerIndexes.map(ind => {
              return containerItems[ind]
            }
            )}
            {/* {<ContainerOne items={items} indexes={indexes} handleDragStart={handleDragStart} handleDragEnd={handleDragEnd} />
            <ContainerTwo secondItems={secondItems} secondIndexes={secondIndexes} handleSecondStart={handleSecondStart} handleDragEnd={handleDragEnd} />
             } */}
            {/* <DndContext modifiers={[restrictToVerticalAxis]} onDragStart={handleSecondStart} onDragEnd={handleDragEnd}>
              <div style={{ padding: '30px' }} className="aside-sections" ref={setNodeRef}>

                {secondIndexes && secondIndexes.map((ind) => { return secondItems[ind] })
                } */}
            {/* <DragOverlay>
                  {secondIndexes && secondIndexes.map((ind) => {
                    if (ind === (secondActiveId - 1)) return secondItems[ind]
                  })
                  }
                </DragOverlay> */}
            {/* </div>
            </DndContext> */}
          </DndContext>
        </div >
      </div>
      < Footer />
    </>
  )
}

export default App
