import './RightSidebar.scss'
import ShortCuts from './ShortCuts'
import wade from '../assets/wade.png'
import jane from '../assets/jane.png'
import Group1 from '../assets/Group1.png'
import esther from '../assets/esther.png'
import Group2 from '../assets/Group2.png'
import Group3 from '../assets/Group2.png'
import Brooklyn from '../assets/Brooklyn.png'
import cameron from '../assets/cameron.png'
// import Group3 from '../assets/Group2.png'



function RightSidebar() {
    return (
        <>
            <div>
                <div className="Right-row">
                    <div className=" muted">
                        <p> <strong>YOUR PAGES</strong></p>
                    </div>
                    <div className="">
                        <p className='text-primary'>see all</p>
                    </div>

                </div>
                <ShortCuts />
                <hr />
                <div className="Right-row">
                    <div className=" muted">
                        <p> <strong>CONTACTS</strong></p>
                    </div>
                    <div className="">
                        <p className='text-primary'>see all</p>
                    </div>

                </div>
                <div className='wrapper'>
                    <div className="img-column">
                        <img src={wade} alt="wade" />
                        <p>Wade Warren</p>
                    </div>
                    <div className="img-column">
                        <img src={esther} alt="esther" />
                        <p>Esther Howard</p>
                    </div>
                    <div className="img-column">
                        <img src={jane} alt="jane" />
                        <p>Jane Cooper</p>
                    </div>
                    <div className="img-column">
                        <img src={Brooklyn} alt="Brooklyn" />
                        <p>Brooklyn Simmons</p>
                    </div>
                    <div className="img-column">
                        <img src={cameron} alt="cameron" />
                        <p>Cameron Williamson </p>
                    </div>
                </div>

                <hr />
                <div className="Right-row">
                    <div className=" muted">
                        <p> <strong>Group</strong></p>
                    </div>
                    <div className="">
                        <p className='text-primary'>see all</p>
                    </div>
                </div>
                <div className='wrapper '>
                    <div className="img-column">
                        <img src={Group1} alt="Group1" />
                    </div>
                    <div className="img-column">
                        <p>Design Enthuasist</p>
                    </div>
                    <div className="img-column">
                        <img src={Group2} alt="Group2" />
                    </div>
                    <div className="img-column">
                        <p>UI Official</p>
                    </div> <br />
                    <div className="img-column">
                        <img src={Group3} alt="Group3" />
                    </div> 
                    <div className="img-column">
                        <p>Web Developer</p>
                    </div>
                   

                </div>

       
            </div>



        </>
    )
}

export default RightSidebar