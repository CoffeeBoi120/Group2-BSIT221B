function Services() {
    return(
      <>
      <div className="container">
        <p>Services</p>
      </div>
      </>
    )
  }
  export default Services

  Services.getLayout = function PageLayout(page){
    return(
      <>
      {page}
      </>
    )
  }