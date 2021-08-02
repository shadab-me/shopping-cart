import "./Sidebar.css";

function clickHandler(cb, size) {
  cb(size);
}

function Sidebar(props) {
  const { filterHandler, filters } = props;
  return (
    <div className="sidebar">
      <h3>Sizes:</h3>
      <nav>
        <ul className="flex flex-wrap">
          {["XS", "S", "M", "ML", "L", "XL", "XXL"].map((filter) => {
            return (
              <li
                className={filters.includes(filter) ? "active-filter" : "f"}
                onClick={() => clickHandler(filterHandler, filter)}
              >
                {filter}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
