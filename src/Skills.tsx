function Skills() {

    const skills = [{ name: "Javascript", level: 90 },
    { name: "Python", level: 80 },
    { name: "HTML/CSS", level: 70 },
    { name: "SQL/NoSQL", level: 70 },
    { name: "React", level: 70 }]

    return (<aside className="skills aside section">
        <div className="section-inner">
            <h2 className="heading">Skills</h2>
            <div className="content">
                <div id="skillset" className="skillset">
                    {skills.map(skill => {
                        return (
                            <div key={skill.name} className="item">
                                <h3 className="level-title">{skill.name}</h3>
                                <div className="level-bar progress">
                                    <span className="progress-bar-value" style={{ backgroundColor: "lightgreen", width: skill.level + "%", borderRadius: '20px' }} id={skill.name}></span>
                                </div>
                            </div>)
                    })}
                </div>
            </div>
        </div>
    </aside>)
}

export default Skills