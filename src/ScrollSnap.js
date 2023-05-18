import React from "react";
import scrollSnapPolyfill from "css-scroll-snap-polyfill";

class ScrollSnap extends React.Component {
  containerRef = React.createRef();

  componentDidMount() {
    this.applyScrollSnap();
  }

  componentDidUpdate() {
    this.applyScrollSnap();
  }

  applyScrollSnap() {
    scrollSnapPolyfill(this.containerRef.current, {
      snapDestinationY: "100%",
      timeout: this.props.timeout || 50,
      duration: this.props.duration || 150,
    });
  }

  render() {
    const { children, className } = this.props;
    return (
      <div ref={this.containerRef} className={className}>
        {children}
      </div>
    );
  }
}

export default ScrollSnap;
