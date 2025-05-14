import DoubleHeader from "@/components/DoubleHeader";
import NewDomainForm from "@/components/NewDomainForm";
import { Span } from "next/dist/trace";

export default function Home() {
  const keywords = ['github', 'git', 'copilot', 'git share code', 'free git repos'];
  return (
    <div>
      <NewDomainForm />
      <DoubleHeader preTitle={'Your Domains'} mainTitle={'4 Domains'} />
      <div className="flex gap-2 bg-white border border-blue-200 border-b-4 p-4 rounded-lg items-center">
          <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" className="h-12"/>
          <h2 className="font-bold text-xl">Github.com</h2>
          <div>
            {keywords.map(keyword => (
              <span className="bg-slate-200 inline-block m-1 p-1 rounded-md">
                {keyword}
              </span>
            ))}
          </div>
      </div>
    </div>
  );
}
