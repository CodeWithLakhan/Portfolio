import styled from "styled-components";
// import FacebookIcon from '@mui/icons-material/leetcode';
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Bio } from "../../data/constants";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.bg}; // optional
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
  padding: 1rem;
  flex-wrap: wrap;
  text-align: center;
  clip-path: polygon(0 5%, 30% 0%, 100% 0, 100% 100%, 0 100%);
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

const Column = styled.div`
  flex: 1;
  /* min-width: 200px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Tagline = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  position: relative;
  
  
`;

const SocialMediaIcon = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.3s ease-in-out;
  min-width: 70px;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ContactInfo = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Copyright = styled.p`
  margin-top: 2rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  width: 100%;
  padding: 0px;
  margin: 0px;
`;

const IconDivider = styled.div`
  height: 40px;
  width: 1px;
  background-color: ${({ theme }) => theme.text_secondary};
`;

const Text = styled.div`
  font-size: 11px;
  padding-top: 6px;
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Column>
          <Logo>👨‍💻 Lakhan Agrawal</Logo>
          <Tagline>Aspiring Developer</Tagline>
        </Column>

        <Column>
          <SocialMediaIcons>
            <SocialMediaIcon href={Bio.github} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
              <Text>GitHub</Text>
            </SocialMediaIcon>

            <SocialMediaIcon href={Bio.linkedin} target="_blank">
              <LinkedInIcon style={{ fontSize: 26 }} />
              <Text>LinkedIn</Text>
            </SocialMediaIcon>

            <SocialMediaIcon href={Bio.leetcode} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="26"
                height="26"
                color="#ffffff"
                fill="none"
              >
                <path
                  d="M13.8514 3L4.62921 12C3.79026 12.8187 3.79026 14.1462 4.62921 14.9649L10.1841 20.386C11.0231 21.2047 12.3833 21.2047 13.2222 20.386L15.9997 17.6754"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.33203 10.3377L10.1836 6.57889C11.0226 5.76016 12.3828 5.76016 13.2217 6.57889L15.9992 9.28943"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11 13H20"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <Text>LeetCode</Text>
            </SocialMediaIcon>

            <SocialMediaIcon href={Bio.hackerrank} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                viewBox="0 0 24 24"
                id="Hackerrank"
                height="26px"
                width="26px"
              >
                <path
                  d="M11.999,0C10.626,0,2.195,4.818,1.513,6c-0.682,1.182-0.686,10.819,0,12c0.686,1.181,9.115,6,10.486,6c1.371,0,9.8-4.824,10.487-6c0.686-1.176,0.686-10.83,0-12C21.799,4.83,13.371,0,11.999,0z M14.84,19.415v0.002c-0.188,0-1.939-1.677-1.8-1.814c0.041-0.041,0.296-0.069,0.832-0.086c0-1.23,0.028-3.215,0.045-4.046c0.002-0.095-0.021-0.161-0.021-0.274h-3.787c0,0.333-0.022,1.697,0.065,3.416c0.011,0.213-0.075,0.279-0.272,0.278c-0.48-0.001-0.96-0.005-1.44-0.004c-0.194,0-0.278-0.072-0.272-0.286c0.043-1.567,0.14-3.938-0.007-9.969V6.483C7.723,6.467,7.405,6.438,7.363,6.397C7.225,6.26,9,4.583,9.187,4.583c0.187,0,1.951,1.677,1.813,1.814c-0.041,0.041-0.374,0.07-0.795,0.086v0.148c-0.114,1.207-0.096,3.731-0.124,4.94h3.803c0-0.213,0.018-1.628-0.057-3.921c-0.005-0.159,0.046-0.242,0.199-0.244c0.525-0.004,1.049-0.006,1.575-0.003c0.164,0.001,0.216,0.081,0.213,0.252c-0.173,8.967-0.031,8.341-0.031,9.86c0.42,0.016,0.797,0.045,0.838,0.086C16.757,17.737,15.028,19.415,14.84,19.415z"
                  fill="#ffffff"
                  class="color000000 svgShape"
                ></path>
              </svg>

              <Text>HackerRank</Text>
            </SocialMediaIcon>
          </SocialMediaIcons>
        </Column>

        <Column>
          <ContactInfo>Contact</ContactInfo>
          <ContactInfo>Email: lakhandagrawal@gmail.com</ContactInfo>
          <ContactInfo>Phone: +91-9422289435</ContactInfo>
        </Column>

        <Copyright>&copy; 2025 Lakhan Agrawal. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
