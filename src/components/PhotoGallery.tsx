import building from "@/assets/building.jpg";
import openOffice from "@/assets/open-office.jpg";
import agent from "@/assets/agent.jpg";
import teamMeeting from "@/assets/team-meeting.jpg";
import developers from "@/assets/developers.jpg";
import training from "@/assets/training.jpg";
import officeTeam from "@/assets/office-team.jpg";

export const photos = {
  building: { src: building, w: 1536, h: 1024, alt: "Modern office building in Antsirabe, Madagascar", label: "Our building" },
  openOffice: { src: openOffice, w: 1536, h: 1024, alt: "Bright open-plan office with professionals at work", label: "Open workspace" },
  agent: { src: agent, w: 1024, h: 1280, alt: "Smiling customer service agent wearing a headset", label: "Customer care" },
  teamMeeting: { src: teamMeeting, w: 1536, h: 1024, alt: "Team collaborating in a meeting room", label: "Team spirit" },
  developers: { src: developers, w: 1024, h: 1280, alt: "Two developers working together at dual monitors", label: "IT & development" },
  training: { src: training, w: 1536, h: 1024, alt: "Trainer presenting to young professionals", label: "Training" },
  officeTeam: { src: officeTeam, w: 1024, h: 1280, alt: "Professionals at modern workstations", label: "Daily operations" },
} as const;

type Key = keyof typeof photos;

function Tile({ k, className = "" }: { k: Key; className?: string }) {
  const p = photos[k];
  return (
    <figure className={`group relative overflow-hidden rounded-xl border border-border shadow-elevate ${className}`}>
      <img
        src={p.src}
        width={p.w}
        height={p.h}
        alt={p.alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <figcaption className="absolute bottom-3 left-3 border-l-4 border-accent bg-navy/85 px-3 py-1.5 text-[12px] font-semibold text-navy-foreground backdrop-blur">
        {p.label}
      </figcaption>
    </figure>
  );
}

/** Bento-style photo mosaic: building, offices and people. */
export function PhotoGallery({
  title = "Life at Optiline Mada",
  subtitle = "Real workspaces, real people — a modern environment where teams grow.",
  keys = ["building", "agent", "openOffice", "teamMeeting", "developers", "training"] as Key[],
}: {
  title?: string;
  subtitle?: string;
  keys?: Key[];
}) {
  const [a, b, c, d, e, f] = keys;
  return (
    <section className="py-16 md:py-20">
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">Gallery</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      <p className="mt-3 max-w-2xl text-muted-foreground">{subtitle}</p>
      <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[200px] md:grid-cols-4">
        {a && <Tile k={a} className="col-span-2 row-span-2" />}
        {b && <Tile k={b} className="row-span-2" />}
        {c && <Tile k={c} />}
        {d && <Tile k={d} />}
        {e && <Tile k={e} className="col-span-2" />}
        {f && <Tile k={f} className="col-span-2" />}
      </div>
    </section>
  );
}

/** Wide single photo banner. */
export function PhotoBanner({ k, caption }: { k: Key; caption?: string }) {
  const p = photos[k];
  return (
    <figure className="relative my-12 overflow-hidden rounded-xl border border-border shadow-elevate">
      <img src={p.src} width={p.w} height={p.h} alt={p.alt} loading="lazy" className="aspect-[21/9] w-full object-cover" />
      {caption && (
        <figcaption className="absolute bottom-4 left-4 border-l-4 border-coral bg-navy px-5 py-3 text-[14px] font-bold text-navy-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
