export default function cartContent() {
    return (
        <article>
            <div className="cart_overlay">
            
                <section className="fetch_city">
                     <h2>KARLSTAD</h2>
                     <p>kantarell, scharlottenlök, morot, bladpersilja</p>
                    <div className="menu_dotted_line"></div>
                    
                        <section className="sum">
							<h4>9kr</h4>
						</section> 
                </section>
            </div>
         
            <section className="cart_footer">
                    <section className="total_footer">
                        <p className="sum_footer_left">TOTALT</p> <p className="sum_footer_right">101 SEK</p>
                    </section>
                    <button className="button_footer">TAKE MY MONEY!</button>
                </section>
            </article>
    );
}

