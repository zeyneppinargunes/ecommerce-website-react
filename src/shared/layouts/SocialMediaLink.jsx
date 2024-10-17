import React from 'react';
import styled from 'styled-components';

function SocialMediaLink({ href, name, src }) {
  return (
    <Link target="_blank" href={href}>
      <LinkImage
        alt={name}
        loading="lazy"
        decoding="async"
        data-nimg="fill"
        className="social-media-img"
        src={src}
      />
    </Link>
  );
}

export default SocialMediaLink;

const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: rgb(0, 0, 0);
  width: 24px;
  margin: 0 10px;
`;

const LinkImage = styled.img`
  width: 100%;
  inset: 0px;
  color: transparent;
`;
