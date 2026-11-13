import { achievements, achievementsIntro } from "../data/achievements";
import SectionBlock from "./SectionBlock";
import Timeline from "./Timeline";
import { PenDoodle } from "./Doodles";

export default function Achievements() {
  return (
    <SectionBlock
      id="achievements"
      labelledBy="achievements-title"
      title="Achievements"
      text={achievementsIntro}
      doodle={<PenDoodle className="intro-doodle" />}
    >
      <Timeline items={achievements} />
    </SectionBlock>
  );
}
