import starimg from './assets/images/star.png'

function Languages() {

    const languages = [{ name: "Spanish", description: "Native Spaeaker", level: 5 },
    { name: "Swedish", description: "Professional Proficency", level: 4 },
    { name: "English", description: "Professional Proficency", level: 4 },
    { name: "German", description: "Deep understanding", level: 3 },
    ]

    return (<aside className="languages aside section">
        <div className="section-inner shadow-sm rounded">
            <h2 className="heading">Languages</h2>
            <div className="content">
                <ul id="language-list" className="list-unstyled">
                    {languages.map((lang, i) => {
                        return (<li key={i + 'lang'} id={i.toString()} className="item">
                            <span className="title"><strong>{lang.name}:</strong></span>
                            {[...Array(lang.level)].map((element, i) => {
                                return (<img key={i + 'star'} style={{ width: "20px", height: "20px" }}
                                    src={starimg} />)
                            })
                            }
                            <p className="level">{lang.description}<br className="visible-xs" /></p>
                        </li >)
                    })}
                </ul>
            </div>
        </div>
    </aside>)
}

export default Languages