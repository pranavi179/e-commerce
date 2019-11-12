import React, { Component } from "react";
import { Card } from "antd";
const { Meta } = Card;

export default class Product extends Component {
  render() {
    return (
      <Card
        title="Default size card"
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>

        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        ></Card>
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    );
  }
}
