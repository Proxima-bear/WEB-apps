import one_hourImg from "../images/one_hour.svg";
import three_hoursImg from "../images/three_hours.svg";
import five_hoursImg from "../images/five_hours.svg";
import ten_hoursImg from "../images/ten_hours.svg";

export function getData() {
  return [
    { title: "Час", price: 120, Image: one_hourImg,id:1 },
    { title: "3 часа", price: 260, Image: three_hoursImg,id:2 },
    { title: "5 часов", price: 460, Image: five_hoursImg ,id:3},
    { title: "10 часов", price: 650, Image: ten_hoursImg,id:4 },
  ];
}