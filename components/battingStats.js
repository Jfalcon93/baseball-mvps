import { Tooltip } from "../components/tooltip";

export const BattingStats = ({ data }) => {
  return (
    <div className="flex-col text-sm md:text-base">
      <h3 className="font-light pb-1">Batting Stats</h3>
      <table className="table-fixed">
        <thead>
          <tr className="cursor-default">
            <th className="pr-8 md:pr-12">
              <Tooltip message="Batting Average" league={data.league}>
                BA
              </Tooltip>
            </th>
            <th className="pr-8 md:pr-12">
              <Tooltip message="On Base Percentage" league={data.league}>
                OBP
              </Tooltip>
            </th>
            <th className="pr-8 md:pr-12">
              <Tooltip message="Slugging" league={data.league}>
                SLG
              </Tooltip>
            </th>
            <th className="pr-8 md:pr-12">
              <Tooltip message="Home Run" league={data.league}>
                HR
              </Tooltip>
            </th>
            <th className="pr-8 md:pr-12">
              <Tooltip message="Runs Batted In" league={data.league}>
                RBI
              </Tooltip>
            </th>
            <th>
              <Tooltip message="Stolen Bases" league={data.league}>
                SB
              </Tooltip>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.battingAverage}</td>
            <td>{data.onBasePercentage}</td>
            <td>{data.slugging}</td>
            <td>{data.homerun}</td>
            <td>{data.rbi}</td>
            <td>{data.stolenBase}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
