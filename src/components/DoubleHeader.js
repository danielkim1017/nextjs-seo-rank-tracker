export default function DoubleHeader({preTitle, mainTitle}) {
   return (<div>
        <h3 className="text-gray-300 text-lg uppercase">{preTitle}</h3>
        <h2 className="font-bold text-3xl mb-4 leading-5">{mainTitle}</h2>
   </div>
   );
} 