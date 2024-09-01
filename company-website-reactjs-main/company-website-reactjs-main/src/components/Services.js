import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Web Development" img="card1.png" text="Web development involves creating and maintaining websites, focusing on both front-end (user interface) and back-end (server, database) aspects. It includes coding, design, content creation, and ensuring functionality, performance, and user experience across devices." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="E-Commerce Services" img="card2.png" text="we provide tailored e-commerce solutions, including custom store design, secure payments, inventory management, and marketing tools. Enhance your online presence and drive sales with our seamless platform." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Supply Chain" img="card3.png" text="We offer inventory management, logistics, procurement, and distribution solutions to optimize efficiency and reduce costs. Ensure timely delivery and customer satisfaction with our comprehensive supply chain management." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
