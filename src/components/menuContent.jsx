import dip from "./DipContent";


export default function menuContent() {
    return (
            <div className="menu_overlay">
                <h1>MENY</h1>

                <section className="fetch_city">
                     <h2>KARLSTAD</h2>
                     <p className="p_menu">kantarell, scharlottenlök, morot, bladpersilja</p>
                    <div className="menu_dotted_line"></div>
                    
                        <section className="sum">
							<h4>9kr</h4>
						</section> 
                </section>
                {dip()}
            </div>
        
    );
}


