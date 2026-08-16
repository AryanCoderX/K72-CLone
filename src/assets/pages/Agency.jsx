import Carl from "../Photos/Carl_480x640.jpg";
import Olivier from "../Photos/Olivier_480x640.jpg";
import Chantal from "../Photos/ChantalG_480x640.jpg";
import Michele from "../Photos/Michele_480X640.jpg";
import Mel from "../Photos/MEL_480X640.jpg";
import Camille from "../Photos/CAMILLE_480X640_2.jpg";
import Meggie from "../Photos/MEGGIE_480X640_2.jpg";
import Joel from "../Photos/joel_480X640_3.jpg";
import project1 from "../Photos/Work/Fruite_thumbnail_bbq.jpg";
import project2 from "../Photos/Work/thumbnailimage_opto.jpg";
import project3 from "../Photos/Work/thumbnailimage_shelton.jpg";

import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import Menubtn from "../components/Menubtn";
import Logobtn from "../components/Logobtn";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const imageArray = [
  Carl,
  Olivier,
  Chantal,
  Michele,
  Mel,
  Camille,
  Meggie,
  Joel,
];

const teamMembers = [
  {
    name: "Carl Godbout",
    name1: "Carl",
    name2: "Godbout",
    role: "Business Lead",
    img: Carl,
  },
  {
    name: "Camille Brière",
    name1: "Camille",
    name2: "Brière",
    role: "Copywriter",
    img: Camille,
  },
  {
    name: "Mélanie Laviolette",
    name1: "Mélanie",
    name2: "Laviolette",
    role: "Art Director",
    img: Mel,
  },
  {
    name: "Michèle Riendeau",
    name1: "Michèle",
    name2: "Riendeau",
    role: "Director of Strategy",
    img: Michele,
  },
  {
    name: "Meggie Lavoie",
    name1: "Meggie",
    name2: "Lavoie",
    role: "Account Director",
    img: Meggie,
  },
  {
    name: "Olivier Duclos",
    name1: "Olivier",
    name2: "Duclos",
    role: "Art Director",
    img: Olivier,
  },
  {
    name: "Joël Letarte",
    name1: "Joël",
    name2: "Letarte",
    role: "Associate Creative Director",
    img: Joel,
  },
  {
    name: "Chantal Gobeil",
    name1: "Chantal",
    name2: "Gobeil",
    role: "Creative Director",
    img: Chantal,
  },
];

