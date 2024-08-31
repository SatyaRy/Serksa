
import MediaQuery from "react-responsive"
import CloudImage from "../../model/Image.jsx"
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
export default function ShowFeature(){
    return(
       <>
          <MediaQuery maxWidth={760}>
                <Swiper
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards,Autoplay]}
                        className="mySwiper">
                        {Data.map((value)=>{
                       return(
                                <>
                                    <SwiperSlide key = {value.id} ><CloudImage imageName={value.imageName} modelStyle={{paddingTop:"2vh",width:"auto",height:"100%"}}alt="" /></SwiperSlide>
                                </>
                       )
                        })}

                </Swiper>
          </MediaQuery>
          <MediaQuery minWidth={768} maxWidth={1024}>
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
                    {Data.map((value)=>{
                       return(
                                <>
                                    <SwiperSlide key = {value.id} ><CloudImage imageName={value.imageName} modelStyle={{paddingTop:"2vh",width:"auto",height:"100%"}}alt="" /></SwiperSlide>
                                </>
                       )
                    })}
                   
                   </Swiper>
          </MediaQuery>
          <MediaQuery minWidth={1024}>
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
                    {Data.map((value)=>{
                       return(
                                <>
                                    <SwiperSlide key = {value.id} >
                                        <CloudImage imageName={value.imageName} modelStyle={{paddingTop:"2vh",width:"auto",height:"100%"}}alt="" />
                                    </SwiperSlide>
                                </>
                       )
                    })}

                    </Swiper>
          </MediaQuery>
       </> 
    )
}

const Data=[
    {
        id:1,
        imageName:"SerkSa/auth",
        paddingTop:"2vh",
        height:"100%"
    },
    {
        id:2,
        imageName:"SerkSa/homepage",
        paddingTop:"2vh",
        height:"100%"
    },
    {
        id:3,
        imageName:"SerkSa/student",
        paddingTop:"2vh",
        height:"100%"
    },
    {
        id:4,
        imageName:"SerkSa/leaderboard",
        paddingTop:"2vh",
        height:"100%"
    },
    {
        id:5,
        imageName:"SerkSa/rewarding",
        paddingTop:"2vh",
        height:"100%"
    },
    {
        id:6,
        imageName:"SerkSa/roadmapII",
        paddingTop:"2vh",
        height:"100%"
    },
    {
        id:7,
        imageName:"SerkSa/complex",
        paddingTop:"2vh",
        height:"100%"
    },
    {
        id:8,
        imageName:"SerkSa/quiz",
        paddingTop:"2vh",
        height:"100%"
    },
    {
        id:9,
        imageName:"SerkSa/biology",
        paddingTop:"2vh",
        height:"100%"
    },
    {
        id:9,
        imageName:"SerkSa/biology",
        paddingTop:"2vh",
        height:"100%"
    },
]