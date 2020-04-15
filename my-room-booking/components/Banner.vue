<template>
  <div>
    <!--================Banner Area =================-->
    <section class="banner_area">
      <div class="hotel_booking_area position">
        <div class="container">
          <div class="hotel_booking_table">
            <div class="col-md-3">
              <h2>
                Book<br />
                Your Room
              </h2>
            </div>
            <div class="col-md-9">
              <div class="boking_table">
                <div class="row">
                      <div class="col-md-3">
                        <div class = "book_tabel_item">
                        <div>
                            <b-form-select v-model="selected" :options="options" class="mb-3">
                                <!-- This slot appears above the options from 'options' prop -->
                                <template v-slot:first>
                                <b-form-select-option :value="null" disabled>-- Please select an room --</b-form-select-option>
                                </template>

                                <!-- These options will appear after the ones from 'options' prop -->
                                <b-form-select-option value="C">Option C</b-form-select-option>
                                <b-form-select-option value="D">Option D</b-form-select-option>
                            </b-form-select>

                            <div class="mt-3 banner-selection">
                                Selected: <strong>{{ selected }}</strong>
                            </div>
                        </div>
                    </div>
                  </div>

                  <div class="col-md-3">
                    <div class = "book_tabel_item">
                        <div>
                            <b-form-select v-model="selected2" :options="options" class="mb-3">
                                <!-- This slot appears above the options from 'options' prop -->
                                <template v-slot:first>
                                <b-form-select-option :value="null" disabled>-- Please select an size --</b-form-select-option>
                                </template>

                                <!-- These options will appear after the ones from 'options' prop -->
                                <b-form-select-option value="C">Option C</b-form-select-option>
                                <b-form-select-option value="D">Option D</b-form-select-option>
                            </b-form-select>

                            <div class="mt-3 banner-selection">
                                Selected: <strong>{{ selected2 }}</strong>
                            </div>
                        </div>
                    </div>
                  </div>

                  <div class="col-md-3">
                    <div class = "book_tabel_item">
                        <div>
                            <b-form-select v-model="selected3" :options="options" class="mb-3">
                                <!-- This slot appears above the options from 'options' prop -->
                                <template v-slot:first>
                                <b-form-select-option :value="null" disabled>-- Please select an date --</b-form-select-option>
                                </template>

                                <!-- These options will appear after the ones from 'options' prop -->
                                <b-form-select-option value="C">Option C</b-form-select-option>
                                <b-form-select-option value="D">Option D</b-form-select-option>
                            </b-form-select>

                            <div class="mt-3 banner-selection">
                                Selected: <strong>{{ selected3 }}</strong>
                            </div>
                        </div>
                    </div>
                  </div>

                  <div class="col-md-3">
                    <b-button size="lg" variant="warning">Search</b-button>
                </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================Banner Area =================-->
  </div>
</template>

<script>
export default {
    data() {
      return {
        selected: null,
        selected2: null,
        selected3: null,
        options: [
          { value: 'A', text: 'Option A (from options prop)' },
          { value: 'B', text: 'Option B (from options prop)' }
        ]
      }
    }
}
</script>

<style>
/*---------------------------------------------------- */
/*----------------------------------------------------*/
/*============= Start banner_area css =============*/

.banner-selection{
  color: aqua;
}

.banner_area {
  background: #04091e;
  position: relative;
  z-index: 1;
}

/* .banner_area .bg-parallax {
  background: url("../assets/image/hero-bg.jpg") no-repeat scroll center 0 / cover;
  opacity: 0.5;
} */

.banner_area .position {
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
}

.booking_table {
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 800px;
}

.overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 125%;
  bottom: 0;
  z-index: -1;
}

.banner_content {
  color: #fff;
  margin-bottom: 94px;
}

.banner_content h6 {
  font-size: 14px;
  line-height: 30px;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  font-weight: 400;
}

.banner_content h2 {
  font-size: 60px;
  line-height: 60px;
  font-weight: 700;
}

.banner_content p {
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  padding: 10px 0px 20px;
}

/*============= End banner_area css =============*/
.hotel_booking_table {
  background: #04091e;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 40px 50px 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.hotel_booking_table h2 {
  font-size: 24px;
  line-height: 30px;
  color: #fff;
  text-transform: uppercase;
}

.boking_table {
  margin-left: -50px;
}

.book_tabel_item .form-group {
  margin-bottom: 0px;
}

.book_tabel_item .form-group .input-group {
  position: relative;
}

.book_tabel_item .form-group .input-group .form-control {
  border: 1px solid #2b3146;
  background: transparent;
  border-radius: 0px;
  font-size: 13px;
  line-height: 38px;
  padding: 0px 20px;
  color: #777777;
  z-index: 0;
}

.book_tabel_item .form-group .input-group .form-control.placeholder {
  color: #777777;
}

.book_tabel_item .form-group .input-group .form-control:-moz-placeholder {
  color: #777777;
}

.book_tabel_item .form-group .input-group .form-control::-moz-placeholder {
  color: #777777;
}

.book_tabel_item
  .form-group
  .input-group
  .form-control::-webkit-input-placeholder {
  color: #777777;
}

.book_tabel_item .form-group .input-group .form-control:focus {
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.book_tabel_item .form-group .input-group .input-group-addon {
  background: transparent;
  padding: 0px;
  border: 0px;
  position: absolute;
  right: 20px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  color: #777777;
  z-index: 2;
}

.book_tabel_item .input-group {
  margin-bottom: 10px;
}

.book_tabel_item .nice-select {
  background: transparent;
  border-radius: 0px;
  border: 1px solid #2b3146;
  font-size: 13px;
  line-height: 40px;
  height: 40px;
  color: #777;
}

.book_tabel_item .nice-select:after {
  content: "\e874";
  font-family: "Linearicons-Free";
  font-size: 13px;
  color: #777777;
  border: 0px;
  top: 0;
  margin-top: 0px;
  right: 20px;
  -webkit-transform: rotate(0);
  -ms-transform: rotate(0);
  transform: rotate(0);
  -webkit-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
}

/*============= End banner_area css =============*/
</style>
