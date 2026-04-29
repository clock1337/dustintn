import { ExternalLink } from "lucide-react";

interface CodejamDemoProps {
  iframeUrl: string;
  title: string;
  // Used in the chrome bar to indicate what's loaded.
  label?: string;
  className?: string;
  // Mobile-safe height: tall enough on phones to show the showcase's video +
  // dropdown UI, switches to a 16:10 aspect on tablet+ where width is plenty.
  // Override via className if a host page (e.g. /play) wants something else.
  heightClassName?: string;
}

export default function CodejamDemo({
  iframeUrl,
  title,
  label,
  className,
  heightClassName = "min-h-[640px] md:min-h-0 md:aspect-[16/10]",
}: CodejamDemoProps) {
  return (
    <div className={`rounded-xl overflow-hidden border bg-black shadow-2xl ${className ?? ""}`}>
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 text-xs font-mono bg-white/5">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 flex-shrink-0" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 flex-shrink-0" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 flex-shrink-0" />
          <span className="ml-3 text-white/60 truncate">{label ?? iframeUrl.replace(/^https?:\/\//, "")}</span>
        </div>
        <a
          href={iframeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-white inline-flex items-center gap-1 flex-shrink-0 ml-3"
        >
          <span className="hidden sm:inline">Open in new tab</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
      <div className={`bg-black ${heightClassName}`}>
        <iframe
          src={iframeUrl}
          title={title}
          loading="lazy"
          className="w-full h-full border-0 block"
          sandbox="allow-scripts allow-forms allow-popups allow-modals allow-same-origin"
        />
      </div>
    </div>
  );
}
