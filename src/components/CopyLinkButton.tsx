'use client';

import { useState } from 'react';
import { Link2, Check } from 'lucide-react';

export default function CopyLinkButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copyLink}
      className="w-9 h-9 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent/30 rounded-lg flex items-center justify-center text-white/50 hover:text-accent transition-all"
      title="Copy link"
    >
      {copied ? (
        <Check className="w-4 h-4 text-accent" />
      ) : (
        <Link2 className="w-4 h-4" />
      )}
    </button>
  );
}
