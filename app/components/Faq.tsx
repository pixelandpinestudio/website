import type { Faq as FaqItem } from "../lib/site";
import { Plus } from "./Icons";

export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq">
      {items.map((f) => (
        <details key={f.q}>
          <summary>
            {f.q}
            <Plus className="faq-icon" />
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
