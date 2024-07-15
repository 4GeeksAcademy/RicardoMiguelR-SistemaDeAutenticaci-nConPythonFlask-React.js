import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const Private = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            navigate('/')
        } else {
            fetch(process.env.BACKEND_URL + '/api/private-page', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            .then(response => {
                if (response.status !== 200) {
                    navigate('/');
                }
            })
            .catch(error => {
                console.log(error);
                navigate('/');
            });
        }
    }, [navigate]);

    return (
        <>
            <div className="container private-page">
                <div className="private-title text-center mt-5">
                    <h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-exclamation-diamond-fill mb-2 me-2" viewBox="0 0 16 16" style={{color: 'rgb(190, 39, 39)'}}>
                            <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                        </svg>
                        Private content
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-exclamation-diamond-fill mb-2 ms-2" viewBox="0 0 16 16" style={{color: 'rgb(190, 39, 39)'}}>
                            <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                        </svg>
                        </h1>
                </div>
                <div className="private-body text-center mt-5">
                    <h3><b>This content is only for Cristiano Ronaldo fans... And for exclusively authenticated users!</b></h3>
                </div>
                <div className="container text-center mt-5">
                    <div className="row">
                        <div className="col gif-cr7">
                            <img src="https://media.tenor.com/TM0Xkja0docAAAAi/cr7-si.gif" />
                        </div>
                        <div className="col content-cr7">
                            <div>
                                <b>Do you think you know a little about the Goat's great career?</b>  
                            </div>
                            <div>
                                <b>Go ahead, take this test about CR7 and let's see how much you know about him!</b></div>
                            <div>
                                <b><i><a href="https://es.uefa.com/uefachampionsleague/news/0272-145eef73f982-e25be9536e0b-1000--test-de-preguntas-de-cristiano-ronaldo/" target="blank">
                                    <span style={{color: 'yellow'}}>
                                        Test
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right mb-1 ms-1" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                                            <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                                        </svg>
                                    </span>
                                </a></i></b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}