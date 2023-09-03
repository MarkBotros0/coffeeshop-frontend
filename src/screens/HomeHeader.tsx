import img from '../assets/373972.jpg'

const HomeHeader = () => {
  return (
    <div className='d-flex position-relative justify-content-center h-100 w-100 flex-column'>
      <div className='position-absolute h-100 w-100' style={{ zIndex: "1" }}>
        <div style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)" }}></div>
        <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={img} alt='#' />
      </div>

      <div className='px-5 col-12' style={{ zIndex: "100" }}>
        <h1 className='m-0 p-0 mb-5 text-white display-5 ' style={{}}>
          Welcome to CoffeeShop
        </h1>
        <h2 className='p-0 m-0 text-white col-md-8 mx-auto' style={{ lineHeight: "50px" }}>
          Indulge in a world of flavor and delight at CoffeeShop. We're your ultimate destination for premium goodies, exquisite coffee beans, and refreshing drinks that awaken your senses and elevate your experience.
        </h2>
      </div>
    </div >
  )
}

export default HomeHeader