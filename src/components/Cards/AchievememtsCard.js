import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 650px;
  border: 0.1px solid #306EE8;
  border-radius: 10px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.3s ease-in-out;
  position: relative;

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  &:hover .doc-preview {
    display: block;
  }

  &:hover .description {
    overflow: visible;
    -webkit-line-clamp: unset;
  }

  @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }
`;

const TopSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;

  }
`;

const Image = styled.img`
  height: 120px;
  width: 100px;
  object-fit: contain;
  border-radius: 10px;
  background-color: transparent;

  @media (max-width: 768px) {
    height: 80px;
    width: 80px;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 'cc'};

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + '99'};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;

  &.description {
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const DocumentWrapper = styled.div`
  display: none;
  align-self: center;

  @media (max-width: 768px) {
    align-self: center;
  }
`;

const Document = styled.img`
  height: 70px;
  border-radius: 10px;
  background-color: #000;
  cursor: pointer;
  opacity: 0.9;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    height: 60px;
  }
`;

const AchievementsCard = ({ achievements }) => {
  return (
    <Card>
      <TopSection>
        <Image src={achievements.img} alt="achievement" />
        <Content>
          <Title>{achievements.title}</Title>
          <Date>{achievements.date}</Date>
          <Description className="description">{achievements.desc}</Description>
        </Content>
      </TopSection>
      {achievements.doc && (
        <DocumentWrapper className="doc-preview">
          <a href={achievements.doc} target="_blank" rel="noopener noreferrer">
            <Document src={achievements.doc} />
          </a>
        </DocumentWrapper>
      )}
    </Card>
  );
};

export default AchievementsCard;
