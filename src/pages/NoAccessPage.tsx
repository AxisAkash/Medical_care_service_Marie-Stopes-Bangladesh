import { ArrowLeft, LockKeyhole } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card } from "../components/ui";
import { useAuth } from "../auth/AuthContext";
import { modules } from "../data/mock";

export default function NoAccessPage() {
  const navigate = useNavigate(); const { module } = useParams(); const { activeUser } = useAuth(); const label = modules.find((item) => item.id === module)?.label ?? "this workspace";
  return <div className="mx-auto max-w-xl animate-in"><Card className="p-8 text-center sm:p-12"><span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-warning-50 text-warning-500"><LockKeyhole size={26} /></span><p className="mt-6 text-[12px] font-bold uppercase tracking-[.14em] text-warning-500">Role access control</p><h1 className="mt-3 font-display text-2xl font-bold tracking-[-.04em] text-neutral-900">No access to {label}</h1><p className="mx-auto mt-3 max-w-sm text-[13px] leading-6 text-neutral-500">{activeUser?.title} does not have permission to view this area in the demo workspace. Ask an administrator to update your role.</p><Button variant="secondary" className="mt-7" onClick={() => navigate(`/app/${activeUser?.landingModule ?? "dashboard"}`)} icon={<ArrowLeft size={16} />}>Return to my dashboard</Button></Card></div>;
}
