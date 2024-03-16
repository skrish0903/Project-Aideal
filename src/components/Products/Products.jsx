import React, { useState } from "react";
import MotionSlider from "../ServicesSlider/ServicesSlider";
import Model from "react-modal";
import {
  CTop,
  Card,
  CardWrapper,
  Description,
  Cointainer,
  CTopText,
  CTopTitle,
  Wrapper,
  Shoes,
  ShoeOne,
} from "./ProductStyle";
import CardBottom from "./CardBottom";
import "./products.scss";
import { useMotionValue, useTransform } from "framer-motion";
import BuyCombo from "../BuyCombo/BuyCombo";

export const renderGradient = (colorId = 1) => {
  let gradient = "";
  switch (colorId) {
    case 1:
      gradient = `${"to right" + "," + "#42275a" + "," + "#734b6d"}`;
    case 2:
      gradient = `${"to right" + "," + "#45b649" + "," + "#a8e063"}`;
    default:
      return gradient;
  }
};

function Products() {
  const [currentColor, setCurrentColor] = useState(1);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [30, -30]);

  //logo animation

  const variants = {
    default: {
      translateX: 0,
      rotateZ: 0,
    },
    logoAnimation: {
      rotateY: 900,
      duration: 2000,
      easing: "ease-in-out",
    },
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Wrapper>
      <Cointainer>
        <BuyCombo />
        <CardWrapper
          style={{ x, y, rotateX, rotateY, z: 100 }}
          drag
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragElastic={0.16}
          whileTap={{ cursor: "grabbing" }}
        >
          <div className="products-row">
            <Card>
              <CTop currentColor={currentColor}>
                <CTopText>
                  <CTopTitle>ChatGPT</CTopTitle>
                  <Description>
                    ChatGPTChatGPTChatGPT ChatGPTChatGPTChatGPT ChatGPT
                    <span
                      type="link"
                      onClick={() => {
                        setIsModalOpen(true);
                      }}
                      className="Know-more"
                    >
                      {" "}
                      Know more
                    </span>
                  </Description>
                </CTopText>
                <Shoes style={{ x, y, rotateX, rotateY, z: 10000 }}>
                  <ShoeOne
                    src="/ChatGPT logo.png"
                    alt="shoe-1"
                    animate={variants.logoAnimation}
                    variants={variants}
                  />
                </Shoes>
              </CTop>
              <CardBottom
                currentColor={currentColor}
                setCurrentColor={setCurrentColor}
              ></CardBottom>
              <Model
                isOpen={isModalOpen}
                onRequestClose={() => {
                  setIsModalOpen(false);
                }}
                className="motion-slider"
              >
                <MotionSlider />
              </Model>
            </Card>
            <Card>
              <CTop currentColor={currentColor}>
                <CTopText>
                  <CTopTitle>ChatGPT</CTopTitle>
                  <Description>
                    ChatGPTChatGPTChatGPT ChatGPTChatGPTChatGPT ChatGPTChatGPT
                    <span
                      type="link"
                      onClick={() => {
                        setIsModalOpen(true);
                        className = "Know-more";
                      }}
                      className="Know-more"
                    >
                      {" "}
                      Know more
                    </span>
                  </Description>
                </CTopText>
                <Shoes style={{ x, y, rotateX, rotateY, z: 10000 }}>
                  <ShoeOne
                    src="/ChatGPT logo.png"
                    alt="shoe-1"
                    animate={variants.logoAnimation}
                    variants={variants}
                  />
                </Shoes>
              </CTop>
              <CardBottom
                currentColor={currentColor}
                setCurrentColor={setCurrentColor}
              ></CardBottom>
              <Model
                isOpen={isModalOpen}
                onRequestClose={() => {
                  setIsModalOpen(false);
                }}
                className="motion-slider"
              >
                <MotionSlider />
              </Model>
            </Card>

            <Card>
              <CTop currentColor={currentColor}>
                <CTopText>
                  <CTopTitle>ChatGPT</CTopTitle>
                  <Description>
                    ChatGPTChatGPTChatGPT ChatGPTChatGPTChatGPT ChatGPTChatGPT
                    <span
                      type="link"
                      onClick={() => {
                        setIsModalOpen(true);
                      }}
                      className="Know-more"
                    >
                      {" "}
                      Know more
                    </span>
                  </Description>
                </CTopText>
                <Shoes style={{ x, y, rotateX, rotateY, z: 10000 }}>
                  <ShoeOne
                    src="/ChatGPT logo.png"
                    alt="shoe-1"
                    animate={variants.logoAnimation}
                    variants={variants}
                  />
                </Shoes>
              </CTop>
              <CardBottom
                currentColor={currentColor}
                setCurrentColor={setCurrentColor}
              ></CardBottom>
              <Model
                isOpen={isModalOpen}
                onRequestClose={() => {
                  setIsModalOpen(false);
                }}
                className="motion-slider"
              >
                <MotionSlider />
              </Model>
            </Card>
            <Card>
              <CTop currentColor={currentColor}>
                <CTopText>
                  <CTopTitle>ChatGPT</CTopTitle>
                  <Description>
                    ChatGPTChatGPTChatGPT ChatGPTChatGPTChatGPT ChatGPTChatGPT
                    <span
                      type="link"
                      onClick={() => {
                        setIsModalOpen(true);
                      }}
                      className="Know-more"
                    >
                      {" "}
                      Know more
                    </span>
                  </Description>
                </CTopText>
                <Shoes style={{ x, y, rotateX, rotateY, z: 10000 }}>
                  <ShoeOne
                    src="/ChatGPT logo.png"
                    alt="shoe-1"
                    animate={variants.logoAnimation}
                    variants={variants}
                  />
                </Shoes>
              </CTop>
              <CardBottom
                currentColor={currentColor}
                setCurrentColor={setCurrentColor}
              ></CardBottom>
              <Model
                isOpen={isModalOpen}
                onRequestClose={() => {
                  setIsModalOpen(false);
                }}
                className="motion-slider"
              >
                <MotionSlider />
              </Model>
            </Card>
          </div>
          <div className="products-row">
            <Card>
              <CTop currentColor={currentColor}>
                <CTopText>
                  <CTopTitle>ChatGPT</CTopTitle>
                  <Description>
                    ChatGPTChatGPTChatGPT ChatGPTChatGPTChatGPT ChatGPTChatGPT
                    <span
                      type="link"
                      onClick={() => {
                        setIsModalOpen(true);
                      }}
                      className="Know-more"
                    >
                      {" "}
                      Know more
                    </span>
                  </Description>
                </CTopText>
                <Shoes style={{ x, y, rotateX, rotateY, z: 10000 }}>
                  <ShoeOne
                    src="/BardAI.png"
                    alt="shoe-1"
                    animate={variants.logoAnimation}
                    variants={variants}
                  />
                </Shoes>
              </CTop>
              <CardBottom
                currentColor={currentColor}
                setCurrentColor={setCurrentColor}
              ></CardBottom>
              <Model
                isOpen={isModalOpen}
                onRequestClose={() => {
                  setIsModalOpen(false);
                }}
                className="motion-slider"
              >
                <MotionSlider />
              </Model>
            </Card>
            <Card>
              <CTop currentColor={currentColor}>
                <CTopText>
                  <CTopTitle>ChatGPT</CTopTitle>
                  <Description>
                    ChatGPTChatGPTChatGPT ChatGPTChatGPTChatGPT ChatGPTChatGPT
                  </Description>
                </CTopText>
                <Shoes style={{ x, y, rotateX, rotateY, z: 10000 }}>
                  <ShoeOne
                    src="/BardAI.png"
                    alt="shoe-1"
                    animate={variants.logoAnimation}
                    variants={variants}
                  />
                </Shoes>
              </CTop>
              <CardBottom
                currentColor={currentColor}
                setCurrentColor={setCurrentColor}
              ></CardBottom>
            </Card>

            <Card>
              <CTop currentColor={currentColor}>
                <CTopText>
                  <CTopTitle>ChatGPT</CTopTitle>
                  <Description>
                    ChatGPTChatGPTChatGPT ChatGPTChatGPTChatGPT ChatGPTChatGPT
                  </Description>
                </CTopText>
                <Shoes style={{ x, y, rotateX, rotateY, z: 10000 }}>
                  <ShoeOne
                    src="/BardAI.png"
                    alt="shoe-1"
                    animate={variants.logoAnimation}
                    variants={variants}
                  />
                </Shoes>
              </CTop>
              <CardBottom
                currentColor={currentColor}
                setCurrentColor={setCurrentColor}
              ></CardBottom>
            </Card>
            <Card>
              <CTop currentColor={currentColor}>
                <CTopText>
                  <CTopTitle>ChatGPT</CTopTitle>
                  <Description>
                    ChatGPTChatGPTChatGPT ChatGPTChatGPTChatGPT ChatGPTChatGPT
                  </Description>
                </CTopText>
                <Shoes style={{ x, y, rotateX, rotateY, z: 10000 }}>
                  <ShoeOne
                    src="/BardAI.png"
                    alt="shoe-1"
                    animate={variants.logoAnimation}
                    variants={variants}
                  />
                </Shoes>
              </CTop>
              <CardBottom
                currentColor={currentColor}
                setCurrentColor={setCurrentColor}
              ></CardBottom>
            </Card>
          </div>
          <div className="products-row">
            <Card>
              <CTop currentColor={currentColor}>
                <CTopText>
                  <CTopTitle>ChatGPT</CTopTitle>
                  <Description>
                    ChatGPTChatGPTChatGPT ChatGPTChatGPTChatGPT ChatGPTChatGPT
                  </Description>
                </CTopText>
                <Shoes style={{ x, y, rotateX, rotateY, z: 10000 }}>
                  <ShoeOne
                    src="/Canva.png"
                    alt="shoe-1"
                    animate={variants.logoAnimation}
                    variants={variants}
                  />
                </Shoes>
              </CTop>
              <CardBottom
                currentColor={currentColor}
                setCurrentColor={setCurrentColor}
              ></CardBottom>
            </Card>
            <Card>
              <CTop currentColor={currentColor}>
                <CTopText>
                  <CTopTitle>ChatGPT</CTopTitle>
                  <Description>
                    ChatGPTChatGPTChatGPT ChatGPTChatGPTChatGPT ChatGPTChatGPT
                  </Description>
                </CTopText>
                <Shoes style={{ x, y, rotateX, rotateY, z: 10000 }}>
                  <ShoeOne
                    src="/Canva.png"
                    alt="shoe-1"
                    animate={variants.logoAnimation}
                    variants={variants}
                  />
                </Shoes>
              </CTop>
              <CardBottom
                currentColor={currentColor}
                setCurrentColor={setCurrentColor}
              ></CardBottom>
            </Card>

            <Card>
              <CTop currentColor={currentColor}>
                <CTopText>
                  <CTopTitle>ChatGPT</CTopTitle>
                  <Description>
                    ChatGPTChatGPTChatGPT ChatGPTChatGPTChatGPT ChatGPTChatGPT
                  </Description>
                </CTopText>
                <Shoes style={{ x, y, rotateX, rotateY, z: 10000 }}>
                  <ShoeOne
                    src="/Canva.png"
                    alt="shoe-1"
                    animate={variants.logoAnimation}
                    variants={variants}
                  />
                </Shoes>
              </CTop>
              <CardBottom
                currentColor={currentColor}
                setCurrentColor={setCurrentColor}
              ></CardBottom>
            </Card>
            <Card>
              <CTop currentColor={currentColor}>
                <CTopText>
                  <CTopTitle>ChatGPT</CTopTitle>
                  <Description>
                    ChatGPTChatGPTChatGPT ChatGPTChatGPTChatGPT ChatGPTChatGPT
                  </Description>
                </CTopText>
                <Shoes style={{ x, y, rotateX, rotateY, z: 10000 }}>
                  <ShoeOne
                    src="/Canva.png"
                    alt="shoe-1"
                    animate={variants.logoAnimation}
                    variants={variants}
                  />
                </Shoes>
              </CTop>
              <CardBottom
                currentColor={currentColor}
                setCurrentColor={setCurrentColor}
              ></CardBottom>
            </Card>
          </div>
        </CardWrapper>
      </Cointainer>
    </Wrapper>
  );
}

export default Products;
