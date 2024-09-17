'use client'

export default function Formula1() {
    const res = fetch("http://localhost:8080/drivers");
    console.log(res);

    return (
        <div>
            <h1>This is F1 page</h1>
            <ul>
            <li>Ciaociaociao</li>
            </ul>
        </div>
    );
}