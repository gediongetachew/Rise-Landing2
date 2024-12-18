"use client";
import React, { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import brokenArrow from "../../../public/assets/borokenArrow.svg";
import { Typography } from "@mui/material";

interface InvertedBorderProps {
  name?: string;
  height?: string | number;
  icon?: string;
  buttonText?: string;
  image?: string;
}

const InvertedBorder: React.FC<InvertedBorderProps> = ({
  name,
  height = "450px",
  icon = "/assets/borokenArrow.svg",
  buttonText,
  image,
}) => {
  const [playVideo, setPlayVideo] = useState(false);

  const posterImage: string = (() => {
    switch (name) {
      case "somalia":
        return "/somaliLand.png";
      case "rwanda":
        return "/rwanda.png";
      case "aboutus":
        return "/aboutus.png";
      default:
        return "/aboutus.png";
    }
  })();

  const handlePlayVideo = (): void => {
    setPlayVideo(true);
  };

  return (
    <>
      <style jsx>{`
      a {
  display: inline-block;
  text-decoration: none;
}
       main {
  padding: 0;
  width: 100%;
  height: 100%;
  position: relative;

  .heading {
    @media screen and (min-width: 40rem) {
      display: flex;
      justify-content: space-between;
      gap: 1em;
    }

    h1 {
      letter-spacing: 0.025em;
      font-size: clamp(2.5rem, 1.6351rem + 4.3243vw, 6.5rem);
      line-height: 1;
      font-family: "SUSE", sans-serif;
      font-optical-sizing: auto;
      font-weight: 600;
      font-style: normal;
    }

    aside {
      margin-top: 1.5em;
      max-width: 16.25rem;
      display: flex;
      flex-direction: column;
      gap: 0.5em;

      @media screen and (min-width: 40rem) {
        margin-top: 3em;
      }

      p {
        font-size: 0.9rem;
        color: var(--clr-black);
        line-height: 1.5;
      }
    }
  }

  .container {
    margin: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    display: grid;
    gap: 1.5rem;

    @media screen and (min-width: 100rem) {
      grid-template-columns: none;
      margin-top: 3.5em;
      gap: 2rem;
    }
  }
  .card {
    padding: 0;
    background: var(--clr-white);
    border-radius: 1.2rem;
    position: relative;
    height: 100%;
    width: 100%;
    max-width: none;

    @media screen and (min-width: 53rem) {
      border-radius: 1.8rem;
    }

    p {
      position: absolute;
      right: 0;
      top: -1.25rem;

      a {
        font-size: 0.9rem;
        display: inline-block;
        color: var(--clr-black);

        &:hover {
          font-weight: 600;
        }
      }
    }

    .card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      border-bottom-right-radius: 0;
      padding: 0;

      .box {
        width: 100%;
        height: 100%;
        background: var(--clr-white);
        border-radius: 1.2rem;
        overflow: hidden;
        padding: 0;

        .videoBox {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          padding: 0;

          iframe {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 100%;
            border: none;
          }
        }

        .imgBox {
          position: absolute;
          inset: 0;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 1rem;

            @media screen and (min-width: 53rem) {
              border-radius: 1.6rem;
            }
          }
        }
        .more {
          position: absolute;
          top: -0.375rem;
          right: 0;
          width: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--clr-white);
          padding: 0.625rem 0 0.625rem 0.625rem;
          border-bottom-left-radius: 1rem;

          &::before {
            position: absolute;
            content: "";
            top: 0.375rem;
            left: -1.188rem;
            background: transparent;
            width: 1.2rem;
            height: 1.2rem;
            border-bottom-right-radius: 2rem;
            box-shadow: 0.313rem 0.313rem 0px 0.313rem var(--clr-white);
            transform: rotate(-90deg);
          }
          &::after {
            position: absolute;
            content: "";
            bottom: -1.188rem;
            right: -0.063rem;
            background: transparent;
            width: 1.2rem;
            height: 1.2rem;
            border-bottom-right-radius: 1rem;
            box-shadow: 0.313rem 0.313rem 0px 0.313rem var(--clr-white);
            transform: rotate(-90deg);
          }

          .arrow {
            width: 2.5rem;
            height: 2.5rem;
            border: 0.125rem solid #c8c8c8;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 0.2s ease-in-out;

            &:hover {
              background: var(--clr-black);
              border: 0.125rem solid var(--clr-black);
              color: var(--clr-white);

              svg {
                color: var(--clr-white);
              }
            }
          }
          svg {
            width: 1.063rem;
            color: var(--clr-black);
          }
        }

        .tag {
          position: absolute;
          bottom: -0.375rem;
          right: 0;
          width: auto;
          min-width: auto;
          display: flex;
          justify-content: left;
          align-items: center;
          background: var(--clr-white);
          padding: 0.625rem 1.5rem;
          border-top-left-radius: 1rem;

          &::before {
            position: absolute;
            content: "";
            top: -1.188rem;
            right: 0;
            background: transparent;
            width: 1.2rem;
            height: 1.2rem;
            border-bottom-right-radius: 3rem;
            box-shadow: 0.313rem 0.313rem 0px 0.313rem var(--clr-white);
            transform: rotate(0deg);
           
          }
          &::after {
            position: absolute;
            content: "";
            bottom: 0.375rem;
            left: -1.188rem;
            background: transparent;
            width: 1.2rem;
            height: 1.2rem;
            border-bottom-right-radius: 4rem;
            box-shadow: 0.313rem 0.313rem 0px 0.313rem var(--clr-white);
            transform: rotate(0deg);
          }

          a {
            font-size: 0.9rem;
            color: white;
            font-weight: 400;
            border: 0.125rem solid #c8c8c8;
            border-radius: 3.125rem;
            padding: 0.5rem 1.5rem;
            display: flex;
            align-items: center,
            width: 100%;
            text-align: center;
            cursor: pointer;
            transition: 0.2s ease-in-out;

            &:hover {
              color: var(--clr-white);
              background: var(--clr-black);
              border: 0.125rem solid var(--clr-black);
            }
          }
        }
      }
    }
  }
  .video {
    height: 100%;
    width: 100%;
    align-self: flex-end;
  }
}
        .container {
          margin: 0;
          width: 100%;
          height: 100%;
          padding: 0;
          display: grid;
          gap: 1.5rem;
        }
        .card {
          padding: 0;
          background: var(--clr-white);
          border-radius: 1.2rem;
          position: relative;
          height: 100%;
          width: 100%;
        }
        .card-inner .box {
          width: 100%;
          height: 100%;
          background: var(--clr-gray);
          border-radius: 1.2rem;
          overflow: hidden;
          padding: 0;
        }
        .videoBox.poster {
          background-size: cover;
          background-position: center;
          position: relative;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
        .poster {
  position: relative;
  display: inline-flex;
}
.poster:after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: var(--poster-image);
  background-size: cover;
  transition: 1s ease;
  opacity: 1;
  cursor: pointer;
}
.poster-active:after {
  opacity: 0;
  pointer-events: none;
}
        .tag a {
          width: 100%;
          text-align: center;
          color: #fff;
          background: #3D628C;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          white-space: nowrap;
          font-size: clamp(0.8rem, 2.5vw, 1.2rem);
        }
      `}</style>
      <main style={{ width: "100%", height: "100%", padding: "10px" }}>
        <div className="container" style={{ width: "100%", height: height }}>
          <div className="card video" style={{ width: "100%", height: "100%" }}>
            <div className="card-inner">
              <div className="box">
                <div
                  className={`videoBox poster ${
                    playVideo ? "poster-active" : ""
                  }`}
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                ></div>
                <div
                  className="tag"
                  onClick={handlePlayVideo}
                  style={{
                    cursor: "pointer",
                    width: "auto",
                    maxWidth: "52%",
                    maxHeight: "15%",
                  }}
                >
                  <a>
                    <img
                      src={icon}
                      alt="play"
                      style={{
                        width: "24px",
                        height: "24px",
                        
                      }}
                    />

                
                      {buttonText || "Visit Catalog"}
                  
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default InvertedBorder;
