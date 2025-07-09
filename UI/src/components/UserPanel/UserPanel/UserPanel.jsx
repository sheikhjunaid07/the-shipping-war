import "./UserPanel.css";

function UserPanel() {
  return (
    <>
      <section className="about_section layout_padding-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>
                    Welcome back, <span>{localStorage.getItem("name")}</span>
                  </h2>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomized words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserPanel;
