import foreign from "./assets/images/foreign.png"
function Testimonials() {

    return (<aside className="testimonials aside section">
        <div className="section-inner">
            <h2 className="heading">Testimonials</h2>
            <div className="content">
                <div className="item">
                    <p className="quote"><em>"Gustavo is an excellent software engineer and
                        he is passionate about what he does. You can totally count on him to deliver
                        your projects!"</em></p>
                    <p className="source"><span className="name">Lars Holmqvist</span><br /><span className="title">CTO,
                        Sankta Maria Folkhögskola</span></p>
                </div>

                <p><a className="more-link"
                    href="https://www.linkedin.com/in/gustavo-catala-sverdrup-40128427/"><img
                        className="external-link" src={foreign} />More on
                    Linkedin</a></p>

            </div>
        </div>
    </aside>)
}
export default Testimonials