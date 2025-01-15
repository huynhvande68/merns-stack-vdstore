import { Col, Image } from "antd";
import styled from "styled-components";

export const WrapeerStyleImageSmall = styled(Image)`
    height: 64px;
    width: 64px;
    border: 1px red solid;
`
export const WrapeerStyleImage = styled(Col)`
    flex-basis: unset;
    display: flex;
    
`
export const WrapperNameStyleNameProduct = styled.div`
    color: rgb(36, 36, 36);
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    word-break: break-word;
`
export const WrapperTextSell= styled.span`
    font-size: 15px;
    line-height: 24px;
    color: rgb(120, 120, 120);
`

export const WrapperPriceTextProduct = styled.div`
    font-size: 32x;
    font-weight: 500;
    color: #ff4842;
    margin: 3px 0 3px 0;
    font-weight: 400;
    padding-left: 10px;
`
export const WrapperPriceDiscountTextProduct = styled.span`
    font-size: 24px;
    color: rgb(128,128,137);
    text-decoration: line-through;
    margin-left: 10px;
    font-weight: 400;
`
export const WrapperQualityProduct = styled.div`

`
export const WrapperTextPolicy = styled.span`
    font-size: 16px;
    font-weight: 500;
    margin: 10px 0 5px 0;
`
export const WrapperTextPolicySmall = styled.span`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: rgb(120, 120, 120);
`
export const WrapperIconContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(75, 73, 73, 0.1);
    text-align: center;
    margin-top: 10px;
`
