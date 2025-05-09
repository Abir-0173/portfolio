import React from 'react'
import './About.css'
import abir from '../../assets/abir.jpg'

const About = () => {
    return (
        <div className='about_parent'>
            <div className="about">
                <p>Hi! I'm Tanimur Rahman Abir, a passionate and dedicated learner who enjoys building things with code. I'm deeply interested in web development, exploring cloud technologies like AWS, and solving real-world problems through creative solutions.</p>
                <p>I love working in teams because I believe great things happen when ideas are shared and collaboration flows. Whether it's designing a website or debugging a tricky issue, I enjoy the process and put my full energy into it.</p>
                <p>Right now, I'm focused on improving my skills, learning new technologies, and creating meaningful projects that reflect my journey as a developer. I truly enjoy what I do — and I'm always excited for the next challenge!</p>
            </div>
            <div className="imageBox">
                <img src={abir} alt="" />
            </div>
        </div>

    )
}

export default About