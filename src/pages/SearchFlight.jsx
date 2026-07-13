import { useState } from "react";

function SearchFlight() {

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passenger, setPassenger] = useState(1);

  return (
    <div>

      <h2>Uçuş Ara</h2>

      <input
        type="text"
        placeholder="Nereden"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Nereye"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />

      <br /><br />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <br /><br />

      <select
        value={passenger}
        onChange={(e) => setPassenger(e.target.value)}
      >
        <option value="1">1 Yolcu</option>
        <option value="2">2 Yolcu</option>
        <option value="3">3 Yolcu</option>
        <option value="4">4 Yolcu</option>
      </select>

      <br /><br />

      <button>Uçuş Ara</button>

    </div>
  );
}

export default SearchFlight;