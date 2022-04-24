const Iframe = ({ iframeSource }: { iframeSource: string }) => {
  return (
    // eslint-disable-next-line jsx-a11y/iframe-has-title
    <iframe
      src={iframeSource}
      allow="autoplay; encrypted-media"
      frameBorder="0"
      height="529px"
      width="100%"
      allowFullScreen={true}
    ></iframe>
  );
};

export default Iframe;
