import locationimg from "../assets/images/location.png"
import emailImg from '../assets/images/email.png'
import linkimg from '../assets/images/link.png'

function BasicInfo() {

    const basicInfo = [<li key={0}><img style={{ width: '14px', height: '14px', marginRight: '20px' }} src={locationimg} /><span className="sr-only">Location:</span>
        Malmö, SWE</li>,
    <li key={1}><img style={{ width: '14px', height: '14px', marginRight: '20px' }} src={emailImg} /><span className="sr-only">Email:</span><a
        href="#">gcs26@yahoo.com</a></li>,
    <li key={2}><img style={{ width: '14px', height: '14px', marginRight: '20px' }} src={linkimg} /><span className="sr-only">Website:</span><a
        href="#">https://catala-sverdrup.se</a></li>]

    return (<aside className="pers-info aside section">
        <div className="section-inner">
            <h2 className="heading">Basic Information</h2>
            <div className="content">
                <ul className="list-unstyled">
                    {basicInfo && basicInfo.map(inf => {
                        return (inf)
                    })}
                </ul>
            </div>
        </div>
    </aside>)
}

export default BasicInfo