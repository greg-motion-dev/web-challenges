import useChronicle from "./hooks/useChronicle.js";
import "./styles.css";

export default function App() {
  const [firstName, setFirstName, resetFirstName] = useChronicle("");
  const [lastName, setLastName, resetLastName] = useChronicle("");
  const [phoneNumber, setPhoneNumber, resetPhoneNumber] = useChronicle("");

  return (
    <form>
      <label>
        First Name
        <div>
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <button
            type="button"
            onClick={() => {
              resetFirstName();
            }}
          >
            undo
          </button>
        </div>
      </label>
      <label>
        Last Name
        <div>
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <button
            type="button"
            onClick={() => {
              resetLastName();
            }}
          >
            undo
          </button>
        </div>
      </label>
      <label>
        Phone Number
        <div>
          <input
            type="text"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
          <button
            type="button"
            onClick={() => {
              resetPhoneNumber();
            }}
          >
            undo
          </button>
        </div>
      </label>
      <button type="button">Submit</button>
    </form>
  );
}
