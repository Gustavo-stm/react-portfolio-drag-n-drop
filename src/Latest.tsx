import { useState } from 'react'
import subfeatured from './data.js'
import projectFeatured from './assets_two/images/projects/project-featured.jpg'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities';

interface Info {
    description: string;
    image: string;
    title: string
}

const SubFeatured = ({ info }: { info: Info }) => {

    return (<div className="item row" >
        <a className="col-md-4 col-12" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/coderpro-bootstrap-4-startup-template-for-software-projects/" target="" >
            <img className="img-fluid project-image rounded shadow-sm" src={info.image} alt="project name" />
        </a>
        < div className="desc col-md-8 col-12" >
            <h3 className="title" > <a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/coderpro-bootstrap-4-startup-template-for-software-projects/" target="" >{info.title} </a></h3 >
            <p className="mb-2" > {info.description} </p>
            < p > <a className="more-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/coderpro-bootstrap-4-startup-template-for-software-projects/" target="" > <i className="fas fa-external-link-alt" > </i>Find out more</a > </p>
        </div>
    </div>
    )
}

function Latest() {

    const [subfeaturedSecs, setSubFeatured] = useState(subfeatured)
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 2,
        data: {
            supports: 'type3',
        },
    });

    const style = {
        transform: CSS.Translate.toString(transform),
    };


    return (<section style={style} ref={setNodeRef} className="latest section" >
        <span className="drag-me">DRAG ME</span>
        <div {...listeners} {...attributes} className="section-inner shadow-sm rounded" >
            <h2 className="heading" > Latest Projects </h2>
            <div className="content" >
                <div className="item featured text-center" >
                    <div className="featured-image has-ribbon" >
                        <a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/launch-bootstrap-4-template-for-saas-businesses/" target="" >
                            <img className="img-fluid project-image rounded shadow-sm" src={projectFeatured} alt="project name" />
                        </a>
                        < div className="ribbon" >
                            <div className="text" > New </div>
                        </div>
                    </div>
                    < h3 className="title mb-3" > <a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/launch-bootstrap-4-template-for-saas-businesses/" target="" > Launch - The perfect Bootstrap template for SaaS products </a></h3>
                    <div className="desc text-start" >
                        <p>You can promote your main project here.Suspendisse in tellus dolor.Vivamus a tortor eu turpis pharetra consequat quis non metus.Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
                    </div>
                    < a className="btn btn-cta-secondary" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/launch-bootstrap-4-template-for-saas-businesses/" target="" > <i className="fas fa-thumbs-up" > </i> Back my project</a >
                </div>
                < hr className="divider" />
                {subfeaturedSecs && subfeaturedSecs.map(sec => {
                    return (<div key={sec.title} > <SubFeatured info={sec} /></div >)
                })}
            </div>
        </div>
    </section >)

}
export default Latest