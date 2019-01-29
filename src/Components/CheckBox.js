import React from "react";

function CheckBox() {
  return (
    <form className="checkbox">
      <label for="csgo"> CSGO </label>
      <input type="checkbox" name="cb" id="csgo" />
      <br /> <br />
      <label for="r6siege"> RainbowSix </label>
      <input type="checkbox" name="cb" id="r6siege" />
    </form>
  );
}
export default CheckBox;
