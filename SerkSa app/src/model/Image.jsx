
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
const Image = ({imageName,className,modelStyle,idName, setting}) => {
  const cld = new Cloudinary({ cloud: { cloudName: 'dlan0twaz' } });
  const img = cld.image(`${imageName}`).format(`${setting}`).quality('auto')
  return (<AdvancedImage className ={className} style ={modelStyle} id={idName} cldImg={img}/>);
};

export default Image