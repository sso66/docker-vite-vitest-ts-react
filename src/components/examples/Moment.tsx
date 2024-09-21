import { Component } from "react";
import moment from "moment";

export default class Moment extends Component {
  render() {
    return (
      <div>
        <h2>Dates Formats</h2>
        <p>1. 20010704T120854 = {moment("20010704T120854").format()} </p>
        <p>
          2. 20010704T120854 ={" "}
          {moment("20010704T120854").format("MMMM Do YYYY")}{" "}
        </p>
        <p>3. 20010704T120854 = {moment("20010704T120854").format("dddd")} </p>
        <p>
          4. 20010704T120854 = {moment("20010704T120854").format("MMM Do YY")}{" "}
        </p>
        <p>5. 20010704T120854 = {moment("20010704T120854").format("YYYY")} </p>
        <p>6. 20010704T120854 = {moment("20010704T120854").format("MMMM")} </p>
        <p>7. 20010704T120854 = {moment("20010704T120854").format("Do")} </p>
        <p>8. 20010704T120854 = {moment("20010704T120854").format("D")} </p>
        <p>9. 20010704T120854 = {moment("20010704T120854").format("ddd")} </p>
        <p>10. 20010704T120854 = {moment("20010704T120854").format("YYYY")} </p>
        <p>11. July 20 2020 = {moment("July 20 2020").format("ddd")} </p>
        <p>12. July 20 2020 = {moment("July 20 2020").format("dddd")} </p>
        <p>13. 20 July 2020 = {moment("20 July 2020").format("D")} </p>
        <p>14. 2006-07-05 = {moment("2006-07-05").format("dddd")} </p>
        <p>
          15. June 04 2001@12:09:56 ={" "}
          {moment("June 04 2001@12:09:56").format("MMMM Do YYYY, h:mm:ss a")}{" "}
        </p>

        <h2>Locale Formats</h2>
        <p>1. 20010704T120854 = {moment("20010704T120854").format("LT")} </p>
        <p>2. 20010704T120854 = {moment("20010704T120854").format("LTS")} </p>
        <p>3. 20010704T120854 = {moment("20010704T120854").format("L")} </p>
        <p>4. 20010704T120854 = {moment("20010704T120854").format("l")} </p>
        <p>5. 20010704T120854 = {moment("20010704T120854").format("LL")} </p>
        <p>6. 20010704T120854 = {moment("20010704T120854").format("ll")} </p>
        <p>7. 20010704T120854 = {moment("20010704T120854").format("LLL")} </p>
        <p>8. 20010704T120854 = {moment("20010704T120854").format("lll")} </p>
        <p>9. 20010704T120854 = {moment("20010704T120854").format("LLLL")} </p>
        <p>10. 20010704T120854 = {moment("20010704T120854").format("llll")} </p>

        <h2>Calendar Time Formats</h2>
        <p>
          1. 20010704T120854 ={" "}
          {moment("20010704T120854").subtract(10, "days").calendar()}{" "}
        </p>
        <p>2. 20010704T120854 = {moment("20010704T120854").calendar()} </p>
        <p>
          3. 20010704T120854 ={" "}
          {moment("20010704T120854").add(3, "days").calendar()}{" "}
        </p>

        <h2>Relative Time Formats</h2>
        <p>1. 20010704T120854 = {moment("20010704T120854").fromNow()} </p>
      </div>
    );
  }
}
