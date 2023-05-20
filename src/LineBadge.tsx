import type { Line } from "./data/lines";
import { BACKGROUND_COLOR_BY_TRUNK_LINE } from "./data/lines";
import "./LineBadge.css";

export function LineBadge(props: { line: Line; small?: boolean }) {
  const { line, small } = props;
  return (
    <div
      style={{
        backgroundColor: BACKGROUND_COLOR_BY_TRUNK_LINE[line.trunkLine],
      }}
      className={`station-line${small ? " station-line-small" : ""}${
        line.express ? " express" : " local"
      }`}
    >
      <span className="station-line-name">{line.name}</span>
    </div>
  );
}
