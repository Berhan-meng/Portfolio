import { serviceList } from "./ServiceList.js";

export default function ServiceList() {
  return (
    <div className="row">
      <div className="col-lg-11 mx-auto">
        <div className="row">
          {serviceList.map((item) => {
            return (
              <div className="col-md-6">
                <div className="featured-box style-3 mb-5">
                  <div className="featured-box-icon text-primary bg-white shadow-sm rounded">
                    {" "}
                    <i className={item.iconClassName}></i>{" "}
                  </div>
                  <h3>{item.service}</h3>
                  <p className="mb-0">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
