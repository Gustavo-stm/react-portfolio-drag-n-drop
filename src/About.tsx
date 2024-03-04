import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities';



function About() {

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 0,
        data: {
            supports: 'type3',
        },
    });

    const style = {
        transform: CSS.Translate.toString(transform),
    };



    return (<section style={style} ref={setNodeRef} className="about section" >
        <div {...listeners} {...attributes} className="section-inner shadow-sm rounded" >
            <h2 className="heading" > About Me </h2>
            < div className="content" >
                <p>I´m an international developer with residence in Sweden who came to Malmö after living in
                    Madrid, Lund and Stockholm.
                    I´m a cosmopolitan, though my roots are both in Sweden and Spain. I am passionate about
                    languages, and working with web dev implies learning new (and old) programming languages
                    and making the best out of them.</p>
            </div>
        </div>
    </section>)

}
export default About