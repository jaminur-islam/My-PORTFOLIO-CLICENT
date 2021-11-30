import "./Project.css";
import Projec from "../Projec/Projec";

const projects = [
  {
    name: " The single product web application",
    description:
      "This is a website that users can easily use. And admin can easily maintain. If you want admin, you can easily delete and add any product.All the data of the website has been loaded from the MongoDB database. Users can order if they want, they can cancel the order.Admin will be able to see all the orders, can cancel any order.And he can delete reviews, add products very easily",
    technology:
      "Html, CSS, Bootstrap ,JavaScript, React, Firebase, Node Js,Express Js, MongoDB, Heroku.",
    img: "https://i.ibb.co/xFjV0Tc/web-12.png",
    live: "https://watch-website-70dc3.web.app/",
    git: "https://github.com/jaminur-islam/SINGLE-WATCH-PRODUCTS-WEB-CLIENT-SITE",
  },
  {
    name: "The Hotel booking web application",
    description:
      "The home page has a clickable header. If you click on the menu option there, you can go to different pages. The user must be logged in. Otherwise, he can't go to many pages. The user can book a room and view his booking. Since it does not have an admin dashboard, users can add a service if they wish and receive and delete orders.",
    technology:
      "Html, CSS, Bootstrap ,JavaScript, React, Firebase, Node Js,Express Js, MongoDB, Heroku.",
    img: "https://i.ibb.co/brTK4xy/web-11.png",
    live: "https://hotel-book-bffe7.web.app/",
    git: "https://github.com/jaminur-islam/HOTEL-BOOKGIN-REACT-CLIENT-SITE",
  },
  {
    name: "This is the clinic's web application",
    description:
      "Some extra beautiful sections have been added. Which the user can view without logging in.The user can see the details by clicking on any button, he must log in, otherwise, he will be taken to the login page.Users can login in many ways, when logged in they will see some extra things",
    technology: "Html, CSS, Bootstrap, JavaScript, React, Firebase.",
    img: "https://i.ibb.co/wS5BTt1/web-10.png",
    live: "https://soniya-clinic.web.app/",
    git: "https://github.com/jaminur-islam/SONIYA-CLINIC-REACT",
  },
];

const Project = ({ dark }) => {
  return (
    <div style={{ marginTop: "50px" }}>
      <div className={dark ? "container text-white" : "container text-dark"}>
        <h2> my project </h2>
        <hr className="mt-1" />
        <div className="row">
          {projects.map((project) => (
            <Projec project={project} key={project._id}></Projec>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
