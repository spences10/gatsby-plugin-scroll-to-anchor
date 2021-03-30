const AnchorScrollll = (location) => {
  const Anchor = document.querySelectorAll(`a[href='${location.hash}']`)[0];
  let Position = null;
  if (Anchor) {
    Position = Anchor.offsetTop;
  }
  window.scrollTo({ top: Position, behavior: "smooth" });
};

exports.onRouteUpdate = ({ location }) => {
  AnchorScrollll(location);
};
