import IframeContent from "./styles";

const Iframe = ({
  iframeSource,
  title,
}: {
  iframeSource: string;
  title: string;
}) => {
  return (
    // eslint-disable-next-line jsx-a11y/iframe-has-title
    <IframeContent
      className="movie-video"
      title={title}
      src={iframeSource}
      frameBorder="0"
      height="529px"
      width="1024px"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></IframeContent>
  );
};

export default Iframe;
