import React, { useState, useEffect } from "react";
import firebase from "../Firebase/FirebaseConfig";
import { SpellInput } from "./EditProduct";

function App() {
    const [spells, setSpells] = useState([]);
    const [newSpellName, setNewSpellName] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore();
            const data = await db.collection("productos").get();
            setSpells(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };
        fetchData();
    }, []);

    const onCreate = () => {
        const db = firebase.firestore();
        db.collection("productos").add({ name: newSpellName });
    };

    return (
        <ul>
            <input
                value={newSpellName}
                onChange={e => setNewSpellName(e.target.value)}
            />
            <button onClick={onCreate}>Creat</button>
            {spells.map(spell => (
                <li key={spell.name}>
                    <SpellInput spell={spell} />
                </li>
            ))}
        </ul>
    );
}

export default App;