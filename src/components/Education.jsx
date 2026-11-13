import { education, educationIntro } from "../data/education";
import SectionBlock from "./SectionBlock";
import Timeline from "./Timeline";
import { PenDoodle } from "./Doodles";

export default function Education() {
  return (
    <SectionBlock
      id="education"
      labelledBy="education-title"
      title="Education"
      text={educationIntro}
      doodle={<PenDoodle className="intro-doodle" />}
    >
      <Timeline items={education} />
    </SectionBlock>
  );
}
