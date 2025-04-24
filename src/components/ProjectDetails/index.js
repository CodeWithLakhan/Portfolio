import { CloseRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { Modal } from "@mui/material";
import React, { useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow-y: scroll;
  transition: all 0.5s ease;
`;

const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  border-radius: 16px;
  margin: 50px 12px;
  height: min-content;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 768px) {
    margin: 20px 8px;
    padding: 16px;
  }
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px 0px 6px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const Date = styled.div`
  font-size: 16px;
  margin: 2px 6px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Desc = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ImageItem = styled.img`
  height: 400px;
  width: 100%;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const NavButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  font-size: 30px;
  cursor: pointer;
  color: white;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  user-select: none;

  @media (max-width: 768px) {
    font-size: 24px;
    padding: 8px;
  }
`;

const PrevButton = styled(NavButton)`
  left: 10px;
`;

const NextButton = styled(NavButton)`
  right: 10px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0px;
`;

const Tag = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  margin: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary + 20};

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 3px 6px;
  }
`;

const Label = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Members = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 12px 6px;
`;

const Member = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const MemberImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const MemberName = styled.div`
  font-size: 16px;
  font-weight: 500;
  width: 200px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 14px;
    width: 160px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 12px 0px;
  gap: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const Button = styled.a`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary};
  ${({ dull, theme }) => dull && `
    background-color: ${theme.bgLight};
    color: ${theme.text_secondary};
    &:hover {
      background-color: ${theme.bg + 99};
    }
  `}
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${({ theme }) => theme.primary + 99};
  }

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 10px 12px;
  }
`;

const ProjectModal = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <Container>
        <Wrapper>
          <CloseRounded
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />

          {project?.image?.length > 0 && (
            <div style={{ position: "relative", marginTop: "30px" }}>
              <PrevButton ref={prevRef}>&#10094;</PrevButton>
              <NextButton ref={nextRef}>&#10095;</NextButton>
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }}
                pagination={{ clickable: true }}
                spaceBetween={10}
                slidesPerView={1}
              >
                {project.image.map((img, index) => (
                  <SwiperSlide key={index}>
                    <ImageItem src={img} alt={`project-img-${index}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}

          <Title>{project?.title}</Title>
          <Date>{project?.date}</Date>
          <Tags>
            {project?.tags.map((tag, i) => (
              <Tag key={i}>{tag}</Tag>
            ))}
          </Tags>
          <Desc>{project?.description}</Desc>

          {project?.member && (
            <>
              <Label>Members</Label>
              <Members>
                {project.member.map((member, i) => (
                  <Member key={i}>
                    <MemberImage src={member.img} />
                    <MemberName>{member.name}</MemberName>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "inherit" }}
                    >
                      <GitHub />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "inherit" }}
                    >
                      <LinkedIn />
                    </a>
                  </Member>
                ))}
              </Members>
            </>
          )}

          <ButtonGroup>
            <Button href={project?.github} target="_blank">
              View Code
            </Button>
          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default ProjectModal;
