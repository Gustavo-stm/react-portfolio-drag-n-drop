import { useState } from 'react'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import Experience from './Experience.tsx'
import About from './About.tsx'
import Skills from './Skills.tsx'
import Languages from './Languages.tsx'
import Education from './Education.tsx'
import Testimonials from './Testimonials.tsx'
import BasicInfo from './BasicInfo.tsx'
import Latest from './Latest.tsx'
import { DndContext, useDroppable, DragOverlay } from '@dnd-kit/core'
import './assets_two/css/styles.css'

const App = () => {

  const [activeId, setActiveId] = useState(null);
  const [items, setItems] = useState([<About />, <Latest />, <Experience />])
  const [indexes, setIndexes] = useState([0, 1, 2])
  const { nodeRef, setNodeRef } = useDroppable({
    id: 'droppable',
    data: {
      type: 'type3',
    },
  });

  function handleDragStart(event) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event) {

    let deltaY = event.delta.y
    let contHeight = 1000

    if (deltaY < 0) {
      let draggableFinalIndex;
      let diff = contHeight + deltaY

      let newIndexes = [...indexes]
      indexes.forEach((ind, i) => {
        if (ind === activeId) {
          newIndexes.splice(i, 1)
          draggableFinalIndex = diff < 600 ? i - 2 : i - 1
          newIndexes.splice(draggableFinalIndex, 0, ind)
        }
      })

      setIndexes(newIndexes)
    }

    else {
      let draggableFinalIndex;
      let diff = contHeight - deltaY

      let newIndexes = [...indexes]
      indexes.forEach((ind, i) => {
        if (ind === activeId) {
          newIndexes.splice(i, 1)
          draggableFinalIndex = diff > 600 ? i + 2 : i + 1
          newIndexes.splice(draggableFinalIndex, 0, ind)
        }
      })

      setIndexes(newIndexes)
    }
  }

  // event.activatorEvent.target.style.position = "absolute";
  // event.activatorEvent.target.style.top = event.delta.y + "!important"
  // event.activatorEvent.target.style.left = event.delta.x + "!important"
  // console.log(event.activatorEvent.target.style)
  // if (over && active.data.current.supports.includes(over.data.current.type)) {
  //   // do stuff
  //   alert('hello')
  // }

  return (
    <>
      <Header />
      <div className="container sections-wrapper py-5" >
        <div className="row" >
          <div className="primary col-lg-8 col-12" >
            <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
              <div id="drag-container" ref={setNodeRef}>

                {indexes && indexes.map((ind) => { return items[ind] })
                }
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
