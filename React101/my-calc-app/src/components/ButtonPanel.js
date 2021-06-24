import React from 'react';
import Button from './Button';
import '../css/ButtonPanel.css';

const ButtonPanel = () => {

  return (
    <div className="ButtonPanel">
      <div className="ButtonPanelGroup">
        <Button name="AC" textColor="gray" />
        <Button name="+/-" textColor="gray" />
        <Button name="%" textColor="gray" />
        <Button name="÷" textColor="grey" />
      </div>
      <div className="ButtonPanelGroup">
        <Button  name="7" color="#E0E0E0" textColor="gray" />
        <Button  name="8" color="#E0E0E0" textColor="gray" />
        <Button  name="9" color="#E0E0E0" textColor="gray" />
        <Button  name="×" textColor="gray" />
      </div>
      <div className="ButtonPanelGroup">
        <Button name="4" color="#E0E0E0" textColor="gray" />
        <Button name="5" color="#E0E0E0" textColor="gray" />
        <Button name="6" color="#E0E0E0" textColor="gray" />
        <Button name="-" textColor="gray" />
      </div>
      <div className="ButtonPanelGroup">
        <Button name="1" color="#E0E0E0" textColor="gray" />
        <Button name="2" color="#E0E0E0" textColor="gray" />
        <Button name="3" color="#E0E0E0" textColor="gray" />
        <Button name="+" textColor="gray" />
      </div>
      <div className="ButtonPanelGroup">
        <Button name="0" wide color="#E0E0E0"textColor="gray" />
        <Button name="." color="#E0E0E0" textColor="gray"/>
        <Button name="=" textColor="grey" />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
};

export default ButtonPanel;