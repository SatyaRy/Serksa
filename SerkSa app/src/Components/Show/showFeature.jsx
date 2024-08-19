
import style from "./showFeature.module.css"
import MediaQuery from "react-responsive"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { EffectCards,Autoplay ,Pagination, Navigation} from 'swiper/modules';
import './styles.css';
import first from "../../assets/model/1.svg"
import second from "../../assets/model/2.svg"
import third from "../../assets/model/3.svg"
import four from "../../assets/model/4.svg"
import five from "../../assets/model/5.svg"
import six from "../../assets/model/6.svg"
import { SiX } from "react-icons/si";
export default function ShowFeature(){
    return(
       <>
          <MediaQuery maxWidth={767}>
                <Swiper
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards,Autoplay]}
                        className="mySwiper">
                        <SwiperSlide><img src={first} style={{paddingTop:"2vh",width:"65%"}}alt="" /></SwiperSlide>
                        <SwiperSlide><img src={second} style={{paddingTop:"2vh",width:"65%"}}alt="" /></SwiperSlide>
                        <SwiperSlide><img src={third} style={{paddingTop:"2vh",width:"65%"}}alt="" /></SwiperSlide>
                        <SwiperSlide><img src={four} style={{paddingTop:"2vh",width:"65%"}}alt="" /></SwiperSlide>
                        <SwiperSlide><img src={five} style={{paddingTop:"2vh",width:"65%"}}alt="" /></SwiperSlide>
                        <SwiperSlide><img src={six} style={{paddingTop:"2vh",width:"65%"}}alt="" /></SwiperSlide>
                  
                </Swiper>
          </MediaQuery>
          <MediaQuery minWidth={768} maxWidth={1200}>
                    <Swiper
                    spaceBetween={10}
                    centeredSlides={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    slidesPerView={1}
                >   
                        <SwiperSlide><img src={first} style={{paddingTop:"2vh",width:"100%",height:"100%"}}alt="" /></SwiperSlide>
                        <SwiperSlide><img src={second} style={{paddingTop:"2vh",width:"100%",height:"100%"}}alt="" /></SwiperSlide>
                        <SwiperSlide><img src={third} style={{paddingTop:"2vh",width:"100%",height:"100%"}}alt="" /></SwiperSlide>
                        <SwiperSlide><img src={four} style={{paddingTop:"2vh",width:"100%",height:"100%"}}alt="" /></SwiperSlide>
                        <SwiperSlide><img src={five} style={{paddingTop:"2vh",width:"100%",height:"100%"}}alt="" /></SwiperSlide>
                        <SwiperSlide><img src={six} style={{paddingTop:"2vh",width:"100%",height:"100%"}}alt="" /></SwiperSlide>
                   
                   </Swiper>
          </MediaQuery>
          <MediaQuery minWidth={1200}>
                    <Swiper
                    spaceBetween={10}
                    centeredSlides={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    slidesPerView={2}
                >   
                    <SwiperSlide><img src={first} style={{paddingTop:"2vh",width:"100%",height:"100%"}}alt="" /><img src={second} style={{paddingTop:"2vh",width:"100%",height:"100%"}}alt="" /></SwiperSlide>
                    <SwiperSlide><img src={third} style={{paddingTop:"2vh",width:"100%",height:"100%"}}alt="" /><img src={four} style={{paddingTop:"2vh",width:"100%",height:"100%"}}alt="" /></SwiperSlide>
                    <SwiperSlide><img src={five} style={{paddingTop:"2vh",width:"100%",height:"100%"}}alt="" /><img src={six} style={{paddingTop:"2vh",width:"100%",height:"100%"}}alt="" /></SwiperSlide>
                    </Swiper>
          </MediaQuery>
       </> 
    )
}
