import {
  AppWindow,
  BookOpen,
  Braces,
  Code,
  Coffee,
  Database,
  FileCode,
  Hash,
  Layers,
  Lightbulb,
  Mic,
  Palette,
  PenTool,
  Smartphone,
  Users,
} from "lucide-react";
import { skillGroups } from "../data/skills";
import SectionBlock from "./SectionBlock";
import SparkleIcon from "./SparkleIcon";

const iconMap = {
  AppWindow,
  BookOpen,
  Braces,
  Code,
  Coffee,
  Database,
  FileCode,
  Hash,
  Layers,
  Lightbulb,
  Mic,
  Palette,
  PenTool,
  Smartphone,
  Users,
};

const chipTones = ["chip-pink", "chip-yellow", "chip-blue"];

export default function Skills() {
  return (
    <SectionBlock
      id="skills"
      labelledBy="skills-title"
      title="Skills"
      text="Languages, tools, and practices I use in school and in projects."
      doodle={<SparkleIcon size={28} className="intro-doodle" />}
    >
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div key={group.id} className="skill-group">
            <h3>{group.label}</h3>
            <ul>
              {group.items.map((item, index) => {
                const Icon = iconMap[item.icon] || Code;
                return (
                  <li key={item.name} className={chipTones[index % chipTones.length]}>
                    <Icon size={15} strokeWidth={1.75} aria-hidden="true" />
                    <span>{item.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </SectionBlock>
  );
}
