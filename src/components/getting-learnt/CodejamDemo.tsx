"use client";

import { ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";

interface CodejamDemoProps {
  iframeUrl: string;
  title: string;
  slug: string;
  // postMessage type the submission expects to start. Most need "adStarted";
  // prize-combo waits for "adFinished".
  startEvent: "adStarted" | "adFinished";
  // External URL for the "Open in new tab" button — we point this at our own
  // /play wrapper route so the new-tab view also boots correctly.
  openInNewTabUrl: string;
  // Optional: control aspect ratio. Default 16/10 matches the embedded view.
  className?: string;
  showChrome?: boolean;
  // When true, the demo fills its parent's height instead of using a 16/10
  // aspect ratio. Used by the full-screen /play route.
  fullHeight?: boolean;
}

export default function CodejamDemo({
  iframeUrl,
  title,
  slug,
  startEvent,
  openInNewTabUrl,
  className,
  showChrome = true,
  fullHeight = false,
}: CodejamDemoProps) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const send = () => {
      // Submissions live on codejam26-showcase.vercel.app — wildcard target is
      // intentional. They're listening for { type: 'adStarted' | 'adFinished' }.
      iframe.contentWindow?.postMessage({ type: startEvent }, "*");
    };

    // Send once on mount in case the iframe is already loaded (cached),
    // and again on the next load event in case it isn't.
    const onLoad = () => {
      // Tiny delay so the submission's listener is definitely attached.
      setTimeout(send, 50);
    };

    iframe.addEventListener("load", onLoad);
    // Best-effort immediate send for prerendered/cached cases.
    setTimeout(send, 200);

    return () => {
      iframe.removeEventListener("load", onLoad);
    };
  }, [startEvent, iframeUrl]);

  return (
    <div
      className={`overflow-hidden bg-black shadow-2xl ${
        fullHeight ? "h-full flex flex-col" : "rounded-xl border"
      } ${className ?? ""}`}
    >
      {showChrome && (
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 text-xs font-mono bg-white/5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="ml-3 text-white/60">{slug}/submission.html</span>
          </div>
          <a
            href={openInNewTabUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white inline-flex items-center gap-1"
          >
            Open in new tab <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      )}
      <div className={fullHeight ? "flex-1 bg-black" : "aspect-[16/10] bg-black"}>
        <iframe
          ref={iframeRef}
          src={iframeUrl}
          title={title}
          loading="lazy"
          className="w-full h-full border-0"
          sandbox="allow-scripts allow-forms allow-popups allow-modals allow-same-origin"
        />
      </div>
    </div>
  );
}
