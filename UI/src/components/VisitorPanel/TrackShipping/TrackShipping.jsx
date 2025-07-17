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
              <br />
              <h6 style={{ fontWeight: 400 }}>
                Welcome to our "Track Your Shipping" page! Here, you can easily
                monitor the status of your shipments, whether they are traveling
                by train, truck, air, or cargo. Simply enter your tracking
                number in the designated field, and you'll receive real-time
                updates on the location and estimated delivery time of your
                package.
              </h6>
              <br />
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
