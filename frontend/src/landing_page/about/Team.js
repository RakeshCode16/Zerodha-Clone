import React from 'react';

function Team() {
    return ( 
        <div className='container'> 
            <div className='row p-5  border-top'>
                <h1 className='text-center'>
                    People
                </h1>
            </div>

            <div className='row p-5 text-muted' style={{lineHeight:"1.8", fontSize:"1.2em"}}>
                <div className='col-6 p-5  text-center'>
                   <img src='media/images/Rakeshpic.jpg' alt="Profile" 
                    style={{
                    width: '80%',
                    borderRadius: '100%',
                    
                    }}  />
                    <h3 className='mt-4'>
                        Rakesh Kumar
                    </h3>
                    <h6>   
                        MERN Stack Developer
                    </h6>   
                </div>
                <div className='col-6 p-5 '>
                    <p className='fs-6'>
                        I'm Rakesh Kumar, a passionate MERN Stack Developer and 2025 graduate in Bachelor of Computer Applications (BCA) from Lalit Narayan Mithila University, C.M. College Darbhanga, Bihar.
                    </p>
                    <p className='fs-6'>
                        With hands-on experience in React.js, Node.js, Express.js, and MongoDB, I specialize in crafting clean, responsive, and scalable web applications. My development journey is rooted in precision, purpose, and a deep commitment to using technology as a tool for youth empowerment and social impact.
                    </p>
                    <p className='fs-6'>
                        I believe in writing code that communicates clarity, designing interfaces that feel intuitive, and solving real-world problems through thoughtful engineering. Whether it's a dynamic portfolio, a community-driven platform, or a startup MVP — I bring energy, empathy, and execution to every project I build.
                    </p>
                    <p>
                        Connect on 
                        <a href='https://www.linkedin.com/in/rakesh-kumar-2032b2279/' style={{ textDecoration:"none"}}>  LinkedIn</a>
                    </p>
                </div>
            </div>

        </div>
     );
}


export default Team;