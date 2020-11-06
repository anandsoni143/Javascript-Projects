import React from 'react'
import PortfolioComponent from './portfolioComponent'

const Portfolio = () => (
    <div>
    <section className="page-section portfolio" id="portfolio">
    <div className="container">
        
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
        <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
        </div>
        <div className="row">
        
        <PortfolioComponent target={"#portfolioModal1"} source={require('./portfolio/cake.png')} />        
        <PortfolioComponent target={"#portfolioModal2"} source={require('./portfolio/cake.png')} />        
        <PortfolioComponent target={"#portfolioModal3"} source={require('./portfolio/cake.png')} />        
        <PortfolioComponent target={"#portfolioModal4"} source={require('./portfolio/cake.png')} />        
        <PortfolioComponent target={"#portfolioModal5"} source={require('./portfolio/cake.png')} />        
        <PortfolioComponent target={"#portfolioModal6"} source={require('./portfolio/cake.png')} />        




        </div>
    </div>
</section>


<div class="scroll-to-top d-lg-none position-fixed">
<a class="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i class="fa fa-chevron-up"></i></a>
</div>

</div>
)




export default Portfolio;