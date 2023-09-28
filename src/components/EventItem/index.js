// Write your code here
import './index.css'

const EventItem = props => {
  const {each, clickImage, clickStatus} = props
  const {imageUrl, name, location, registrationStatus} = each
  const clickItem = () => {
    clickImage(registrationStatus)
  }
  const imageStyle = clickStatus ? 'with-img-style' : 'img'
  console.log(clickStatus)
  return (
    <li className="list-con">
      <button onClick={clickItem} className="event-item-button" type="button">
        <img className={imageStyle} src={imageUrl} alt="event" />
      </button>
      <div className="body">
        <p>{name}</p>
        <p>{location}</p>
      </div>
    </li>
  )
}

export default EventItem
