import { experience, experienceIntro } from "../data/experience";
import SectionBlock from "./SectionBlock";
import Timeline from "./Timeline";
import { PenDoodle } from "./Doodles";

export default function Experience() {
  return (
    <SectionBlock
      id="experience"
      labelledBy="experience-title"
      title="Experience"
      text={experienceIntro}
      doodle={<PenDoodle className="intro-doodle" />}
    >
      <Timeline items={experience} />
    </SectionBlock>
  );
}
