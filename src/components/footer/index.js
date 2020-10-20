import React from 'react';
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter,FaLinkedin} from 'react-icons/fa'
import {FooterContainer,SocialIcon,SocialIcons,SocialIconLink,SocailLogo,SocialMedia,SocialMediaWrap,WebsiteRights} from './FooterElements'

const Footer = () => {
    return ( 
        <FooterContainer>
          <SocialMedia>
              <SocialMediaWrap>
              <SocailLogo to="/">
                  <SocialIcon>
                      EXPLORE
                  </SocialIcon>
               </SocailLogo>
                 <WebsiteRights>Explore {new Date().getFullYear()}</WebsiteRights>
                 <SocialIcons>
                     <SocialIconLink href="/" target="_blank" aria-lable="Facebook">
                        <FaFacebook/> 
                     </SocialIconLink>
                     <SocialIconLink href="/" target="_blank" aria-lable="Instagram">
                        <FaInstagram/> 
                     </SocialIconLink>
                     <SocialIconLink href="/" target="_blank" aria-lable="Youtube">
                        <FaYoutube/> 
                     </SocialIconLink>
                     <SocialIconLink href="/" target="_blank" aria-lable="Twitter">
                        <FaTwitter/> 
                     </SocialIconLink>
                     <SocialIconLink href="/" target="_blank" aria-lable="Linkedin">
                        <FaLinkedin/> 
                     </SocialIconLink>
                 </SocialIcons>
              </SocialMediaWrap>
          </SocialMedia>
        </FooterContainer>
     );
}
 
export default Footer;
