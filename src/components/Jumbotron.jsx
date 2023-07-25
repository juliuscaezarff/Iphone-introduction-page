import Iphone from '../assets/images/iphone-14.jpg'
import HoldingIphone from '../assets/images/iphone-hand.png'

function Jumbotron() {
  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
      <img className="logo" src={Iphone} alt="" />
      <p className="text">Big and bigger.</p>
      <span className="description">
        From $41.62/mo. fro 24 mo. or $999 before trade-in
      </span>
      <ul className="links">
        <li>
          <button className="button">Buy</button>
        </li>
        <li>
          <a className="link">Learn More</a>
        </li>
      </ul>
      <img className="iphone-img" src={HoldingIphone} alt="" />
    </div>
  )
}

export default Jumbotron