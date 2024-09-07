const GalleryImage = ({ imgUrl }) => {
  return (
    <img
      src={imgUrl ? imgUrl : '/dummy_img.png'}
      alt=''
      className='w-[190px] h-[179px] object-cover rounded-3xl hover:scale-105'
    />
  )
}

export default GalleryImage
