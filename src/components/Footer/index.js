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

const ClippedContainer = styled.div`
  width: 100%;
  height: 100px;
  background: #ffffff;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
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
  min-width: 200px;
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

              <IconDivider />

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

              <IconDivider />

              <SocialMediaIcon href={Bio.linkedin} target="_blank">
                <LinkedInIcon style={{ fontSize: 26 }} />
                <Text>LinkedIn</Text>
              </SocialMediaIcon>
            </SocialMediaIcons>
          </Column>

          <Column>
            <ContactInfo>Contact</ContactInfo>
            <ContactInfo>Email: lakhandagrawal@gmail.com</ContactInfo>
            <ContactInfo>Phone: +91-9422289435</ContactInfo>
          </Column>

          <Copyright>
            &copy; 2025 Lakhan Agrawal. All rights reserved.
          </Copyright>
        </FooterWrapper>
      </FooterContainer>
    
  );
}

export default Footer;
