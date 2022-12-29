import React from 'react';
import { getPhoto } from '../service/service';

const Index = () => {
    const [prompt, setPrompt] = React.useState('an apple on fire');
    const [image, setImage] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const onClick = async () => {
        if (prompt) {
          setLoading(true);
          getPhoto(prompt)
            .then(res => {
                const image_url = res.data.data;
                setImage(image_url);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
            });
        };
    };
    const onChange = (e) => {
        setPrompt(e.target.value);
    };
    return (
        <div style={{ background: 'lightblue', height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
            <nav style={{ height: '15vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                <h1>AI Image Generator</h1>
            </nav>
            <input style={{ height: '10vw', width: '40vw', marginTop: '1vh', marginBottom: '1vh', textAlign: 'center' }} onChange={onChange} placeholder='Enter Prompt'></input>
            <button onClick={onClick}>Create Image</button>
            { image && loading ? <div style={{ marginTop: '2vh', marginBottom: '2vh', color: 'white', fontSize: '30px' }}>Loading..</div> : null }
            { image ? <img style={{ height: '300px', width: '300px', marginTop: '7.5vh', marginBottom: '7.5vh' }} src={image} /> : loading ? <div style={{ marginTop: '2vh', marginBottom: '2vh', color: 'white', fontSize: '30px' }}>Loading..</div> : null }
        </div>
    )
};

export default Index;