import { IAppState as IAppProps } from "./WatchList";
import "./watchlist.css";

const List = ({ form }: IAppProps) => {
  const mapList = (): JSX.Element[] => {
    return form.map((i) => {
      return (
        <tr>
          <td>{i.name}</td>
          <td>{i.rate}</td>
          <td>{i.review}</td>
        </tr>
      );
    });
  };
  return (
    <div className="tableDiv">
      <table>
        <tr>
          <th>Movie</th>
          <th>Rate</th>
          <th>Review</th>
        </tr>
        {mapList()}
      </table>
    </div>
  );
};

export default List;
