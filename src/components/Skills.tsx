import { useEffect, useRef, useState } from 'react'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities';

function Skills() {

    const [skillRefs, setskillRefs] = useState([
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
    ])

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 1,
        data: {
            supports: 'type4',
        },
    });

    const style: React.CSSProperties = {
        transform: CSS.Translate.toString(transform),
    };

    const skills = [{ name: "Javascript", level: 90, ref: skillRefs[0] },
    { name: "Python", level: 80, ref: skillRefs[1] },
    { name: "HTML/CSS", level: 70, ref: skillRefs[2] },
    { name: "SQL/NoSQL", level: 70, ref: skillRefs[3] },
    { name: "React", level: 70, ref: skillRefs[4] }]

    // useEffect(() => {

    //     skills.forEach((skill, i) => {
    //         let skillLevel = 0
    //         let widthInterval = setInterval(() => {
    //             skillLevel += 5
    //             skill.ref.current.style.width = skillLevel + "%"
    //             skillLevel >= skill.level ? clearInterval(widthInterval) : null
    //         }, 30)
    //     })
    // }, [skills])

    return (<aside style={style} ref={setNodeRef} className="skills aside section">
        <div {...listeners} {...attributes} className="section-inner">
            <h2 className="heading">Skills</h2>
            <div className="content">
                <div id="skillset" className="skillset">
                    {skills.map((skill, i) => {
                        return (
                            <div key={skill.name} className="item">
                                <h3 className="level-title">{skill.name}</h3>
                                <div className="level-bar progress">
                                    <span className="progress-bar-value" ref={skillRefs[i]} style={{ backgroundColor: "lightgreen", width: skill.level + "%", borderRadius: '20px' }} id={skill.name}></span>
                                </div>
                            </div>)
                    })}
                </div>
            </div>
        </div>
    </aside>)
}

export default Skills