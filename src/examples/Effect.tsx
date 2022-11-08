import React, { useState, useEffect } from "react";
import axios from 'axios';

const Effect = () => {
    const [type, setType] = useState('users');
    const [data, setData] = useState('');
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.data)
            .then(data => setData({ ...data }))
    }, [type]);

    const mouseMoveHandler = (e: MouseEvent) => {
        setPos(prev => ({ ...prev, x: e.clientX, y: e.clientY }))
    }
    useEffect(() => {
        console.log('Component did Mount');
        window.addEventListener('mousemove', mouseMoveHandler);

        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler);
        }
    }, []);

    return (
        <div >
            <h1>Resource: {type}</h1>
            <button onClick={() => setType('users')} type="button" className="btn btn-secondary" style={{ margin: '5px' }}>Users</button>
            <button onClick={() => setType('todos')} type="button" className="btn btn-secondary" style={{ margin: '5px' }}>Todo</button>
            <button onClick={() => setType('posts')} type="button" className="btn btn-secondary" style={{ margin: '5px' }}>Posts</button>

            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <pre>{JSON.stringify(pos, null, 2)}</pre>
        </div>
    );
}