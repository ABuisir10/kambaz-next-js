import "./index.css";
import TailwindBackgroundColors from "./TailwindBackgroundColors";
import TailwindFilters from "./TailwindFilters";
import TailwindGrids from "./TailwindGrids";
import TailwindResponsiveDesign from "./TailwindResponsiveDesign";
import TailwindTypography from "./TailwindSpacing";
import TailwindSpacing from "./TailwindSpacing";

export default function TailwindLab() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Tailwind CSS</h1>
      <TailwindSpacing />
      <TailwindTypography />
      <TailwindBackgroundColors />
      <TailwindResponsiveDesign />
      <TailwindFilters />
      <TailwindGrids />
    </div>
  );
}
