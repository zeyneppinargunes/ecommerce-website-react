import React from 'react';
import SocialMediaLink from './SocialMediaLink';

function MainFooter() {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center2',
        }}
      >
        <SocialMediaLink
          name="instagram"
          href="https://www.instagram.com/getmobiltr/"
          src="https://getmobil.com/_next/static/media/instagram.871eff04.svg"
        />
        <SocialMediaLink
          name="facebook"
          href="https://www.facebook.com/getmobilturkiye"
          src="https://getmobil.com/_next/static/media/facebook.7cf5fa9c.svg"
        />
        <SocialMediaLink
          name="twitter"
          href="https://twitter.com/getmobil"
          src="https://getmobil.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fx_Twitter.845d548a.png&amp;w=1920&amp;q=75"
        />
        <SocialMediaLink
          name="tiktok"
          href="https://www.tiktok.com/@getmobiltr"
          src="https://getmobil.com/_next/static/media/tiktok.294f28ae.svg"
        />
        <SocialMediaLink
          name="youtube"
          href="https://www.youtube.com/@Getmobiltr"
          src="https://getmobil.com/_next/static/media/youtube.c11cf9e2.svg"
        />
      </div>
      <p style={{ textAlign: 'center' }}>
        Tüm Hakları Saklıdır © 2024 Getmobil
      </p>
    </div>
  );
}

export default MainFooter;
