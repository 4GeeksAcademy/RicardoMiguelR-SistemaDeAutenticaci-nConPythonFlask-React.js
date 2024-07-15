import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer bg-black mt-5 text-center">
		<p>
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<b style={{color: 'gold'}}>Ricardo Miguel Raya</b>
		</p>
		<span>
			<a href="https://4geeksacademy.com/es/coding-bootcamps/desarrollador-full-stack?utm_source=google&utm_medium=cpc&utm_campaign=21252297990&utm_content=167583051248&utm_term=4geeks%20academy&gad_source=1&gclid=Cj0KCQjwkdO0BhDxARIsANkNcremPBOPZZhEbvV_v13Vvr6jSAOFLXo9WDv1Gj1SzMmvDu2F03viCPcaAqyaEALw_wcB" target="blank">
				<img src="https://media.licdn.com/dms/image/D560BAQFmDm4C6hymwQ/company-logo_200_200/0/1693577833799/4geeksacademy_logo?e=2147483647&v=beta&t=DQS8WRITL9lws6l7tiUTKxx7W2gKqGNdV7Z_LE5LE1c" title="Click to go to the 4Geeks Academy site" className="img-4geeks rounded-circle" width="45px" />
			</a>
		</span>
	</footer>
);
