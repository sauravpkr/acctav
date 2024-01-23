import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <>
      {/* <footer className="footerStyle">
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div className='outlines'>
                    <div>
                      <p style={{ fontSize: 14, lineHeight: '0.2em', }}>
                        <span style={{ letterSpacing: '0.09em', }}>
                          <a href="https://www.acctav.com/terms-and-conditions" style={{ textDecoration: 'none' }} target="_self"><span><span style={{ fontFamily: 'helvetica-w01-light,helvetica-w02-light,sans-serif', }}><span style={{ fontWeight: 'bold', }}><span style={{ fontSize: 14, }}><span style={{ fontFamily: 'helvetica-w01-light,helvetica-w02-light,sans-serif', }}>TERMS &amp; CONDITIONS</span></span></span></span></span></a></span></p></div>
                    <div>
                      <h2 style={{ fontSize: 14, lineHeight: '1.2em', }}>
                        <a href="https://www.acctav.com/privacy-policy" style={{ textDecoration: 'none' }} target="_self"><span><span style={{ fontWeight: 'bold', }}><span style={{ fontSize: 14, }}><span style={{ letterSpacing: '0.09em', }}><span style={{ fontFamily: 'helvetica-w01-light,helvetica-w02-light,sans-serif', }}>PRIVACY POLICY</span></span></span></span></span></a>
                      </h2>
                    </div>
                    <div>
                      <h2 style={{ fontSize: 14, lineHeight: '1.2em', }}>
                        <a href="https://www.acctav.com/license-agreement" style={{ textDecoration: 'none' }} target="_self"><span><span style={{ fontWeight: 'bold', }}><span style={{ fontSize: 14, }}><span style={{ letterSpacing: '0.09em', }}><span style={{ fontFamily: 'helvetica-w01-light,helvetica-w02-light,sans-serif', }}>LICENSE AGREEMENT</span></span></span></span></span></a>
                      </h2>
                    </div>
                    <div>
                      <h2 style={{ fontSize: 14, lineHeight: '1.2em', }}>
                        <a href="https://www.acctav.com/refund-policy" style={{ textDecoration: 'none' }} target="_self"><span style={{ fontSize: 14, }}><span><span style={{ fontWeight: 'bold', }}><span style={{ letterSpacing: '0.09em', }}><span style={{ fontFamily: 'helvetica-w01-light,helvetica-w02-light,sans-serif', }}>REFUND POLICY</span></span></span></span></span></a></h2>
                    </div>
                    <div>
                      <h2 style={{ fontSize: 14, lineHeight: '1.2em', }}>
                        <a href="https://www.acctav.com/support-policy" style={{ textDecoration: 'none' }} target="_self"><span style={{ fontWeight: 'bold', }}><span style={{ fontSize: 14, }}><span><span style={{ letterSpacing: '0.09em', }}><span style={{ fontFamily: 'helvetica-w01-light,helvetica-w02-light,sans-serif', }}>SUPPORT POLICY</span></span></span></span></span></a></h2>
                        </div>
                     </div>
                    <div className='alignIcons'>
                      <ul>
                        <li><a href="http://www.facebook.com/acctav" target="_blank" rel="noreferrer noopener" aria-label="White Facebook Icon"><image style={{ '--wix-img-max-width': 'max(200px, 100%)', maxWidth: 'var(--wix-img-max-width)', }}><img alt="White Facebook Icon" src="https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/23fd2a2be53141ed810f4d3dcdcd01fa.png" style={{ width: 40, height: 40, objectFit: 'cover', }} /></image></a></li>&emsp;
                        <li><a href="https://instagram.com/acctav" target="_blank" rel="noreferrer noopener" aria-label="Instagram"><image style={{ '--wix-img-max-width': 'max(201px, 100%)', maxWidth: 'var(--wix-img-max-width)', }}><img alt="Instagram" fetchpriority="high" src="https://static.wixstatic.com/media/11062b_cef3b719166a4815b446d4dcfcb6120d~mv2.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_cef3b719166a4815b446d4dcfcb6120d~mv2.png" style={{ width: 40, height: 40, objectFit: 'cover', }} /></image></a></li>&emsp;
                        <li><a href="https://twitter.com/acctavTech" target="_blank" rel="noreferrer noopener" aria-label="X   "><image style={{ '--wix-img-max-width': 'max(200px, 100%)', maxWidth: 'var(--wix-img-max-width)', }}><img alt="X   " fetchpriority="high" src="https://static.wixstatic.com/media/11062b_36edc9a0843e4563836cd26e2f9e5c3a~mv2.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_36edc9a0843e4563836cd26e2f9e5c3a~mv2.png" style={{ width: 40, height: 40, objectFit: 'cover', }} /></image></a></li>&emsp;
                        <li><a href="https://www.linkedin.com/company/acctav/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn"><image style={{ '--wix-img-max-width': 'max(201px, 100%)', maxWidth: 'var(--wix-img-max-width)', }}><img alt="LinkedIn" fetchpriority="high" src="https://static.wixstatic.com/media/11062b_b5690303a8ff470e9b1c03a24aff140b~mv2.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_b5690303a8ff470e9b1c03a24aff140b~mv2.png" style={{ width: 40, height: 40, objectFit: 'cover', }} /></image></a></li>&emsp;
                        <li><a href="https://g.page/acctav?gm" target="_blank" rel="noreferrer noopener" aria-label="Google Map"><image style={{ '--wix-img-max-width': 'max(80px, 100%)', maxWidth: 'var(--wix-img-max-width)', }}><img alt="Google Map" fetchpriority="high" src="https://static.wixstatic.com/media/be4d1b_409ef07e5b75440596f84f69e5000809~mv2.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/be4d1b_409ef07e5b75440596f84f69e5000809~mv2.png" style={{ width: 40, height: 40, objectFit: 'cover', }} /></image></a></li>&emsp;
                        <li><a data-testid="linkElement" href="https://www.youtube.com/@acctav" target="_blank" rel="noreferrer noopener" aria-label="Youtube"><image style={{ '--wix-img-max-width': 'max(201px, 100%)', maxWidth: 'var(--wix-img-max-width)', }}><img alt="Youtube" fetchpriority="high" src="https://static.wixstatic.com/media/11062b_fe985b889c144b348eefc7bbc67018b4~mv2.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_fe985b889c144b348eefc7bbc67018b4~mv2.png" style={{ width: 40, height: 40, objectFit: 'cover', }} /></image></a></li>&emsp;
                      </ul>
                    </div>
                 
                </div>
              </div>
              <div>
                <p style={{ fontSize: 14, lineHeight: '1.4em', textAlign: 'center', }}><span style={{ letterSpacing: '0.05em', }}><span style={{ fontSize: 14, }}><span>Acctav Technologies</span></span></span></p>
                <p style={{ fontSize: 14, lineHeight: '0em', textAlign: 'center', }}><span style={{ letterSpacing: '0.05em', }}><span style={{ fontSize: 14, }}><span>43, Amrapali Zodiac, Sector 120, Noida, Uttar Pradesh -201306</span></span></span></p>
                <p style={{ fontSize: 14, lineHeight: '0.8em', textAlign: 'center', }}><span style={{ letterSpacing: '0.05em', }}><span style={{ fontSize: 14, }}><span>Email - <a style={{textDecoration:'none'}} data-auto-recognition="true" href="mailto:contact@acctav.com">contact@acctav.com</a>&nbsp; &nbsp; &nbsp; Phone : +91 0000000000</span></span></span></p>
              </div>
              <div>
                <p style={{ marginTop: '2em', marginBottom:0, textAlign: 'center', fontSize: 14, }}><span><span style={{ letterSpacing: 'normal', }}>&copy; 2024 Acctav Technologies</span></span></p>
              </div>
            </div>
          </div>
        </div>
      </footer> */}




     <footer className="footerStyle"> 
        <div class="inline-elements">
            <span>TERMS &amp; CONDITIONS</span>
            <span>PRIVACY POLICY</span>
            <span>LICENSE AGREEMENT</span>
            <span>REFUND POLICY</span>
            <span>SUPPORT POLICY</span>
        </div>

        <div class="">
            <img src="./images/facebooklogo.webp" alt="Logo 1" class="logo" />
            <img src="./images/instagramlogo.webp" alt="Logo 2" class="logo" />
            <img src="./images/xlogo.webp" alt="Logo 3" class="logo" />
            <img src="./images/inlogo.webp" alt="Logo 4" class="logo" />
            <img src="./images/gmap.webp" alt="Logo 5" class="logo" />
            <img src="./images/ytlogo.webp" alt="Logo 5" class="logo" />

            {/* <ul>
                <li><a href="http://www.facebook.com/acctav" target="_blank" rel="noreferrer noopener" aria-label="White Facebook Icon"><image style={{ '--wix-img-max-width': 'max(200px, 100%)', maxWidth: 'var(--wix-img-max-width)', }}><img alt="White Facebook Icon" src="https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/23fd2a2be53141ed810f4d3dcdcd01fa.png" style={{ width: 40, height: 40, objectFit: 'cover', }} /></image></a></li>&emsp;
                <li><a href="https://instagram.com/acctav" target="_blank" rel="noreferrer noopener" aria-label="Instagram"><image style={{ '--wix-img-max-width': 'max(201px, 100%)', maxWidth: 'var(--wix-img-max-width)', }}><img alt="Instagram" fetchpriority="high" src="https://static.wixstatic.com/media/11062b_cef3b719166a4815b446d4dcfcb6120d~mv2.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_cef3b719166a4815b446d4dcfcb6120d~mv2.png" style={{ width: 40, height: 40, objectFit: 'cover', }} /></image></a></li>&emsp;
                <li><a href="https://twitter.com/acctavTech" target="_blank" rel="noreferrer noopener" aria-label="X   "><image style={{ '--wix-img-max-width': 'max(200px, 100%)', maxWidth: 'var(--wix-img-max-width)', }}><img alt="X   " fetchpriority="high" src="https://static.wixstatic.com/media/11062b_36edc9a0843e4563836cd26e2f9e5c3a~mv2.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_36edc9a0843e4563836cd26e2f9e5c3a~mv2.png" style={{ width: 40, height: 40, objectFit: 'cover', }} /></image></a></li>&emsp;
                <li><a href="https://www.linkedin.com/company/acctav/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn"><image style={{ '--wix-img-max-width': 'max(201px, 100%)', maxWidth: 'var(--wix-img-max-width)', }}><img alt="LinkedIn" fetchpriority="high" src="https://static.wixstatic.com/media/11062b_b5690303a8ff470e9b1c03a24aff140b~mv2.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_b5690303a8ff470e9b1c03a24aff140b~mv2.png" style={{ width: 40, height: 40, objectFit: 'cover', }} /></image></a></li>&emsp;
                <li><a href="https://g.page/acctav?gm" target="_blank" rel="noreferrer noopener" aria-label="Google Map"><image style={{ '--wix-img-max-width': 'max(80px, 100%)', maxWidth: 'var(--wix-img-max-width)', }}><img alt="Google Map" fetchpriority="high" src="https://static.wixstatic.com/media/be4d1b_409ef07e5b75440596f84f69e5000809~mv2.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/be4d1b_409ef07e5b75440596f84f69e5000809~mv2.png" style={{ width: 40, height: 40, objectFit: 'cover', }} /></image></a></li>&emsp;
                <li><a data-testid="linkElement" href="https://www.youtube.com/@acctav" target="_blank" rel="noreferrer noopener" aria-label="Youtube"><image style={{ '--wix-img-max-width': 'max(201px, 100%)', maxWidth: 'var(--wix-img-max-width)', }}><img alt="Youtube" fetchpriority="high" src="https://static.wixstatic.com/media/11062b_fe985b889c144b348eefc7bbc67018b4~mv2.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_fe985b889c144b348eefc7bbc67018b4~mv2.png" style={{ width: 40, height: 40, objectFit: 'cover', }} /></image></a></li>&emsp;
            </ul>        */}
        </div>

        <div>
            <p style={{ fontSize: 14, lineHeight: '1.4em', textAlign: 'center', }}><span style={{ letterSpacing: '0.05em', }}><span style={{ fontSize: 14, }}><span>Acctav Technologies</span></span></span></p>
            <p style={{ fontSize: 14, lineHeight: '0em', textAlign: 'center', }}><span style={{ letterSpacing: '0.05em', }}><span style={{ fontSize: 14, }}><span>43, Amrapali Zodiac, Sector 120, Noida, Uttar Pradesh -201306</span></span></span></p>
            <p style={{ fontSize: 14, lineHeight: '0.8em', textAlign: 'center', }}><span style={{ letterSpacing: '0.05em', }}><span style={{ fontSize: 14, }}><span>Email - <a style={{textDecoration:'none'}} data-auto-recognition="true" href="mailto:contact@acctav.com">contact@acctav.com</a>&nbsp; &nbsp; &nbsp; Phone : +91 0000000000</span></span></span></p>
        </div>

        <div>
            <p style={{ marginTop: '2em', marginBottom:0, textAlign: 'center', fontSize: 14, }}><span><span style={{ letterSpacing: 'normal', }}>&copy; 2024 Acctav Technologies</span></span></p>
        </div>
    </footer>
    </>
  )
}
