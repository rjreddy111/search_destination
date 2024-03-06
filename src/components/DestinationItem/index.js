// Write your code here
import './index.css'

const DestinationItem = props => {
  const {eachListDetails} = props
  const {name, imgUrl} = eachListDetails

  return (
    <>
      <li>
        <img src={imgUrl} alt={name} className="eachImage" />
        <p>{name}</p>
      </li>
    </>
  )
}

export default DestinationItem
