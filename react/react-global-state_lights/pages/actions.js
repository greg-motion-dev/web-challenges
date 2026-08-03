import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({ lights, onTurnAllOff, onTurnAllOn }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        onTurnAllOff={onTurnAllOff}
        onTurnAllOn={onTurnAllOn}
        lights={lights}
      />
    </>
  );
}
