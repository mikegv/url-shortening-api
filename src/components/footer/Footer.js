import React from 'react';
import './footer.css'
import { ReactComponent as Logo } from '../../images/logo.svg'
import { StyledLink } from '../styledComponents/styledComponents';
import { ReactComponent as FIcon } from '../../images/icon-facebook.svg'
import { ReactComponent as TIcon } from '../../images/icon-twitter.svg'
import { ReactComponent as PIcon } from '../../images/icon-pinterest.svg'
import { ReactComponent as IIcon } from '../../images/icon-instagram.svg'

const Footer = () => {
    return (
        <div className='footer content'>
            <Logo fill='white' />
            <div className='footerLinks'>

                <div className='linkCategory'>

                    <p className='categoryTitle'>Features</p>

                    <StyledLink>Link Shortening</StyledLink>
                    <StyledLink>Branded Links</StyledLink>
                    <StyledLink>Analytics</StyledLink>
                </div>
                <div className='linkCategory'>


                    <p className='categoryTitle'>Resources</p>

                    <StyledLink>Blog</StyledLink>
                    <StyledLink>Developers</StyledLink>
                    <StyledLink>Support</StyledLink>
                </div>
                <div className='linkCategory'>

                    <p className='categoryTitle'>Company</p>



                    <StyledLink>About</StyledLink>
                    <StyledLink>Our Team</StyledLink>
                    <StyledLink>Careers</StyledLink>
                    <StyledLink>Contact</StyledLink>
                </div>

                <div className='socialMedia'>
                    <FIcon className='socialIcon' />
                    <TIcon className='socialIcon' />
                    <PIcon className='socialIcon' />
                    <IIcon className='socialIcon' />
                </div>
            </div>
        </div>
    );
};

export default Footer;