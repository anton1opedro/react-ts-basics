import type { ReactNode } from "react";

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

function InfoBox(props: InfoBoxProps) {
  if (props.mode === "warning") {
    return (
      <aside className={`infobox infobox-warning warning--${props.severity}`}>
        <h2>Warning</h2>
        <p>{props.children}</p>
      </aside>
    );
  } else if (props.mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{props.children}</p>
      </aside>
    );
  }
}

export default InfoBox;
