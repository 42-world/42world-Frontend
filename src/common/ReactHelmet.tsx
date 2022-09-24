import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

interface Props {
  keywords: string;
  description: string;
  title: string;
  favicon?: string;
}

const ReactHelmet: React.FC<Props> = ({ keywords, description, title, favicon }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <title>{title}</title>
        <meta property="og:title" content={title} />
        {favicon && <meta property="og:image" content={favicon} />}
        <meta property="og:site_name" content="42world" />
        <meta property="og:description" content={description} />
      </Helmet>
    </HelmetProvider>
  );
};

export default ReactHelmet;
