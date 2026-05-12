function generateMusic() {

    const musicalNotes =
      ["C", "D", "E", "F", "G", "A", "B"];

    let generated = "";

    for (let i = 0; i < 8; i++) {

        const randomNote =
          musicalNotes[Math.floor(Math.random() *
          musicalNotes.length)];

        generated += randomNote + " ";
    }

    document.getElementById("notes").innerText =
      "Generated Notes: " + generated;
}