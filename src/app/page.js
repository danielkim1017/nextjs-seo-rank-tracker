import DomainRow from "@/components/DomainRow";
import DoubleHeader from "@/components/DoubleHeader";
import NewDomainForm from "@/components/NewDomainForm";
import { getServerSession } from "next-auth";
import { Span } from "next/dist/trace";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { Domain } from "@/models/domain";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const user = session.user;
  const domains = await Domain.find({owner:user.email});
  return (
    <div>
      <NewDomainForm />
      <DoubleHeader
        preTitle={'Your Domains'} 
        mainTitle={domains.length+' Domains'} />
      {domains.map(domain => (
         <DomainRow {...domain.toJSON()} />
      ))}
    </div>
  );
} 
