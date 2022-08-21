export default function BottomMarquee({ year }) {
  return (
    <div className="mt-auto relative flex overflow-x-hidden text-white">
      <div className="py-6 animate-marquee whitespace-nowrap ">
        <span className="mx-4 text-4xl">{year} MVPS ⚾️</span>
        <span className="mx-4 text-4xl">{year} MVPS ⚾️</span>
        <span className="mx-4 text-4xl">{year} MVPS ⚾️</span>
        <span className="mx-4 text-4xl">{year} MVPS ⚾️</span>
        <span className="mx-4 text-4xl">{year} MVPS ⚾️</span>
        <span className="mx-4 text-4xl">{year} MVPS ⚾️</span>
        <span className="mx-4 text-4xl">{year} MVPS ⚾️</span>
        <span className="mx-4 text-4xl">{year} MVPS ⚾️</span>
        <span className="mx-4 text-4xl">{year} MVPS ⚾️</span>
      </div>
      <div className="absolute py-6 animate-marquee2 whitespace-nowrap">
        <span className="mx-4 text-4xl">{year} MVPS ⚾️</span>
        <span className="mx-4 text-4xl">{year} MVPS ⚾️</span>
        <span className="mx-4 text-4xl">{year} MVPS ⚾️</span>
        <span className="mx-4 text-4xl">{year} MVPS ⚾️</span>
        <span className="mx-4 text-4xl">{year} MVPS ⚾️</span>
        <span className="mx-4 text-4xl">{year} MVPS ⚾️</span>
        <span className="mx-4 text-4xl">{year} MVPS ⚾️</span>
        <span className="mx-4 text-4xl">{year} MVPS ⚾️</span>
        <span className="mx-4 text-4xl">{year} MVPS ⚾️</span>
      </div>
    </div>
  );
}
