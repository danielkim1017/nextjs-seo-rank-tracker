export default function DomainRow({owner, domain, icon}) {
    const keywords = ['github', 'git', 'copilot', 'git share code', 'free git repos',];
    return (
        <div className="flex gap-2 bg-white border border-blue-200 border-b-4 p-4 rounded-lg items-center my-3">
          <img src={icon} className="h-12"/>
          <div>
            <h2 className="font-bold text-xl leading-4">{domain}</h2>
            {keywords.map(keyword => (
              <>
                <span className="text-xs text-gray-500 bg-slate-100 rounded-md p-1 mt-1 inline-block">
                {keyword}</span>{' '}
              </>            
            ))}
          </div>
          <div>
            <div className="bg-green-100 w-36 h-[64px]"></div>
          </div>
      </div>
    )
}