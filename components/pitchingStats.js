import { Tooltip } from "../components/tooltip";

export const PitchingStats = ({ data }) => {
  return (
    <div className="flex-col text-sm md:text-base">
      <h3 className="font-light pb-1">Pitching Stats</h3>
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="pr-8 md:pr-12">
              <Tooltip message="Wins" league={data.league}>
                W
              </Tooltip>
            </th>
            <th className="pr-8 md:pr-12">
              <Tooltip message="Losses" league={data.league}>
                L
              </Tooltip>
            </th>
            <th className="pr-8 md:pr-12">
              <Tooltip message="Saves" league={data.league}>
                SV
              </Tooltip>
            </th>
            <th className="pr-8 md:pr-12">
              <Tooltip message="Earned Run Average" league={data.league}>
                ERA
              </Tooltip>
            </th>
            <th className="pr-8 md:pr-12">
              <Tooltip message="Innings Pitched" league={data.league}>
                IP
              </Tooltip>
            </th>
            <th>
              <Tooltip message="Strike Outs" league={data.league}>
                SO
              </Tooltip>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.wins}</td>
            <td>{data.losses}</td>
            <td>{data.saves}</td>
            <td>{data.era}</td>
            <td>{data.innings}</td>
            <td>{data.strikeouts}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
