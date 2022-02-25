import Image from 'next/image';

const myLoader = ({ location }) => {
  return `../public/${location}`
}

const DynamicImage = (props) => {
  console.log(props)
  return (
    <Image
      src={`${props.myLoader}`}
      alt={props.alt}
      width={props.width}
      height={props.height}
    />
  )
}
export default DynamicImage;