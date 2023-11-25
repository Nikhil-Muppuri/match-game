import './index.css'

const ImageItem = props => {
  const {imageDetails, onClickedImage} = props
  const {id, thumbnailUrl} = imageDetails

  const clickImage = () => {
    onClickedImage(id)
  }

  return (
    <li className="li-item">
      <button type="button" className="image-btn" onClick={clickImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-item" />
      </button>
    </li>
  )
}

export default ImageItem
