// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {imageUrl, name, location, id} = eventDetails
  const onClickImage = () => {
    setActiveEventId(id)
  }

  const className = isActive ? 'event-image active' : 'event-image'

  return (
    <li className="event-item">
      <button className="event-button" type="button" onClick={onClickImage}>
        <img className={className} src={imageUrl} alt="event" />
      </button>

      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
