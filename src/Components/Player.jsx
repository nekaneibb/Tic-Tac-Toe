import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditing() {
    setIsEditing((editing) => !editing);
    if(isEditing){
      onChangeName(symbol, playerName)
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            value={playerName}
            required
            onChange={handleChange}
          ></input>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
}
