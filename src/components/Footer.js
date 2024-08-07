import "./FooterStyles.css"
import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaLinkedin } from "react-icons/fa"

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-container">
				<div className="left">

					<div className="location">
						<h4><FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />6 Trent St</h4>
					</div>

					<div className="phone">
						<h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />6479491031</h4>
					</div>

					<div className="email">
						<h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />chardudev@outlook.com</h4>
					</div>

				</div>

				<div className="right">
					<h4>About Me</h4>
					<p>UBC CS student</p>
					<div className="linkedin">
						<FaLinkedin size={30} style={{ color: "#fff" }} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer