import ResortCard from "./ResortCard";
import type { ResortListing } from "../data/data";

type ResortListProps = {
  data: ResortListing[];
};                                                                                                                                                              

export default function ResortList({ data }: ResortListProps) {
  return (
    <div className="resort-list">
      {data.map((item) => (
        <ResortCard key={item.id} resort={item} />
      ))}
    </div>
  );
}
