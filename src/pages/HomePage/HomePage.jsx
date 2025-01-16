import React from "react";
import slider1 from "../../assets/images/slide1.png";
import slider2 from "../../assets/images/slide2.png";
import slider3 from "../../assets/images/slide3.png";
import CardComponent from "../../components/CardComponent/CardComponent";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperBottonMore, WrapperProductList, WrapperProductListCetegory, WrapperProducts, WrapperTypeProduct } from "./style";

const homePage = () => {
  const arr = [
    "Điện thoại",
    "Máy tính bảng",
    "Đồng hồ",
    "Laptop",
    "Âm thanh",
    "Phụ kiện",
  ];

  return (
    <>
      <div style={{ padding: "0 120px" ,backgroundColor:'#efefef'}}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </WrapperTypeProduct>
      </div>
        <div id="container" style={{ backgroundColor: "#efefef", padding: "0 120px", height:'1200px'}}>
          <SliderComponent arrImages={[slider1, slider2, slider3]} />
          <div style={{ display:'flex'}}>
          <WrapperProductList>DANH SÁCH SẢN PHẨM <WrapperProductListCetegory>Mới nhất</WrapperProductListCetegory></WrapperProductList>
          </div>
          <WrapperProducts >
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
          </WrapperProducts>
          <div style={{display:'flex',justifyContent:'center',marginTop:'10px', }}>
          <WrapperBottonMore textButton={'Xem thêm'} type='outline' styleButton={{border:'1px solid rgb(0, 69, 255)',color:'rgb(0, 69, 255)', width:'240px',height:'38px'}}/>

          </div>
        </div>
        
    </>
  );
};

export default homePage;
<div>
  <div
    id="slide-container"
    style={{ backgroundColor: "#efefef", padding: "0 120px" }}
  >
    <SliderComponent arrImages={[slider1, slider2, slider3]} />
  </div>
</div>;
