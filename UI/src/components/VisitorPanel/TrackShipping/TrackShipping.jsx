function TrackShipping() {
  return (
    <>
      {/* track section */}

      <section className="track_section layout_padding">
        <div className="track_bg_box">
          <img src="images/track-bg.jpg" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="heading_container">
                <h2>Track Your Shipping</h2>
              </div>
              <p>
                Welcome to our "Track Your Shipping" page! Here, you can easily
                monitor the status of your shipments, whether they are traveling
                by train, truck, air, or cargo. Simply enter your tracking
                number in the designated field, and you'll receive real-time
                updates on the location and estimated delivery time of your
                package. Our advanced tracking system ensures that you stay
                informed every step of the way, providing peace of mind as your
                shipment makes its journey. Whether you're sending a small
                parcel or a large cargo shipment, we are committed to delivering
                your goods safely and efficiently. Start tracking your shipment
                now and experience the convenience of our reliable shipping
                services!
              </p>
              <form action="">
                <input type="text" placeholder="Enter Your Tracking Number" />
                <button type="submit">Track</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* end track section */}
    </>
  );
}

export default TrackShipping;
