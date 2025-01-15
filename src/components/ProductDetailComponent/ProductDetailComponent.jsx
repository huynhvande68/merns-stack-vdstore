import { CheckCircleFilled, ClockCircleFilled, SafetyCertificateFilled, StarFilled } from '@ant-design/icons'
import { Col, Image, Row } from 'antd'
import React from 'react'
import imgProductSmall from '../../assets/images/iphone-16-pro-max-small.png'
import imgProduct from '../../assets/images/iphone-16-pro-max.png'
import { WrapeerStyleImage, WrapeerStyleImageSmall, WrapperIconContainer, WrapperNameStyleNameProduct, WrapperPriceDiscountTextProduct, WrapperPriceTextProduct, WrapperTextPolicy, WrapperTextPolicySmall, WrapperTextSell } from './style'

const ProductDetailComponent = () => {
  return (
    <>
    <Row style={{padding: '16px', backgroundColor: '#fff', borderRadius: '8px'}}>
        <Col span={10}>
        <Image style={{border: '1px red solid'}}  src={imgProduct} alt='image product' preview={false}/>
        <Row style={{paddingTop: '10px', justifyContent: 'space-between'}}>
            <WrapeerStyleImage span={4}>
            <WrapeerStyleImageSmall  src={imgProductSmall} alt='img small' preview={false}/>    
            </WrapeerStyleImage>
            <WrapeerStyleImage span={4}>
            <WrapeerStyleImageSmall src={imgProductSmall} alt='img small' preview={false}/>    
            </WrapeerStyleImage>  
            <WrapeerStyleImage span={4}>
            <WrapeerStyleImageSmall src={imgProductSmall} alt='img small' preview={false}/>    
            </WrapeerStyleImage>  
            <WrapeerStyleImage span={4}>
            <WrapeerStyleImageSmall src={imgProductSmall} alt='img small' preview={false}/>    
            </WrapeerStyleImage> 
            <WrapeerStyleImage span={4}>
            <WrapeerStyleImageSmall src={imgProductSmall} alt='img small' preview={false}/>    
            </WrapeerStyleImage>
            <WrapeerStyleImage span={4}>
            <WrapeerStyleImageSmall src={imgProductSmall} alt='img small' preview={false}/>    
            </WrapeerStyleImage> 
        </Row> 
        </Col>
        <Col span={14} style={{border: '1px red solid'}}>
            <WrapperNameStyleNameProduct>iPhone 16 Pro Max 256GB | Chính hãng VN/A</WrapperNameStyleNameProduct>
            <div>
            <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54" }} />
            <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54" }} />
            <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54" }} />
            <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54" }} />
            <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54" }} />
                <WrapperTextSell> Đã bán | 1000+</WrapperTextSell>
            </div>
            <WrapperPriceTextProduct>
                <h1>
                    31.000.000đ
                    <WrapperPriceDiscountTextProduct>40.000.000đ</WrapperPriceDiscountTextProduct>                  
                </h1>
            </WrapperPriceTextProduct>


        </Col>

    </Row>
    <Row gutter={[16, 16]}>
        <Col span={8}>
            <WrapperIconContainer >
                     <CheckCircleFilled style={{ color: '#1877F2', fontSize:'36px'}} />
            <WrapperTextPolicy>
                100% Chính hãng
            </WrapperTextPolicy>
            <WrapperTextPolicySmall>
                Tất cả sản phẩm tại VD STORE đều là hàng chính hãng tại Việt Nam
            </WrapperTextPolicySmall>
            </WrapperIconContainer>
        </Col>
        <Col span={8}>
            <WrapperIconContainer>
                <ClockCircleFilled style={{ color: '#1877F2', fontSize:'36px'}}/>
                <WrapperTextPolicy>
                30 ngày đổi trả
                </WrapperTextPolicy>
                <WrapperTextPolicySmall>
                Cam kết đổi trả trong vòng 15 ngày nếu xảy ra lỗi
                </WrapperTextPolicySmall>
            </WrapperIconContainer>
        </Col>
        <Col span={8}>
            <WrapperIconContainer>
                <SafetyCertificateFilled style={{ color: '#1877F2', fontSize:'36px'}}/>
                <WrapperTextPolicy>
                Bảo hành chính hãng
                </WrapperTextPolicy>
                <WrapperTextPolicySmall>
                Sản phẩm được bảo hành chính hãng theo nhà sản xuất
                </WrapperTextPolicySmall>
            </WrapperIconContainer>
        </Col>
    </Row>
    </>
  )
}

export default ProductDetailComponent
