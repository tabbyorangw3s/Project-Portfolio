import { services } from "../data/services";
import { CursorDoodle, EyeIcon, PencilIcon, PhoneIcon } from "./Doodles";

const icons = {
  pencil: PencilIcon,
  eye: EyeIcon,
  phone: PhoneIcon,
};

export default function WhatIDo() {
  return (
    <section className="what" id="services" aria-labelledby="what-title">
      <div className="what-heading">
        <h2 id="what-title">What I do?</h2>
        <CursorDoodle className="cursor-doodle" />
      </div>
      <div className="notes">
        {services.map((service) => {
          const Icon = icons[service.icon];
          return (
            <article key={service.id} className={`note note-${service.tone}`}>
              <span className={`note-label label-${service.labelTone}`}>
                {service.label}
              </span>
              <Icon />
              <h3>{service.title}</h3>
            </article>
          );
        })}
      </div>
    </section>
  );
}
