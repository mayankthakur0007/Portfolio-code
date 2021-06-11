import "./Clock.css";
const { useState } = require("react");

const Clock = () => {
  const [state, setState] = useState({
    time: "00:00:00",
    amPm: "am",
  });

  const getTime = () => {
    const takeTwelve = (n) => (n > 12 ? n - 12 : n),
      addZero = (n) => (n < 10 ? "0" + n : n);
    let d, h, m, s, t, amPm;
    d = new Date();
    h = addZero(takeTwelve(d.getHours()));
    m = addZero(d.getMinutes());
    s = addZero(d.getSeconds());
    t = `${h}:${m}:${s}`;
    amPm = d.getHours() >= 12 ? "pm" : "am";
    setState({
      time: t,
      amPm: amPm,
    });
  };

  setTimeout(() => {
    getTime();
  }, 1000);

  return (
    <div className="outer">
      <div className="inner">
        <div className="most-inner">
          <span>
            {state.time}
          </span>
          <span className="amPm">{state.amPm}</span>
        </div>
      </div>
    </div>
  );
};

export default Clock;
