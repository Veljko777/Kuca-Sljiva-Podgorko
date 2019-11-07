import React from "react";


class Footer extends React.Component{
    render(){
        return(
            <footer className="footer">
                    <div>
                        <ul className="text-center mb-2">
                            <div className="logo">
                                <a  href="http://www.belfarma.rs" rel="noopener noreferrer" target="_blank">BELFARMA d.o.o.</a>
                            </div>
                            <li><i className="fa fa-phone"></i> +381 69 401 3564</li>
                            <li><i className="fa fa-user"></i> Snežana Ranković</li>
                            <li><i className="fa fa-map-marker"></i> Belotić bb, 14 253 Osečina</li>
                            <li>email: office@belfarma.rs</li>
                            <a href="https://www.instagram.com/kucasljivapodgorko/" rel="noopener noreferrer" target="_blank"><i className="fa fa-instagram fa-lg pr-3" ></i></a>
                            <a href="https://www.facebook.com/Podgorko/" rel="noopener noreferrer" target="_blank"><i className="fa fa-facebook-square fa-lg" ></i></a>
                        </ul>
                    </div>
                    <div className="text-right pr-2 footerend">
                        <p className="mb-0">&copy; 2019. Belfarma. Sva prava zadržana</p>
                    </div>
                </footer>
        )
    }
}

export default Footer;