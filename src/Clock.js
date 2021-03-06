import React, { useState, useEffect } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  return <div className="clock">{date.toLocaleTimeString()}</div>;
}
// class Clock extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { date: new Date() };
//   }

//   componentDidMount() {
//     // There is a bug in this component, where this.timer is not cleared if the
//     // component is unmounted. It will continue to try to render if even the
//     // component is no longer in the DOM.
//     this.timer = setInterval(this.tick, 1000);
//   }

//   tick = () => {
//     this.setState({ date: new Date() });
//   };

//   render() {
//     return <div className="clock">{this.state.date.toLocaleTimeString()}</div>;
//   }
// }

export default Clock;
