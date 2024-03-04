import profilePic from './assets_two/images/profile.png'


function Header() {

    return (<header className="header">
        <div className="container">
            <div className="row align-items-center">
                <div className="col col-md-8 d-flex justify-content-around">
                    <img className="profile-image img-fluid float-start rounded-circle" src={profilePic} alt="profile image" />
                    <div className="profile-content">
                        <h1 className="name">James Lee</h1>
                        <h2 className="desc">Web App Developer</h2>
                        <ul className="social list-inline">
                            <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-github-alt"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-stack-overflow"></i></a></li>
                            <li className="list-inline-item last-item"><a href="#"><i className="fab fa-codepen"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-md-auto">
                    <div className="dark-mode-switch d-flex">
                        <div className="form-check form-switch mx-auto mx-md-0">
                            <input type="checkbox" className="form-check-input me-2" id="darkSwitch" />
                            <label className="custom-control-label" htmlFor="darkSwitch">Dark Mode</label>
                        </div>
                    </div>
                    <a className="btn btn-cta-primary" href="https://themes.3rdwavemedia.com/" target=""><i className="fas fa-paper-plane"></i> Contact Me</a>
                </div>
            </div>
        </div>
    </header>)
}

export default Header