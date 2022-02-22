import Image from 'next/image';

const myLoader = ({ alt, folder, file }) => {
  return `../public/${folder}/${file}`
}

const DynamicImage = (props) => {
  return (
    <Image
      loader={myLoader}
      src={`${folder}${file}`}
      alt={alt}
    />
  )
}
export default DynamicImage;