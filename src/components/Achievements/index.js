import React from "react";
import styled from "styled-components";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { achievements } from '../../data/constants';
import AchievementsCard from "../Cards/AchievememtsCard";

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
padding: 40px 0px 80px 0px;

@media (max-width: 960) {
    padding    :  0px;
}
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const TimeLineSection = styled.div`
width: 100%;
max-width: 700px;
margin-top: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 12px;
`

const Achievements = () => {
  return (
    <Container id='experience'>
        <Wrapper>

        <Title>
            Achievements
        </Title>
        <Desc>Here are some of my Achievements.</Desc>
        <TimeLineSection>
            <Timeline>

            {achievements.map((achievements,index)=>(
                <TimelineItem>

                <TimelineSeparator>
                    <TimelineDot variant='outlined' color='secondary'/>
                    {index !== achievements.length - 1 && <TimelineConnector/>}
                </TimelineSeparator>
                <TimelineContent sx={{py:"12px",px:2}}><AchievementsCard achievements={achievements}/></TimelineContent>
                </TimelineItem>
            ))}
            </Timeline>
        </TimeLineSection>
            </Wrapper>
    </Container>
  )
}
export default Achievements;
