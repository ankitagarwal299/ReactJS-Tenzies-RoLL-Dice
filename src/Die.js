import React, { useState } from "react";

export default function Die({ value, isHeld, diceClicked }) {
  const styles = {
    backgroundColor: isHeld ? "green" : "#fff"
  };

  return (
    <div className="die-face" onClick={diceClicked} style={styles}>
      <h2>{value}</h2>
    </div>
  );
}
