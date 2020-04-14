<template>
  <div>
    <!--================ Accomodation Area  =================-->
    <section class="accomodation_area section_gap">
      <div class="container">
        <div class="section_title text-center">
          <h2 class="title_color">Room Booking</h2>
          <p>
            We all live in an age that belongs to the young at heart. Life that
            is becoming extremely fast,
          </p>
        </div>
        <div class="row mb_30">
        </div>

        <!-- card -->
        <div class="card-deck">
          <div class="card border-warning mb-3">
            <img src="~/assets/image/meeting-small.jpg" class="card-img-top" alt="" />
            <a href="#" class="btn theme_btn button_hover">Book Now</a>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card border-warning mb-3">
            <img src="~/assets/image/meeting-medium.jpg" class="card-img-top" alt="" />
            <a href="#" class="btn theme_btn button_hover">Book Now</a>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card border-success">
            <img src="~/assets/image/meeting-large.jpg" class="card-img-top" alt="" />
            <a href="#" class="btn theme_btn button_hover">Book Now</a>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <!--================ Accomodation Area  =================-->
  </div>
</template>

<style>
.accomodation_item {
  margin-bottom: 30px;
}

.accomodation_item .hotel_img {
  position: relative;
  margin-bottom: 10px;
  overflow: hidden;
  border-radius: 10px;
}

.accomodation_item .hotel_img img {
  -webkit-transition: all 0.4s linear;
  -o-transition: all 0.4s linear;
  transition: all 0.4s linear;
}

.accomodation_item .hotel_img .theme_btn {
  position: absolute;
  bottom: 20px;
  left: 50%;
  -webkit-transform: translate(-50%);
  -ms-transform: translate(-50%);
  transform: translate(-50%);
  padding: 5px 25px;
  max-width: 128px;
}

.accomodation_item .hotel_img:hover img {
  -webkit-transform: scale(1.19);
  -ms-transform: scale(1.19);
  transform: scale(1.19);
}

.accomodation_item h5 {
  font-size: 24px;
  line-height: 28px;
  color: #52c5fd;
  font-weight: 600;
  margin-bottom: 0px;
}

.accomodation_item h5 small {
  font-weight: 300;
  font-size: 14px;
}

.sec_h4 {
  font-size: 18px;
  line-height: 38px;
  font-weight: 600;
  color: #222222;
  margin-bottom: 0px;
}

.accomodation_two {
  margin-bottom: -40px;
}

.accomodation_two .accomodation_item {
  margin-bottom: 45px;
}

.section_gap {
  padding: 100px 0;
}
</style>
