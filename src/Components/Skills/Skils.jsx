import React from 'react'
import './skils.css'
import gallery_1 from '../../assets/skills-logo.png'
import gallery_2 from '../../assets/skills-logo1.webp'
import gallery_3 from '../../assets/skills-logo2.png'
import gallery_4 from '../../assets/skills-logo3.png'
import gallery_5 from '../../assets/Backend-py.png'
import gallery_6 from '../../assets/Back-end-dj.png'
import gallery_7 from '../../assets/AWS-log.png'
import gallery_8 from '../../assets/Tools-doc.png'
import gallery_9 from '../../assets/Tools-git.png'
import gallery_10 from '../../assets/sql-logo.webp'
import gallery_11 from '../../assets/mysql-logo.png'

const skils = () => {
  return (
    <div className='skills'>
      <div className="skill">
        <h2>Frontend</h2>
        <div className="gallery">
          <div className="card">
          <img src={gallery_3} alt="" />
          <h3>HTML 5</h3>
          </div>
          <div className="card">
          <img src={gallery_4} alt="" />
          <h3>CSS 3</h3>
          </div>
          <div className="card">
          <img src={gallery_1} alt="" />
          <h3>JAVASCRIPT</h3>
          </div>
          <div className="card">
          <img src={gallery_2} alt="" />
          <h3>REACT</h3>
          </div>
        </div>
        <h2>Backend</h2>
        <div className="gallery">
          <div className="card">
          <img src={gallery_5} alt="" />
          <h3>PYTHON</h3>
          </div>
          <div className="card">
          <img src={gallery_6} alt="" />
          <h3>Django</h3>
          </div>
          <div className="card">
          <img src={gallery_10} alt="" />
          <h3>SQL</h3>
          </div>
          <div className="card">
          <img src={gallery_11} alt="" />
          <h3>MYSQL</h3>
          </div>
        </div>
        <h2>Tools</h2>
        <div className="gallery">
          <div className="card">
          <img src={gallery_7} alt="" />
          <h3>AWS</h3>
          </div>
          <div className="card">
          <img src={gallery_8} alt="" />
          <h3>DOCKER</h3>
          </div>
          <div className="card">
          <img src={gallery_9} alt="" />
          <h3>GIT</h3>
          </div>
        </div>

      </div>
    </div>
  )
}

export default skils