import axios from "axios"
import jsondata from "~/static/bookingdata.json"
export const strict = false
export const state = () => ({
    bookingdata: jsondata,
  })