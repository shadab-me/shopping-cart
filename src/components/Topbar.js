import "./Top.css";

function orderBy(clothesList, order) {
  switch (order) {
    case "high2low":
      return clothesList.sort((a, b) => b.price - a.price);
    case "low2high":
      return clothesList.sort((a, b) => a.price - b.price);
    default:
      return clothesList;
  }
}

function changeOrder(event, products, cb) {
  cb(orderBy(products, event.target.value));
}

function Topbar(props) {
  return (
    <div className="order">
      <label for="order">Order By: </label>
      <select
        name="order"
        id="order"
        onChange={(event) => changeOrder(event, props.state, props.filter)}
      >
        <option value="select" defaultChecked>
          Select
        </option>
        <option value="high2low">Highest to Lowest</option>
        <option value="low2high">Lowest to Highest</option>
      </select>
    </div>
  );
}
export default Topbar;
