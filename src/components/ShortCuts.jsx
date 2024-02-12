import './ShortCuts.scss'
import Website from '../assets/websitedesign.png'
import mobile from '../assets/mobiledesign.png'
import product from '../assets/productdesign.png'


function ShortCuts() {
    return (
        <div className='wrapper'>
            <div className="img">
                <img src={Website} alt="Websitedesign" />
            </div>
            <div className="imgName">
                <p>Website Design</p>
            </div>
            <div className="img">
                <img src={mobile} alt="mobile" />
            </div>
            <div className="imgName">
                <p>Mobile Design</p>
            </div>
            <div className="img">
                <img src={product} alt="product" />
            </div>
            <div className="imgName">
                <p>Product Design</p>
            </div>

        </div>
    )
}

export default ShortCuts