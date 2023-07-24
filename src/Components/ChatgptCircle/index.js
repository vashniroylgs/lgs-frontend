import React, { Component } from 'react';
import './index.css'

class RotatingCircle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainData: 'Main Data',
      circles: [
        { id: 1, data: 'Data 1' },
        { id: 2, data: 'Data 2' },
        { id: 3, data: 'Data 3' },
        { id: 4, data: 'Data 4' },
        { id: 5, data: 'Data 5' },
        { id: 6, data: 'Data 6' }
      ],
      rotation: 0
    };
  }

  componentDidMount() {
    this.rotateCircleInterval = setInterval(this.rotateCircle, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.rotateCircleInterval);
  }

  rotateCircle = () => {
    const { circles, rotation } = this.state;
    const shiftedCircles = [...circles.slice(1), circles[0]];
    const newRotation = rotation + (360 / circles.length);

    this.setState({
      circles: shiftedCircles,
      rotation: newRotation
    });
  };

  render() {
    const { mainData, circles, rotation } = this.state;

    return (
      <div className="circle-container">
        <div className="main-circle">{mainData}</div>
        <div className="circle" style={{ transform: `rotate(${rotation}deg)` }}>
          {circles.map(circle => (
            <div key={circle.id} className="small-circle">
              {circle.data}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default RotatingCircle;
