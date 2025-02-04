import CopyButton from './CopyButton';

interface CodeWindowProps {
  title: string;
  code: string;
}

export const CodeWindow = ({ title, code }: CodeWindowProps) => {
  return (
    <div className="bg-slate-800 p-6 rounded-xl w-full md:w-[47%] shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        <CopyButton text={code} />
      </div>
      <div className="bg-slate-900 rounded-lg">
        <div className="max-h-96 overflow-y-auto">
          <pre className="p-4 overflow-x-auto">
            <code className="text-sm text-slate-200 font-mono whitespace-pre">
              {code}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodeWindow;
