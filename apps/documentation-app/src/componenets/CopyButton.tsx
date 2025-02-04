import { useState } from 'react';

interface CopyButtonProps {
  text: string;
  className?: string;
}

export const CopyButton = ({ text, className }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset Copied state after 2 seconds
  };

  return (
    <button
      className={`px-4 py-2 rounded-lg text-sm font-medium transition duration-300 ${
        copied ? 'bg-green-500 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'
      } ${className}`}
      onClick={handleCopy}
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
};

export default CopyButton;