const Agency = () => {
  // Randomly select two team members.
  function getRandomMembers() {
    const shuffled = [...teamMembers].sort(() => Math.random() - 0.5);

    return shuffled.slice(0, 2);
  }
  const navigate = useNavigate();
  const [members] = useState(() => getRandomMembers());
  const [member1, member2] = members;

  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    imageArray.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  //Opening Animations
  const menuRef = useRef(null);
  const expertiesRef = useRef(null);
  const teamSectionRef = useRef(null);
  const logoRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(imageRef.current, {
      opacity: 0,
      clipPath: "inset(0 100% 0 0)",
      duration: 3,
      ease: "power4.in",
    })
      .from(
        menuRef.current.children,
        {
          y: -150,
          duration: 2,
          opacity: 0,
          stagger: -0.35,
          ease: "power4.in",
        },
        "<",
      )
      .from(
        ".title",
        {
          clipPath: "inset(0 100% 0 0)",
          duration: 1.5,
          ease: "power4.out",
        },
        "<2.2",
      );
    // Text reveal
    gsap
      .timeline({
        scrollTrigger: {
          trigger: expertiesRef.current,
          start: "top 60%",
          end: "bottom 40%",
          scrub: true,
        },
      })
      .from(expertiesRef.current.children, {
        clipPath: "inset(0 0 100% 0)",
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
      });

    // Theme toggle
    ScrollTrigger.create({
      trigger: expertiesRef.current,
      start: "bottom 90%",
      onEnter: () => {
        (gsap.to(expertiesRef.current, {
          backgroundColor: "black",
          color: "white",
          ease: "power1.in",
          duration: 1,
        }),
          gsap.to(teamSectionRef.current, {
            backgroundColor: "black",
            ease: "power1.in",
            duration: 1,
          }));
        logoRef.current.classList.add("brightness-0", "invert");
      },
      onLeaveBack: () => {
        gsap.to(expertiesRef.current, {
          backgroundColor: "white",
          color: "black",
          ease: "power1.in",
          duration: 1,
        });
        (gsap.to(teamSectionRef.current, {
          backgroundColor: "white",
          color: "black",
          ease: "power1.in",
          duration: 1,
        }),
          logoRef.current.classList.remove("brightness-0", "invert"));
      },
    });
  });

  // SCROLL IMAGE ANIMATION
  useGSAP(() => {
    const trigger = ScrollTrigger.create({
      trigger: imageDivRef.current,
      start: "top 33%",
      end: "+=1150",
      pin: true,
      scrub: 0.3,

      onUpdate: (self) => {
        const index = Math.min(
          imageArray.length - 1,
          Math.floor(self.progress * imageArray.length),
        );

        // Only change the image when the index actually changes.
        if (
          imageRef.current &&
          imageRef.current.dataset.index !== String(index)
        ) {
          imageRef.current.src = imageArray[index];
          imageRef.current.dataset.index = String(index);
        }
      },
    });

    // Clean up ScrollTrigger when the component is unmounted.
    return () => {
      trigger.kill();
    };
  }, []);

  //HOVER IMAGE ON TEAM LIST
  const [hoverImg, setHoverImg] = useState(null);
  useGSAP(() => {
    if (hoverImg) {
      gsap.fromTo(
        ".fixedImg",
        {
          opacity: 0,
          clipPath: "inset(0 100% 0 0)",
        },
        {
          opacity: 1,
          clipPath: "inset(0 0% 0 0)",
          duration: 0.4,
          ease: "power4.out",
        },
      );
    } else {
      gsap.to(".fixedImg", {
        opacity: 0,
        clipPath: "inset(0 100% 0 0)",
        duration: 0.3,
        ease: "power4.in",
      });
    }
  }, [hoverImg]);

  //SCROLL LOOP HIDE
  const className = "";
  useGSAP(() => {
  const firstMember = teamSectionRef.current.children[0];
  const secondMember = teamSectionRef.current.children[1];
  const membersList = teamSectionRef.current.children[2];

  // First member fades when second member reaches trigger
  gsap.to(firstMember, {
    opacity: 0,

    scrollTrigger: {
      trigger: secondMember,
      start: "top 80%",
      end: "top 30%",
      scrub: true,
    },
  });

  // Second member fades when members list reaches trigger
  gsap.to(secondMember, {
    opacity: 0,

    scrollTrigger: {
      trigger: membersList,
      start: "top 80%",
      end: "top 30%",
      scrub: true,
    },
  })}, {
  scope: teamSectionRef,
  });

  return (
    <div className="main">
      <Logobtn ref={logoRef} />
      <Navbar ref={menuRef} />
      <Menubtn />

      {/* MAIN AGENCY PAGE */}
      <div className="agency h-screen w-full">
        {/*HERO SECTION */}
        <div className="hero h-full w-full flex flex-col justify-end items-center leading-[0.9] text-[20vw] text-black font-[MyFont] lg:mt-[12vh] sm:mt-0">
          {/* SCROLLING IMAGE */}
          <div
            ref={imageDivRef}
            className="relative lg:h-[31vh] sm:h-[30vh] lg:w-[15vw] lg-[10vw]   right-[12vw] top-[10vh] z-10 pr-[1%]"
          >
            <img
              ref={imageRef}
              src={Carl}
              data-index="0"
              alt="Team member"
              className="object-cover rounded-2xl h-full w-full"
            />
          </div>

          {/* HERO TEXT */}
          <h1 className="title z-20 overflow-hidden">SEVEN7Y</h1>
          <h1 className="title z-20 overflow-hidden">TWO</h1>
        </div>

        {/*DESCRIPTION */}
        <div className="h-[40%] w-full flex justify-end text-left px-[1%] z-20">
          <div className="h-full w-[60%] lg:text-6xl sm:text-5xl font-[MyFont] z-20">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            We’re inquisitive and open-minded, and we make sure creativity
            crowds out ego from every corner. A brand is a living thing, with
            values, a personality and a story. If we ignore that, we can achieve
            short-term success, but not influence that goes the distance. We
            bring that perspective to every brand story we help tell.
          </div>
        </div>

        {/*EXPERTISE SECTION*/}
        <div
          ref={expertiesRef}
          className=" w-full h-full px-[12vw] py-[8vh] font-['MyFont'] lg:mt-[50vh] sm:mt-[60vh] "
        >
          <div className="grid grid-cols-3 gap-x-24">
            <div className="text-[1.4rem]">Expertise</div>

            <div className="text-[1.4rem] leading-[1.2]">
              <p>Strategy</p>
              <p>Advertising</p>
              <p>Branding</p>
              <p>Design</p>
              <p>Content</p>
            </div>

            <div></div>
          </div>

          {/* THREE COLUMNS */}

          <div className="grid grid-cols-3 gap-x-24 mt-32">
            <div>
              <p className="text-[1.4rem] leading-[1.15]">
                <span className="font-medium">Our Work_</span> Born in
                curiosity, raised by dedication and fed with a steady diet of
                creativity.
              </p>
            </div>

            <div>
              <p className="text-[1.4rem] leading-[1.15]">
                <span className="font-medium">Our Creative_</span> Simmering in
                an environment where talent can come to a full boil. Encouraged
                to become the best versions of ourselves.
              </p>
            </div>

            <div>
              <p className="text-[1.4rem] leading-[1.15]">
                <span className="font-medium">Our Culture_</span> We’re open to
                each other. Period. The team works together to create a space
                that makes us proud.
              </p>
            </div>
          </div>
        </div>

        <div className="h-[330vh] w-full bg-black">
          {/* TEAM SECTION */}
          <div ref={teamSectionRef} className="top-0 h-full w-screen ">
            {/* MEMBER 1 */}
            <div className="sticky top-0 z-10 h-screen w-full flex justify-center overflow-hidden whitespace-nowrap">
              <img
                src={member1.img}
                alt={member1.name}
                className="h-full absolute z-10 object-cover rounded-2xl"
              />

              <div className="relative z-20 w-full text-[#d3fd50] text-9xl font-['MyFont'] uppercase flex flex-col justify-center gap-[10vh] whitespace-nowrap overflow-hidden mt-[10vh]">
                <div className="moveFirstName overflow-hidden whitespace-nowrap">
                  <div className="firstName flex gap-[25vw]">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <h1 key={i} className="shrink-0 mr-20 text-9xl">
                        {member1.name1}
                      </h1>
                    ))}
                  </div>
                </div>

                <div className="moveSecondName flex whitespace-nowrap gap-[19vw]">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <div key={index} className="shrink-0 flex items-end me-20">
                      <h1>{member1.name2}</h1>

                      <p className="ml-8 text-4xl text-amber-50">
                        {member1.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* MEMBER 2 */}
            <div className="sticky top-0 z-30 h-screen w-full flex justify-center overflow-hidden whitespace-nowrap">
              <img
                src={member2.img}
                alt={member2.name}
                className="h-full absolute z-10 object-cover rounded-2xl"
              />

              <div
                className={`relative z-20 w-full text-[#d3fd50] text-9xl font-['MyFont'] uppercase flex flex-col justify-center gap-[10vh] whitespace-nowrap overflow-hidden mt-[10vh] ${className}`}
              >
                <div className="overflow-hidden whitespace-nowrap">
                  <div className="moveFirstName flex gap-[25vw]">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <h1 key={i} className="shrink-0 mr-20 text-9xl">
                        {member2.name1}
                      </h1>
                    ))}
                  </div>
                </div>

                <div className="moveSecondName flex whitespace-nowrap gap-[19vw]">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <div key={index} className="shrink-0 flex items-end me-20">
                      <h1>{member2.name2}</h1>

                      <p className="ml-8 text-4xl text-amber-50">
                        {member2.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* TEAM LIST */}
            <div className="sticky top-0 z-50 h-[110vh] mt-[20vh] w-full py-[20vh] font-['MyFont'] text-white bg-black">
              {/* Hover Img */}
              <div className="fixedImg absolute left-[22vw] top-[10vh] h-[55vh] w-[24vw] rounded-2xl z-50 overflow-hidden">
                {hoverImg && (
                  <img
                    src={hoverImg}
                    className="h-full w-full rounded-2xl object-cover"
                    alt=""
                  />
                )}
              </div>

              {/* TEAM MEMBER LIST */}
              {teamMembers.map((member, index) => (
                <div key={index} className="relative group border-y-2 px-[1%]">
                  <div
                    onMouseEnter={() => {
                      setHoverImg(member.img);
                    }}
                    onMouseLeave={() => {
                      setHoverImg(null);
                    }}
                    className="fixedImage absolute inset-0 bg-[#d3fd50] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-200 "
                  />
                  <div className=" flex items-center justify-between py-[0.6%]">
                    <div>
                      <p className="text-lg text-white  group-hover:text-black -translate-y-4 z-10">
                        {member.role}
                      </p>
                    </div>

                    <div className="z-50 whitespace-nowrap">
                      <h2 className="text-[3vw] text-white  group-hover:text-black leading-none uppercase ">
                        {member.name}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="relative h-screem w-full bg-black ">
          {/* View all projects */}
          <div className="sticky top-0 z-50 h-fit text-center cursor-pointer ">
            <p
              className="uppercase text-3xl text-white hover:text-[#d3fd50]"
              onClick={() => navigate("/work")}
            >
              View all projects
            </p>
          </div>

          {/* Project 1 */}
          <div className="sticky top-0 h-screen w-full cursor-pointer overflow-hidden">
            <div className="h-full w-full rounded-4xl overflow-hidden">
              <img
                src={project2}
                alt="project2"
                className="h-full w-full rounded-4xl object-cover transition-transform duration-500 hover:scale-105 hover:brightness-95"
              />
            </div>
          </div>

          {/* Project 2 */}
          <div className="sticky top-0 h-screen w-full cursor-pointer overflow-hidden">
            <div className="h-full w-full rounded-4xl overflow-hidden">
              <img
                src={project3}
                alt="project1"
                className="h-full w-full rounded-4xl object-cover transition-transform duration-500 hover:scale-105 hover:brightness-95"
              />
            </div>
          </div>

          {/* Project 3 */}
          <div className="sticky top-0 h-screen w-full cursor-pointer overflow-hidden">
            <div className="h-full w-full rounded-4xl overflow-hidden">
              <img
                src={project1}
                alt="project3"
                className="h-full w-full rounded-4xl object-cover transition-transform duration-500 hover:scale-105 hover:brightness-95"
              />
            </div>
          </div>

          {/* Footer*/}
          <div className="sticky top-0  w-full">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agency;
