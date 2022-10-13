import React, { useState, useEffect } from "react";
import styled from "styled-components";
import whatsapp from "../../src/assets/icons/whatsapp.jpeg";

const WhatsappChat = () => {
  const [isVisible, setIsVisible] = useState(true);
  const handleButton = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  return (
    <Wrapper>
      {isVisible && (
        <div className="btn-top" onClick={handleButton}>
          <a
            target="_blank"
            href="https://wa.me/919457241855?text=You%20Can%20%20Do%20Shopping%20here%20and Enjoy!"
          >
            <img
              src={whatsapp}
              style={{
                width: "40px",
                height: "40px",
                position: "fixed",
                left: "10px",
                bottom: "10px",
                borderRadius:'50%'
              }}
            />
          </a>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .btn-top {
    font-size: 2.4rem;
    width: 6rem;
    height: 6rem;
    color: #fff;
    
  
    border-radius: 50%;
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &--icon {
        animation: WhatsappChat 1.2s linear infinite alternate-reverse;
      }
      @keyframes WhatsappChat {
        0% {
          transform: translateY(-0.5rem);
        }
        100% {
          transform: translateY(1rem);
        }
      }
    }
    @media (max-width:300px) {
      .btn-top {
        right: 0;
        left: 40%;
      }
    }
  }
`;

export default WhatsappChat;
