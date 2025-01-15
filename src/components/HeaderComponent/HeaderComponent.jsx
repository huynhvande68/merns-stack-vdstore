import {
  CaretDownOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Badge, Col } from "antd";
import React from "react";
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperHeaderAccount,
  WrapperTextHeaderSmall,
} from "./style";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import { Link } from "react-router-dom";
import { Image } from "antd";
import logo from "../../assets/images/logo.png";

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader >
        <Col span={6}>
        <Link to="/">
        <Image src={logo} alt="logo" style={{ width: "178px",height:"33px"}} preview={false} />
        </Link>
        </Col>
        <Col span={12} >
          <ButtonInputSearch 
            size="12"
            textButton="Tìm kiếm"
            placeholder="Bạn đang cần tìm gì?"
          />
        </Col>
        <Col span={6} style={{ display: "flex", gap: "20px" }}>
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: "25px" }} />
            <div>
              <WrapperTextHeaderSmall>Đăng nhập/Đăng kí</WrapperTextHeaderSmall>
              <div>
                <CaretDownOutlined />
                <span>Tài khoản</span>
              </div>
            </div>
          </WrapperHeaderAccount>
          <div>
            <Badge count={5}size="small">
              <ShoppingCartOutlined style={{ fontSize: "25px", color: "#fff" }} />
            </Badge>
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
