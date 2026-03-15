import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Associate Developer</h4>
                <h5>National Payments Corporation of India</h5>
              </div>
              <h3>NOW</h3>
            </div>
           <p>
  Working on the NACH settlement platform at NPCI, supporting bulk credit and
  debit payment processing, file validation, settlement monitoring, and
  reconciliation for secure interbank transactions.
</p>
          </div>

              <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern</h4>
                <h5>Hulk Hire  Teck</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
             <p>
  Integrated PayPal payment gateway into a Spring Boot microservices
  application, enabling secure payment processing, order management,
  and real-time transaction tracking.
</p>
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>System Engineer</h4>
                <h5>Tata Consultancy Services</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
             <p>
  Developed financial applications for NSE supporting trade clearing,
   settlement processes, and
    secure transaction workflows using Java, Spring Boot, and React.
</p>
            </p>
          </div>
      
        </div>
      </div>
    </div>
  );
};

export default Career;
