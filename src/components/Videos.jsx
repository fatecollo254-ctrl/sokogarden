const Videos = () => {

  return (
    <div className="container mt-5">

      {/* Section 1 */}
      <h2 className="text-center text-success mb-4">The epitomy of Fashion & Design</h2>
      <section className="row">
        {/* Child 1 goes here (col-md-4) */}
        <div className="col-md-4 mb-4">
          <video
            className="w-100 rounded-1 shadow"
            style={{ height: "220px", objectFit: "cover" }}
            controls
          >
            <source src="public/videos/Videos.mp4" type="video/mp4" />
          </video>
        

          <h5 className="mt-2 text-center">$elos</h5>
          <p className="text-center text-muted">
            $ELLOS — Elevating everyday fashion with premium streetwear, effortless confidence, and a style that speaks for itself.
          </p>
        </div>
        {/* Child 2 goes here (col-md-4) */}
        <div className="col-md-4 mb-4">
          
          <video
            className="w-100 rounded-1 shadow"
            style={{ height: "220px", objectFit: "cover" }}
            controls
          >
            <source src="public/videos/video2.mp4" type="video/mp4" />
          </video>
        

          <h5 className="mt-2 text-center">$elos</h5>
          <p className="text-center text-muted">
            $ELLOS — Where modern fashion meets confidence, originality, and timeless streetwear culture.
          </p>
        </div>

        {/* Child 3 goes here (col-md-4) */}
        <div className="col-md-4 mb-4">
          
          <video
            className="w-100 rounded-1 shadow"
            style={{ height: "220px", objectFit: "cover" }}
            controls
          >
            <source src="public/videos/videos3.mp4" type="video/mp4" />
          </video>
        

          <h5 className="mt-2 text-center">$elos</h5>
          <p className="text-center text-muted">
            $ELLOS — Redefining streetwear through bold style, premium quality, and individuality for those who dare to stand out.
          </p>
        </div>
      </section>
      {/* end of section 1 */}
      <hr className="my-5" />
      {/* Section 2 */}
      {/* NB: You can copy paste secton 1 and pasted it here */}
    </div>
  );
}
export default Videos;
